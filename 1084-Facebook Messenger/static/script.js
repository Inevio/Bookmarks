let regex = /^\((\d+)\)/

setTimeout(function(){

  let webviewDom = $('.browser-content .webview-0')

  webviewDom.on('page-title-updated', function(event){
    event = event.originalEvent
    let title = event.title
    let myRegex = new RegExp(regex)
    let match = myRegex.exec(title)
    let refreshed = false
    console.log('cambio de titulo ',title, match)
    if(match && match[1]){
      api.app.setBadge(match[1])
      refreshed = true
    }else{
      refreshed = false
      setTimeout( function(){
        if(!refreshed){
          api.app.setBadge(0)
        }
      },3000)
    }
  })

},500)