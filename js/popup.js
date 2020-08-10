const svgMapping = {
  pin: 'M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z',
  play: 'M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z',
  pause: 'M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z',
  toStart: 'M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z',
  toEnd: 'M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z',
  fastBackward: 'M0 436V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v151.9L235.5 71.4C256.1 54.3 288 68.6 288 96v131.9L459.5 71.4C480.1 54.3 512 68.6 512 96v320c0 27.4-31.9 41.7-52.5 24.6L288 285.3V416c0 27.4-31.9 41.7-52.5 24.6L64 285.3V436c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12z',
  fastForward: 'M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z',
  mute: 'M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z',
  volumeDown: 'M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z',
  volumeUp: 'M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z',
  volumeOff: 'M215 71l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z',
  slow: 'M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z',
  fast: 'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z',
}

function createSvg(name, title, className, viewBox, d) {
  const svgNS = 'http://www.w3.org/2000/svg'
  const svgButton = document.createElement('div')
  svgButton.classList.add(className)
  svgButton.setAttribute('ctrlName', name)
  svgButton.setAttribute('title', title)

  let svg = document.createElementNS(svgNS, 'svg');

  svg.setAttributeNS(null, 'width', 20);
  svg.setAttributeNS(null, 'height', 20);
  svg.setAttributeNS(null, 'aria-hidden', true);
  svg.setAttributeNS(null, 'focusable', false);
  svg.setAttributeNS(null, 'data-prefix', 'fas');
  svg.setAttributeNS(null, 'role', 'img');
  svg.setAttributeNS(null, 'viewBox', viewBox);
  svg.classList.add('svg-inline--fa', 'fa-thumbtack', 'fa-w-12')
  let path = document.createElementNS(svgNS, 'path');
  path.setAttributeNS(null, 'fill', 'currentColor');
  path.setAttributeNS(null, 'd', d);
  svg.appendChild(path)
  svgButton.appendChild(svg)
  return svgButton
}

function createRangeInput(min, max, value, width, marginTop ,name) {
  const input = document.createElement('input')
  input.setAttribute('ctrlName', name)
  input.setAttribute('type', 'range')
  input.setAttribute('min', min)
  input.setAttribute('max', max)
  input.setAttribute('value', value)
  input.setAttribute('step', 1)
  input.style.width = width
  input.style.marginTop = marginTop
  return input
}

function createRow(data, sender, pinned) {
  document.querySelector('.noVideo').classList.add('hide')

  const parent = document.createElement('div')
  parent.setAttribute('id', data.hashCode)
  parent.setAttribute('tabId', sender.tab.id)
  parent.setAttribute('frameId', sender.frameId)

  parent.classList.add('videoItem')
  const row = document.createElement('div')
  row.classList.add('ctrlUp')

  const row2 = document.createElement('div')
  row2.classList.add('ctrlDown')

  parent.appendChild(row)
  parent.appendChild(row2)

  const timeCtrl = createRangeInput(0, data.duration, data.currentTime, '100%', '0px', 'time')
  row2.appendChild(timeCtrl)
  timeCtrl.addEventListener('input', (e) => {
    chrome.tabs.sendMessage(sender.tab.id, {
      action: 'mc:time',
      value: e.target.value,
      hashCode: data.hashCode,
    }, {frameId: sender.frameId});
  })

  const thumbnail = document.createElement('div')
  thumbnail.classList.add('thumbnail')
  thumbnail.style.backgroundImage = `url("${data.image}")`

  const buttonPin = createSvg(
    'pin',
    chrome.i18n.getMessage('btnPin'),
    'svg-button',
    '0 0 384 512',
    svgMapping.pin
  )
  row.appendChild(buttonPin)
  // thumbnail.appendChild(img)
  row.appendChild(thumbnail)

  if (pinned) buttonPin.classList.add('active')
  buttonPin.addEventListener('click', () => {
    const hashCode = parent.getAttribute('id')
    const tabId = parseInt(parent.getAttribute('tabId'))
    const frameId = parseInt(parent.getAttribute('frameId'))
    browser.runtime.getBackgroundPage().then(page => {
      const elems = document.querySelectorAll(`[id=${hashCode}] .svg-button`)
      if (page.isPinned(hashCode)) {
        for (const e of elems) {
          e.classList.remove('active')
        }
        page.unpinVideo(hashCode)
      } else {
        for (const e of elems) {
          e.classList.add('active')
        }
        page.pinVideo({hashCode, tabId, frameId})
      }
    })
  })

  const buttonPlay = createSvg(
    'play',
    chrome.i18n.getMessage('btnPlay'),
    'mc-button',
    '0 0 448 512',
    svgMapping.play
  )
  buttonPlay.classList.add('hide')
  thumbnail.appendChild(buttonPlay)
  // buttonPlay.addEventListener('click', () => {
  //   chrome.tabs.sendMessage(sender.tab.id, {
  //     action: 'mc:play',
  //     hashCode: data.hashCode,
  //   }, {frameId: sender.frameId});
  // })
  const buttonPause = createSvg(
    'pause',
    chrome.i18n.getMessage('btnPause'),
    'mc-button',
    '0 0 448 512',
    svgMapping.pause
  )
  buttonPause.classList.add('hide')
  thumbnail.appendChild(buttonPause)
  // buttonPause.addEventListener('click', () => {
  //   chrome.tabs.sendMessage(sender.tab.id, {
  //     action: 'mc:pause',
  //     hashCode: data.hashCode,
  //   }, {frameId: sender.frameId});
  // })

  thumbnail.addEventListener('click', () => {
    if (!buttonPlay.classList.contains('hide') || !buttonPause.classList.contains('hide')) {
      chrome.tabs.sendMessage(sender.tab.id, {
        action: 'mc:togglePlay',
        hashCode: data.hashCode,
      }, {frameId: sender.frameId});
    }
  })

  const buttonToStart = createSvg(
    'toStart',
    chrome.i18n.getMessage('btnToStart'),
    'mc-button',
    '0 0 448 512',
    svgMapping.toStart
  )
  row.appendChild(buttonToStart)
  buttonToStart.addEventListener('click', () => {
    chrome.tabs.sendMessage(sender.tab.id, {
      action: 'mc:toStart',
      hashCode: data.hashCode,
    }, {frameId: sender.frameId});
  })

  const buttonFastBackward = createSvg(
    'fastBackward',
    chrome.i18n.getMessage('btnFastBackword'),
    'mc-button',
    '0 0 512 512',
    svgMapping.fastBackward
  )
  row.appendChild(buttonFastBackward)
  buttonFastBackward.addEventListener('mousedown', (e) => {
    e.preventDefault()
    let shift = 5
    if (e.shiftKey) {
      shift = 10
    } else if (e.ctrlKey) {
      shift = 1
    }
    chrome.tabs.sendMessage(sender.tab.id, {
      action: 'mc:fastBackward',
      shift,
      hashCode: data.hashCode,
    }, {frameId: sender.frameId});
  })

  const buttonFastForward = createSvg(
    'fastForward',
    chrome.i18n.getMessage('btnFastForward'),
    'mc-button',
    '0 0 512 512',
    svgMapping.fastForward
  )
  row.appendChild(buttonFastForward)
  buttonFastForward.addEventListener('mousedown', (e) => {
    e.preventDefault()
    let shift = 5
    if (e.shiftKey) {
      shift = 10
    } else if (e.ctrlKey) {
      shift = 1
    }
    chrome.tabs.sendMessage(sender.tab.id, {
      action: 'mc:fastForward',
      shift,
      hashCode: data.hashCode,
    }, {frameId: sender.frameId});
  })

  const buttonToEnd = createSvg(
    'toEnd',
    chrome.i18n.getMessage('btnToEnd'),
    'mc-button',
    '0 0 448 512',
    svgMapping.toEnd
  )
  row.appendChild(buttonToEnd)
  buttonToEnd.addEventListener('click', () => {
    chrome.tabs.sendMessage(sender.tab.id, {
      action: 'mc:toEnd',
      hashCode: data.hashCode,
    }, {frameId: sender.frameId});
  })

  const buttonMute = createSvg(
    'mute',
    chrome.i18n.getMessage('btnUnmute'),
    'mc-button',
    '0 0 512 512',
    svgMapping.mute
  )
  const buttonVolumeDown = createSvg(
    'volumeDown',
    chrome.i18n.getMessage('btnMute'),
    'mc-button',
    '0 0 384 512',
    svgMapping.volumeDown
  )
  const buttonVolumeUp = createSvg(
    'volumeUp',
    chrome.i18n.getMessage('btnMute'),
    'mc-button',
    '0 0 576 512',
    svgMapping.volumeUp
  )
  const buttonVolumeOff = createSvg(
    'volumeOff',
    chrome.i18n.getMessage('btnMute'),
    'mc-button',
    '0 0 256 512',
    svgMapping.volumeOff
  )
  row.appendChild(buttonMute)
  row.appendChild(buttonVolumeDown)
  row.appendChild(buttonVolumeUp)
  row.appendChild(buttonVolumeOff)
  buttonMute.addEventListener('click', () => {
    chrome.tabs.sendMessage(sender.tab.id, {
      action: 'mc:unmute',
      hashCode: data.hashCode,
    }, {frameId: sender.frameId});
  })
  buttonVolumeDown.addEventListener('click', () => {
    chrome.tabs.sendMessage(sender.tab.id, {
      action: 'mc:mute',
      hashCode: data.hashCode,
    }, {frameId: sender.frameId});
  })
  buttonVolumeUp.addEventListener('click', () => {
    chrome.tabs.sendMessage(sender.tab.id, {
      action: 'mc:mute',
      hashCode: data.hashCode,
    }, {frameId: sender.frameId});
  })
  buttonVolumeOff.addEventListener('click', () => {
    chrome.tabs.sendMessage(sender.tab.id, {
      action: 'mc:mute',
      hashCode: data.hashCode,
    }, {frameId: sender.frameId});
  })

  const volumeCtrl = createRangeInput(0, 100, data.volume * 100, '80px', '6px', 'volume')
  row.appendChild(volumeCtrl)
  volumeCtrl.addEventListener('input', (e) => {
    chrome.tabs.sendMessage(sender.tab.id, {
      action: 'mc:volume',
      value: e.target.value,
      hashCode: data.hashCode,
    }, {frameId: sender.frameId});
  })


  // const buttonMute = createSvg(
  //   'slow',
  //   chrome.i18n.getMessage('btnSlow'),
  //   'mc-button',
  //   '0 0 448 512',
  //   svgMapping.slow
  // )
  // const buttonVolumeDown = createSvg(
  //   'fast',
  //   chrome.i18n.getMessage('btnFast'),
  //   'mc-button',
  //   '0 0 448 512',
  //   svgMapping.fast
  // )

  if (data.pinned) {
    buttonPin.classList.add('active')
    document.querySelector('.pinnedVideoList').appendChild(parent)
  } else {
    document.querySelector('.videoList').appendChild(parent)
  }
  updateStatus(row, data)
}

function updateStatus(row, data) {
  if (data.paused !== undefined) {
    const buttonPlay = row.querySelector('[ctrlName=play]')
    const buttonPause = row.querySelector('[ctrlName=pause]')
    if (data.paused) {
      buttonPlay.classList.remove('hide')
      buttonPause.classList.add('hide')
    } else {
      buttonPlay.classList.add('hide')
      buttonPause.classList.remove('hide')
    }
  }
  if (data.volume !== undefined) {
    const ctrlVolume = row.querySelector('[ctrlName=volume]')
    if (ctrlVolume.value != (data.volume * 100)) {
      ctrlVolume.value = data.volume * 100
    }
  }
  if (data.muted !== undefined) {
    const buttonMute = row.querySelector('[ctrlName=mute]')
    const buttonVolumeDown = row.querySelector('[ctrlName=volumeDown]')
    const buttonVolumeUp = row.querySelector('[ctrlName=volumeUp]')
    const buttonVolumeOff = row.querySelector('[ctrlName=volumeOff]')
    if (data.muted) {
      buttonMute.classList.remove('hide')
      buttonVolumeOff.classList.add('hide')
      buttonVolumeDown.classList.add('hide')
      buttonVolumeUp.classList.add('hide')
    } else {
      if (data.volume == 0) {
        buttonMute.classList.add('hide')
        buttonVolumeDown.classList.add('hide')
        buttonVolumeUp.classList.add('hide')
        buttonVolumeOff.classList.remove('hide')
      } else if (data.volume >= 0.5) {
        buttonMute.classList.add('hide')
        buttonVolumeDown.classList.add('hide')
        buttonVolumeUp.classList.remove('hide')
        buttonVolumeOff.classList.add('hide')
      } else {
        buttonMute.classList.add('hide')
        buttonVolumeDown.classList.remove('hide')
        buttonVolumeUp.classList.add('hide')
        buttonVolumeOff.classList.add('hide')
      }
    }
  }
  if (data.duration !== undefined) {
    const ctrlTime = row.querySelector('[ctrlName=time]')
    const max = ctrlTime.getAttribute('max')
    if (max != (data.duration)) {
      ctrlTime.setAttribute('max', data.duration)
    }
  }
  if (data.currentTime !== undefined) {
    const ctrlTime = row.querySelector('[ctrlName=time]')
    if (ctrlTime.value != (data.volume)) {
      ctrlTime.value = data.currentTime
    }
  }
}

browser.runtime.getBackgroundPage().then(page => {
  const pinnedVideos = page.getPinnedVideos()
  const activedTabs = page.getActivedTabs()
  const preferences = page.getPreferences()
  const pinVideoMapping = pinnedVideos.reduce((acc, cur) => {acc[cur.hashCode] = cur;return acc;}, {})
  const messageHandler = (message, sender, sendResponse) => {
    if (message.action === 'execContentScript') {
      chrome.tabs.executeScript(sender.tab.Id, {
        file: 'js/content-script.js',
        frameId: sender.frameId,
        runAt: 'document_end'
      }, () => {
        chrome.tabs.sendMessage(sender.tab.id, {
          action: 'scanVideo',
          minWidth: preferences.minWidth,
          minHeight: preferences.minHeight
        }, {frameId: sender.frameId});
      });
    } else if (message.action === 'addVideoElement') {
      if (!activedTabs[sender.tab.id]) {
        delete message.paused
      }
      createRow(message, sender, pinVideoMapping[message.hashCode])
    } else if (message.action === 'updateStatus') {
      const row = document.querySelector(`.videoList [id=${message.hashCode}]`)
      if (row) updateStatus(row, message)
      const row2 = document.querySelector(`.pinnedVideoList [id=${message.hashCode}]`)
      if (row2) updateStatus(row2, message)
    }
  }
  chrome.runtime.onMessage.addListener(messageHandler);

  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    if ((typeof tabs !== 'undefined') && (tabs.length > 0)) {
      const currentTab = tabs[0];
      for (const v of pinnedVideos) {
        if (v.tabId !== currentTab.id) {
          chrome.tabs.sendMessage(v.tabId, {
            action: 'updateStatus',
            hashCode: v.hashCode,
          }, {frameId: v.frameId});
        }
      }

      if(!['about:addons', 'about:blank', 'about:newtab'].includes(currentTab.url)) {
        chrome.tabs.executeScript(currentTab.id, {
          code: '(function(){if(!window.selfId) {chrome.runtime.sendMessage({action: "execContentScript"})} else {scanVideo()} })();',
          allFrames: true
        });
      }
    }
  });

  browser.runtime.getBackgroundPage().then(page => {
    const pinnedVideos = page.getPinnedVideos()
    //
  })
}, error => {
  //
});

window.addEventListener('load', () => {
  let l10nTags = Array.from(document.querySelectorAll('[data-l10n-id]'));
  l10nTags.forEach(tag => {
    tag.textContent = chrome.i18n.getMessage(tag.getAttribute('data-l10n-id'));
  });
}, true);

window.addEventListener('unload', () => {
  const rows = document.querySelectorAll('.videoItem')
  let videos = []
  for (const row of rows) {
    const hashCode = row.getAttribute('id')
    const tabId = parseInt(row.getAttribute('tabId'))
    const frameId = parseInt(row.getAttribute('frameId'))
    videos.push({hashCode, tabId, frameId})
  }
  videos = [...new Set(videos)];
  browser.runtime.getBackgroundPage().then(page => {
    page.unmountEventListener(videos)
  })
})

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
}, false)
