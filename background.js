let tabs = chrome.tabs

chrome.runtime.onInstalled.addListener(function() {
  tabs.onActivated.addListener(yifyPopupBuster(tabs))
  tabs.onCreated.addListener(yifyPopupBuster(tabs))
  tabs.onUpdated.addListener(yifyPopupBuster(tabs))
})

const yifyAliases = [
  "yts",
  "ytss",
  "yify"
]

const yifyPopupBuster = (tabs) => {
  tabs.getAllInWindow(null, (tabs) => {
    tabs.forEach(tab => {
      let isYify = yifyAliases.some((alias) => {
        return tab.url.includes(alias)
      })
      if(isYify) {
        chrome.tabs.executeScript(tab.id, {file: 'removeAnnoyingPopups.js'})
      }
    })
  })
}

