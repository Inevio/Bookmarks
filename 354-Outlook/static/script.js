
setTimeout(function(){

  let webviewDom = $('.browser-content .webview-0')
  setInterval(function(){
    webviewDom[0].getWebContents().send('getNotifications',  JSON.stringify(['._15uz-H6xEi0gpTrjSlvL-T div','._1R8zyedlf574PfvRosuwXp']))
  }, 2500)

},500)