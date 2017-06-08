chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: "document.querySelector('body').classList.toggle('dark-mode')"
  });
});
