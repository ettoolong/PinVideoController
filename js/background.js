let videoElementMapping = {};
let pinnedVideos = []
let activedTabs = {}

let defaultPreference = {
  minWidth: 100,
  minHeight: 100,
  autoHideCursor: false,
  iconColor: 0,
  version: 1
};
let preferences = {};

const storageChangeHandler = (changes, area) => {
  if(area === 'local') {
    let changedItems = Object.keys(changes);
    for (let item of changedItems) {
      preferences[item] = changes[item].newValue;
      switch (item) {
        case 'iconColor':
          setBrowserActionIcon();
          break;
      }
    }
  }
};

const loadPreference = () => {
  chrome.storage.local.get(results => {
    if ((typeof results.length === 'number') && (results.length > 0)) {
      results = results[0];
    }
    if (!results.version) {
      preferences = defaultPreference;
      chrome.storage.local.set(defaultPreference, res => {
        chrome.storage.onChanged.addListener(storageChangeHandler);
      });
    } else {
      preferences = results;
      chrome.storage.onChanged.addListener(storageChangeHandler);
    }
    if (preferences.version !== defaultPreference.version) {
      let update = {};
      let needUpdate = false;
      for(let p in defaultPreference) {
        if(preferences[p] === undefined) {
          update[p] = defaultPreference[p];
          needUpdate = true;
        }
      }
      if(needUpdate) {
        chrome.storage.local.set(update);
      }
    }
    setBrowserActionIcon();
  });
};

const setBrowserActionIcon = () => {
  if(preferences.iconColor === 1) {
    chrome.browserAction.setIcon({path: 'icon/icon_w.svg'});
  } else {
    chrome.browserAction.setIcon({path: 'icon/icon_b.svg'});
  }
};

window.addEventListener('DOMContentLoaded', event => {
  loadPreference();
});

chrome.tabs.onRemoved.addListener((tabId) => {
  delete activedTabs[tabId]
  pinnedVideos = pinnedVideos.filter(v => v.tabId !== tabId)
});

function pinVideo(video) {
  if (!isPinned(video.hashCode)) {
    pinnedVideos.push({...video})
  }
}

function unpinVideo(hashCode) {
  pinnedVideos = pinnedVideos.filter(v => v.hashCode !== hashCode)
}

function isPinned(hashCode) {
  return pinnedVideos.find(v => v.hashCode === hashCode)
}

function getPinnedVideos() {
  return pinnedVideos
}

function getActivedTabs() {
  return activedTabs
}

function getPreferences() {
  return preferences
}

function unmountEventListener(videos) {
  for(const video of videos) {
    chrome.tabs.sendMessage(video.tabId, {
      action: 'mc:unmount',
      hashCode: video.hashCode,
    }, {frameId: video.frameId})
  }
}

const messageHandler = (message, sender, sendResponse) => {
  if (message.action === 'videoUnload') {
    pinnedVideos = pinnedVideos.filter(v => v.hashCode !== message.hashCode)
  }
  else if (message.action === 'activeTab') {
    activedTabs[sender.tab.id] = true
  } else if (message.action === 'unloadTab') {
    if (sender.tab) {
      delete activedTabs[sender.tab.id]
    }
  }
  return false;
}
chrome.runtime.onMessage.addListener(messageHandler);
