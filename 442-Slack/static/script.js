/* let webviewInterval = setInterval(function () {
  let webviewDom = $('.browser-content .webview-0')
  let interval = setInterval(function () {
    // console.log('mando notificaciones', !webviewDom[0].getWebContents())
    if (!webviewDom[0] || !webviewDom[0].getWebContents()) {
      return clearInterval(interval)
    } else {
      clearInterval(webviewInterval)
    }
    webviewDom[0].getWebContents().send('getNotificationBadge', '.p-channel_sidebar__channel.p-channel_sidebar__channel--unread')
  }, 2500)
}, 500) */

var webviewInterval = setInterval(function () {
  let webviewDom = $('.browser-content .webview-0')
  // console.log('compruebo webviewDom', webviewDom, !webviewDom[0] || !webviewDom[0].getWebContents())
  if (!webviewDom[0] || !webviewDom[0].getWebContents()) {
    return
  }
  // console.log('pido notificaciones')
  webviewDom[0].getWebContents().send('getNotificationBadge', '.p-channel_sidebar__channel.p-channel_sidebar__channel--unread')
}, 1000)

$(this).on('ui-view-removed', function () {
  console.log('cierro')
  if (webviewInterval) {
    clearInterval(webviewInterval)
    webviewInterval = null
  }
})
