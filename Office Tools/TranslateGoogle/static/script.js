
  var win    = $( this );
  var width;
  var height;
  var minWidth  = 980;
  var minHeight = 529;
  var maxWidth = api.tool.desktopWidth();
  var maxHeigth = api.tool.desktopHeight() - 70;


  if (minHeight > maxHeigth || minWidth > maxWidth) {
    width = maxWidth;
    height = maxHeigth;

  }else {
    width = minWidth;
    height = minHeight;
  }
  var left   = ( wz.tool.environmentWidth() / 2 ) - ( width / 2 );
  var top    = ( wz.tool.environmentHeight() / 2 ) - ( height / 2 );
  var windowObject = api.popup( 'https://translate.google.es/', width, height).render();

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
