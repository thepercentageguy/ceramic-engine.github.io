
document.addEventListener("DOMContentLoaded", function(e) {

    var iframes = document.querySelectorAll('.page-standard .page-container .content-right iframe');
    layoutIframes(iframes);

    function layoutIframes() {
        // Ensures iframes keep their aspect ratio when scaled from CSS
        for (var iframe of iframes) {
            var offsetWidth = iframe.offsetWidth;
            var attrWidth = parseInt(iframe.getAttribute('width'));
            var attrHeight = parseInt(iframe.getAttribute('height'));
            if (!isNaN(attrWidth) && !isNaN(attrHeight) && attrWidth > 0 && attrHeight > 0) {
                iframe.style.height = (offsetWidth * attrHeight / attrWidth) + 'px';
            }
        }
    }

    function layout() {
        layoutIframes();
    }

    document.addEventListener("resize", function(e) {
        layout();
    });

    /*
    window.addEventListener('scroll', function(e) {
        console.log('scroll: '+window.pageYOffset);
        var sidebar = document.querySelector('.page-standard .page-container .sidebar-left .sidebar');
        if (sidebar != null) {
            sidebar.style.top = (48 + Math.max(0, window.pageYOffset)) + 'px';
        }
    });

    function frame(delta) {

        // var sidebar = document.querySelector('.page-standard .page-container .sidebar-left .sidebar');
        // if (sidebar != null) {
        //     sidebar.style.top = (48 + Math.max(0, window.pageYOffset)) + 'px';
        // }

        requestAnimationFrame(frame);
    }

    frame(0);
    */

});
