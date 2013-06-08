/*
 *	animated-header.js
 *	Manouella Ilic
 *	http://tympanus.net/codrops/2013/06/06/on-scroll-animated-header/
 */
var animatedHeader = (function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( '#header-animated' ),
        didScroll = false,
        changeHeaderOn = 300;
 
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }
 
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            $(header).addClass('header-shrink');
        }
        else {
            $(header).removeClass('header-shrink');
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    init();
 
})();