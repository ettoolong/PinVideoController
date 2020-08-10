window.addEventListener('mousedown', () => {
  chrome.runtime.sendMessage({
    action: 'activeTab'
  });
}, {once: true})
window.addEventListener('unload', () => {
  chrome.runtime.sendMessage({
    action: 'unloadTab'
  });
})
