const HASHCODE_LENGTH = 32;
let mcImpl = {};
let idCount = 0;
mcImpl.updateTimer = null;

function getHashCode(length) {
  let hashCode = '';
  let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for(let i = 0; i < length; ++i) {
    let r = Math.floor((Math.random() * (i === 0 ? 52 : 62) )); //don't start with number
    let char = characters.charAt(r);
    hashCode += char;
  }
  return hashCode;
}
window.selfId = getHashCode(HASHCODE_LENGTH);

function capture (video) {
  let scale = video.videoHeight / 50.0;
  let w = 50;
  let h = 50;
  if(scale > 1) {
    w = video.videoWidth / scale
    h = video.videoHeight / scale
  }

  let canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  let ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, w, h);
  let dataURI = canvas.toDataURL('image/jpeg');
  return dataURI;
}

function getElemInfo(elem) {
  let elemRect = elem.getBoundingClientRect();
  let hashCode = elem.getAttribute('mcHashCode');
  let foundSource = false;
  if (!hashCode) {
    hashCode = getHashCode(HASHCODE_LENGTH);
    elem.setAttribute('mcHashCode', hashCode);
  }

  if (elem.getAttribute('src')) {
    foundSource = true;
  } else {
    if (elem.querySelector('source[src]')) {
      foundSource = true;
    }
  }
  return {
    tagName: elem.tagName.toLocaleLowerCase(),
    width: elemRect.width,
    height: elemRect.height,
    hashCode: hashCode,
    source: foundSource,
    image: capture(elem)
  };
}

function onVideoPlay(e) {
  e.target.addEventListener('timeupdate', onVideoTimeUpdate, true);
  let mcHashCode = e.target.getAttribute('mcHashCode');
  chrome.runtime.sendMessage({
    action: 'updateStatus',
    hashCode: mcHashCode,
    paused: false
  });
}

function onVideoPause(e) {
  e.target.removeEventListener('timeupdate', onVideoTimeUpdate, true);
  let mcHashCode = e.target.getAttribute('mcHashCode');
  chrome.runtime.sendMessage({
    action: 'updateStatus',
    hashCode: mcHashCode,
    paused: true
  });
}

function onVideoVolumeChange(e) {
  let mcHashCode = e.target.getAttribute('mcHashCode');
  chrome.runtime.sendMessage({
    action: 'updateStatus',
    hashCode: mcHashCode,
    volume: e.target.volume,
    muted: e.target.muted
  });
}

function onVideoDurationChange(e) {
  let mcHashCode = e.target.getAttribute('mcHashCode');
  chrome.runtime.sendMessage({
    action: 'updateStatus',
    hashCode: mcHashCode,
    duration: e.target.duration,
  });
}

function onVideoTimeUpdate(e) {
  let mcHashCode = e.target.getAttribute('mcHashCode');
  chrome.runtime.sendMessage({
    action: 'updateStatus',
    hashCode: mcHashCode,
    currentTime: Math.floor(e.target.currentTime),
  });
}

function mountEventListener(elem) {
  if (!elem.getAttribute('mc-el')) {
    elem.setAttribute('mc-el', true)
    elem.addEventListener('play', onVideoPlay, true);
    elem.addEventListener('pause', onVideoPause, true);
    elem.addEventListener('volumechange', onVideoVolumeChange, true);
    elem.addEventListener('durationchange', onVideoDurationChange, true);
    if (!elem.paused) {
      elem.addEventListener('timeupdate', onVideoTimeUpdate, true);
    }
  }
}

function unmountEventListener(elem) {
  elem.removeAttribute('mc-el')
  elem.removeEventListener('play', onVideoPlay, true);
  elem.removeEventListener('pause', onVideoPause, true);
  elem.removeEventListener('volumechange', onVideoVolumeChange, true);
  elem.removeEventListener('durationchange', onVideoDurationChange, true);
  elem.removeEventListener('timeupdate', onVideoTimeUpdate, true);
}

function uploadElemInfo(elements, minWidth, minHeight, onlyUpdateNewElem) {
  // let elemInfos = [];
  for (let elem of elements) {
    let mcHashCode = elem.getAttribute('mcHashCode');
    if (onlyUpdateNewElem && mcHashCode) {
      continue;
    }
    let elemInfo = getElemInfo(elem);
    mountEventListener(elem)
    if (elemInfo.width >= minWidth && elemInfo.height >= minHeight) {
      chrome.runtime.sendMessage({
        ...elemInfo,
        paused: elem.paused,
        volume: elem.volume,
        muted: elem.muted,
        duration: elem.duration,
        currentTime: elem.currentTime,
        action: 'addVideoElement'
      });
    }
  }
}

function scanVideo(minWidth = 100, minHeight = 100) {
  mcImpl.status = 'scanVideo';
  // console.log('scanVideo');
  let elements = document.querySelectorAll('video');
  const _uploadElemInfo = () => {
    mcImpl.scanVideoTimer = null;
    if (mcImpl.status === 'scanVideo') {
      uploadElemInfo(elements, minWidth, minHeight );
      // elements = document.querySelectorAll(selector);
      // uploadElemInfo(elements, message.minWidth, message.minHeight, true);
      // mcImpl.scanVideoTimer = setTimeout(_uploadElemInfo, 200);
    }
  }
  _uploadElemInfo();
}

function getVNode(hashCode) {
  return document.querySelector(`video[mchashcode=${hashCode}]`)
}

chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
  if (message.action === 'scanVideo') {
    scanVideo(message.minWidth, message.minHeight)
  } else if (message.action === 'cancelScanVideo') {
    mcImpl.status = 'normal';
  } else if (message.action === 'updateStatus') {
    const node = getVNode(message.hashCode)
    let elemInfo = getElemInfo(node);
    mountEventListener(node)
    chrome.runtime.sendMessage({
      ...elemInfo,
      paused: node.paused,
      volume: node.volume,
      muted: node.muted,
      duration: node.duration,
      currentTime: node.currentTime,
      pinned: true,
      action: 'addVideoElement'
    });
  } else if (message.action === 'mc:play') {
    getVNode(message.hashCode).play()
  } else if (message.action === 'mc:pause') {
    getVNode(message.hashCode).pause()
  } else if (message.action === 'mc:togglePlay') {
    const node = getVNode(message.hashCode)
    if(node.paused) {
      node.play();
    } else {
      node.pause();
    }
  } else if (message.action === 'mc:toStart') {
    getVNode(message.hashCode).currentTime = 0
  } else if (message.action === 'mc:toEnd') {
    const node = getVNode(message.hashCode)
    if (node) { node.currentTime = node.duration }
  } else if (message.action === 'mc:volume') {
    getVNode(message.hashCode).volume = message.value/100.0
  } else if (message.action === 'mc:mute') {
    getVNode(message.hashCode).muted = true
  } else if (message.action === 'mc:unmute') {
    getVNode(message.hashCode).muted = false
  } else if (message.action === 'mc:fastBackward') {
    getVNode(message.hashCode).currentTime -= message.shift
  } else if (message.action === 'mc:fastForward') {
    getVNode(message.hashCode).currentTime += message.shift
  } else if (message.action === 'mc:time') {
    const node = getVNode(message.hashCode)
    if (node) {
      node.pause()
      node.removeEventListener('timeupdate', onVideoTimeUpdate, true);
      node.currentTime = message.value
    }
  }

  else if(message.action === 'mc:unmount') {
    const node = getVNode(message.hashCode)
    if (node) {
      unmountEventListener(node)
    }
  }
  return false;
});

window.addEventListener('unload', () => {
  const videos = document.querySelectorAll('[mchashcode]')
  if (videos.length) {
    for (const v of videos) {
      const hashCode = v.getAttribute('mchashcode')
      chrome.runtime.sendMessage({
        hashCode,
        action: 'videoUnload'
      });
    }
  }
})
