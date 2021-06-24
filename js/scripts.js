window.onload = function () {

    /**
     * Tab functionality implementation
     *
     * @param { HTMLElement } element - tab header ID
     */
    function Tabs( element ) {
        /**
         * Return false if invalid element passed, element should be a valid id selector
         */
        if( !element || !document.querySelector( element.getAttribute('data-target') ) ) return false;

        const triggers     = [...element.children];
        const target       = document.querySelector( element.getAttribute('data-target') );
        const tab_contents = [...target.children];

        /**
         * Clear active class for tab headers & tab content
         */
        function reset() {
            triggers.forEach( x => x.classList.remove('active'));
            tab_contents.forEach( x => x.classList.remove('active'));
        }

        /**
         * Set active tab by index
         *
         * @param { int } index - tab index
         */
        function setActiveTab( index ) {
            reset();

            tab_contents[ index ].classList.add('active');
            triggers[ index ].classList.add('active');
        }

        /**
         * On init set first tab active & set click event listener
         */
        function init() {
            reset();
            setActiveTab(0);

            triggers.forEach((t,i) => t.onclick = event => setActiveTab(i));
        }

        return {
            init: init()
        }
    }

    [...document.querySelectorAll('.tab-header')].forEach(t => Tabs(t) );


    /**
     * Parse URL function
     *
     * @param { string } url - the url string to parse
     */
    function parseUrl( url ) {
        try { let u = new URL( url ) }
        catch (er) { return false }

        return new URL( url );
    }

    const url = 'http://ffwagency.com/do/any.php?a=1#foo';
    let obj   = parseUrl( url );

    console.log( obj )
    // console.log( obj.origin )
    // console.log( obj.hash )
    // console.log( obj.host )
    // console.log( obj.pathname )
    // console.log( obj.protocol )
    // console.log( obj.search )

}
