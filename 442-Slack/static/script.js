setTimeout(function(){

  let webviewDom = $('.browser-content .webview-0')
  let interval = setInterval(function(){
    console.log('mando notificaciones', !webviewDom[0].getWebContents())
    if(!webviewDom[0].getWebContents()){
      clearInterval(interval)
    }
    webviewDom[0].getWebContents().send('getNotificationBadge',  '.p-channel_sidebar__channel.p-channel_sidebar__channel--unread')
  }, 2500)

},500)