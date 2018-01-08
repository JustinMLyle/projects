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

    $('.navbar-left').on('activate.bs.scrollspy', function () {
        var hash = $('this.').find('li.active a').attr('href');

        if (hash !== '#u4e') {
            console.log(hash);
            //$('header nav').addClass('navIconBorder');
        }
        else {
            $('header nav').removeClass('navIconBorder');
        }
    });

    $('.navbar li a').click(function (smoothScroll) {
        smoothScroll.preventDefault();

        // store hash
        var hash = this.hash;

        //gets the height of the header
        var navOffset;
        navOffset = $('#headerlist').height();

        // animate and offset
        $('html, body').animate({
            scrollTop: $(hash).offset().top - navOffset - 25
        }, 250, function () {

            // when done, add hash to url
            // (default click behaviour)
        });
        window.location.hash = hash;
    });

    $('#u4ehoveranimator').hover(
        function () {
            $('#u4ehoveranimator').addClass("animated");
            $('#u4ehoveranimator').addClass("rubberBand");
        },
        function () {
            $('#u4ehoveranimator').removeClass("rubberBand");
        }
    );

    $('#dkhoveranimator').hover(
        function () {
            $('#dkhoveranimator').addClass("animated");
            $('#dkhoveranimator').addClass("rubberBand");
        },
        function () {
            $('#dkhoveranimator').removeClass("rubberBand");
        }
    );

    $('#tstohoveranimator').hover(
        function () {
            $('#tstohoveranimator').addClass("animated");
            $('#tstohoveranimator').addClass("rubberBand");
        },
        function () {
            $('#tstohoveranimator').removeClass("rubberBand");            
        }
    );

    

    $('#fapphoveranimator').hover(
        function () {
            $('#fapphoveranimator').addClass("animated");
            $('#fapphoveranimator').addClass("rubberBand");
        },
        function () {
            $('#fapphoveranimator').removeClass("rubberBand");
        }
    );

    $('#resumeshredderhoveranimator').hover(
        function () {
            $('#resumeshredderhoveranimator').addClass("animated");
            $('#resumeshredderhoveranimator').addClass("rubberBand");
        },
        function () {
            $('#resumeshredderhoveranimator').removeClass("rubberBand");
        }
    );

});
