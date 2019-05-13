// let regex = /^.+\((\d+)\)/

// let window = $(this).parents().slice( -1 )[ 0 ].parentNode.defaultView
var webviewInterval = setInterval(function () {
  let webviewDom = $('.browser-content .webview-0')
  // console.log('compruebo webviewDom', webviewDom, !webviewDom[0] || !webviewDom[0].getWebContents())
  if (!webviewDom[0] || !webviewDom[0].getWebContents()) {
    return
  }
  // console.log('pido notificaciones')
  webviewDom[0].getWebContents().send('getNotifications', JSON.stringify(['.aim', '.bsU']))
}, 1000)

$(this).on('ui-view-removed', function () {
  console.log('cierro')
  if (webviewInterval) {
    clearInterval(webviewInterval)
    webviewInterval = null
  }
})
