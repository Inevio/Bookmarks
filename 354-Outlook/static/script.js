
let webviewInterval = setInterval(function () {
  let webviewDom = $('.browser-content .webview-0')
  let interval = setInterval(function () {
    if (!webviewDom[0] || !webviewDom[0].getWebContents()) {
      return clearInterval(interval)
    } else {
      clearInterval(webviewInterval)
    }
    webviewDom[0].getWebContents().send('getNotifications', JSON.stringify(['._15uz-H6xEi0gpTrjSlvL-T div', '._1R8zyedlf574PfvRosuwXp']))
  }, 2500)
}, 500)
