let regex = /^\((\d+)\)\s.*/

let webviewInterval = setInterval(function(){

  let webviewDom = $('.browser-content .webview-0')
  let lastCount = 0

  if(!webviewDom[0].getWebContents()){
    return
  }else{
    clearInterval(webviewInterval)
  }

  webviewDom.on('page-title-updated', function(event){
    event = event.originalEvent
    let title = event.title
    let myRegex = new RegExp(regex)
    let match = myRegex.exec(title)
    let timeout
    console.log('cambio de titulo ',title, match)
    if(match && match[1]){
      lastCount = parseInt(match[1])
      api.app.setBadge(parseInt(match[1]))
      if(timeout){
        clearTimeout(timeout)
      }
    }else if(lastCount === 0){
      api.app.setBadge(0)
    }else{
      timeout = setTimeout(function(){
        if(!webviewDom[0]) return
        let newTitle = webviewDom[0].getTitle()
        let myRegex2 = new RegExp(regex)
        let match2 = myRegex.exec(newTitle)
        if(!(match2 && match2[1])){
          api.app.setBadge(0)
        }
      },6000)
    }
  })

},500)