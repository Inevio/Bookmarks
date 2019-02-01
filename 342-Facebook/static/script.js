setTimeout(function(){

  let webviewDom = $('.browser-content .webview-0')
  let interval = setInterval(function(){
    if(!webviewDom[0].getWebContents()){
      clearInterval(interval)
    }
    webviewDom[0].getWebContents().send('getNotifications',  JSON.stringify(['._3eo9','._51lp']))
  }, 2500)

},500)