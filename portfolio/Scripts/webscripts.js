$(document).ready(function () {

    new WOW().init();

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: '0px', // default
        mobile: false, // default
        live: true // default
    })

    $("#u4emodal").on('hidden.bs.modal', function (e) {
        $("#u4emodal iframe").attr("src", $("#u4emodal iframe").attr("src"));
    });

    $("#dkmodal").on('hidden.bs.modal', function (e) {
        $("#dkmodal iframe").attr("src", $("#dkmodal iframe").attr("src"));
    });

    $("#tstomodal").on('hidden.bs.modal', function (e) {
        $("#tstomodal iframe").attr("src", $("#tstomodal iframe").attr("src"));
    });

    $('body').scrollspy({
        target: 'headerlist'
    });

    var JFL_80106176980154 = new JotformFeedback({
        formId: '80106176980154',
        base: 'https://form.jotform.com/',
        windowTitle: 'Contact Me',
        background: '#FFFFFF',
        fontColor: '#FFFFFF',
        type: 'false',
        padding: 25,
        height: 650,
        width: 700,
        openOnLoad: false,
    });

    var ifr = document.getElementById("JotFormIFrame-80106176980154");
    if (window.location.href && window.location.href.indexOf("?") > -1) {
        var get = window.location.href.substr(window.location.href.indexOf("?") + 1);
        if (ifr && get.length > 0) {
            var src = ifr.src;
            src = src.indexOf("?") > -1 ? src + "&" + get : src + "?" + get;
            ifr.src = src;
        }
    }
    window.handleIFrameMessage = function (e) {
        var args = e.data.split(":");
        if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
        if (!iframe) { return; }
        switch (args[0]) {
            case "scrollIntoView":
                iframe.scrollIntoView();
                break;
            case "setHeight":
                iframe.style.height = args[1] + "px";
                break;
            case "collapseErrorPage":
                if (iframe.clientHeight > window.innerHeight) {
                    iframe.style.height = window.innerHeight + "px";
                }
                break;
            case "reloadPage":
                window.location.reload();
                break;
            case "loadScript":
                var src = args[1];
                if (args.length > 3) {
                    src = args[1] + ':' + args[2];
                }
                var script = document.createElement('script');
                script.src = src;
                script.type = 'text/javascript';
                document.body.appendChild(script);
                break;
        }
        var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
        if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
            var urls = { "docurl": encodeURIComponent(document.URL), "referrer": encodeURIComponent(document.referrer) };
            iframe.contentWindow.postMessage(JSON.stringify({ "type": "urls", "value": urls }), "*");
        }
    };
    if (window.addEventListener) {
        window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
        window.attachEvent("onmessage", handleIFrameMessage);
    }


});
