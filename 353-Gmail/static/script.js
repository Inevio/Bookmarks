// let regex = /^.+\((\d+)\)/

// let window = $(this).parents().slice( -1 )[ 0 ].parentNode.defaultView
let webviewInterval = setInterval(function () {
  let webviewDom = $('.browser-content .webview-0')
  let interval = setInterval(function () {
    if (!webviewDom[0] || !webviewDom[0].getWebContents()) {
      return clearInterval(interval)
    } else {
      clearInterval(webviewInterval)
    }
    webviewDom[0].getWebContents().send('getNotifications', JSON.stringify(['.aim', '.bsU']))
  }, 2500)

  /* webviewDom.on('page-title-updated', function(event){
    event = event.originalEvent
    let title = event.title
    let myRegex = new RegExp(regex)
    let match = myRegex.exec(title)
    console.log('cambio de titulo ',title, match)
    if(match && match[1]){
      api.app.setBadge(match[1])
    }else{
      api.app.setBadge(0)
    }
  }) */
}, 1000)
