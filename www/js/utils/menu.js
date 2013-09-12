            
app.utils.menu = (function() {

    var toggleMenu = function(){
        console.log('menu');
        var menuLeft = document.getElementById( 'cbp-spmenu-s1' );
        var showLeft = document.getElementById( 'open-left' )
        //var body = document.body;
        classie.toggle( showLeft, 'is-active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        //classie.toggle( body, 'cbp-spmenu-push-toright' ); 
    }
    
    

    // The public API
    return {
        toggleMenu: toggleMenu
    };

}());