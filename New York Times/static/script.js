  var win    = $( this );
  var minWidth  = 1200;
  var minHeight = 750;
  var maxWidth = api.tool.desktopWidth() - 10;
  var maxHeigth = api.tool.desktopHeight() - 70;
  if (minHeight > maxHeigth || minWidth > maxWidth) {
    width = maxWidth;
    height = maxHeigth;

  }else {
    width = minWidth;
    height = minHeight;
  }
  var windowObject = api.popup( 'https://www.nytimes.com/', width, height).render();

    var timer = setInterval( function(){

        if( windowObject.closed ){

            wz.view.remove();
            clearInterval( timer );

        }

    }, 500 );

    win
    .on( 'ui-view-focus', function(){
        windowObject.focus();
    })

    .on( 'ui-view-removed', function(){
        windowObject.close();
    });

    // To Do -> A la espera de métodos para conocer cuando se va a cerrar Inevio
    /*
    wzWindow.onbeforeunload = function(){
        windowObject.close();
    };
    */
