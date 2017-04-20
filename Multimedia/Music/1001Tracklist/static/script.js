
    var win    = $( this );
    var width  = 730;
    var height = 400;
    var left   = ( api.tool.environmentWidth() / 2 ) - ( width / 2 );
    var top    = ( api.tool.environmentHeight() / 2 ) - ( height / 2 );
    var windowObject = api.popup( 'http://www.1001tracklists.com/', width, height ).render();

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
