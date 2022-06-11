
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

    var menus = document.querySelectorAll('.page-standard .page-container .sidebar-left li.menu-title');
    bindMenus(menus);

    function bindMenus(menus) {

        for (var menu of menus) {
            if (menu.classList.contains('menu-title')) {
                menu.addEventListener('click', function(e) {
                    for (var m of menus) {
                        if (m == e.currentTarget) {
                            if (m.classList.contains('selected')) {
                                m.classList.remove('selected');
                                console.log(m.nextSibling);
                                m.nextElementSibling.classList.remove('expanded');
                            }
                            else {
                                m.classList.add('selected');
                                console.log(m.nextSibling);
                                m.nextElementSibling.classList.add('expanded');
                            }
                        }
                    }
                });
            }
        }
    }

    var didLike = false;
    bindLikeCounter();

    function bindLikeCounter() {
        var likeCounters = document.querySelectorAll('.page-standard .page-container .content-right main #like-counter');

        var len = 0;
        for (var likeCounter of likeCounters) {
            len++;
        }

        if (len > 0) {
            var uri = window.location.pathname;
            if (!uri.startsWith('/'))
                uri = '/' + uri;

            var script = document.createElement("script");
            var callback = "jsonp" + new Date().getTime();
            var counterUrl = "https://api.ceramic-engine.com/like-counter" + uri + "?jsonp=" + callback;
            window[callback] = function(count) {
                document.body.removeChild(script);
                script = null;

                for (var likeCounter of likeCounters) {
                    likeCounter.innerHTML = [
                        '<div class="like-counter-button"><span class="like-counter-heart"></span> <span class="like-counter-count">+' + (count + 1) + '</span></div>'
                    ].join('\n');

                    likeCounter.addEventListener('click', function(e) {
                        if (!didLike)
                            addOneLike();
                    });
                }
            };
            script.src = counterUrl;
            document.body.appendChild(script);
        }
    }

    function addOneLike() {

        didLike = true;

        var likeCounters = document.querySelectorAll('.page-standard .page-container .content-right main #like-counter');

        for (var likeCounter of likeCounters) {
            likeCounter.classList.add('like-counter-liked');
        }

        var likeCounts = document.querySelectorAll('.page-standard .page-container .content-right main #like-counter .like-counter-count');

        var uri = window.location.pathname;
        if (!uri.startsWith('/'))
            uri = '/' + uri;

        var script = document.createElement("script");
        var callback = "jsonp" + new Date().getTime();
        var counterUrl = "https://api.ceramic-engine.com/like-counter" + uri + "?plus-one=1&jsonp=" + callback;
        window[callback] = function(count) {
            document.body.removeChild(script);
            script = null;

            for (var likeCount of likeCounts) {
                likeCount.innerHTML = '+' + (count + 1);
            }
        };
        script.src = counterUrl;
        document.body.appendChild(script);

    }

});
