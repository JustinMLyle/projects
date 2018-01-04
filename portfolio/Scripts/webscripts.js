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
            $('#u4eimg').removeClass("bounceIn");
            $('#u4eimg').addClass("rubberBand");
        },
        function () {
            $('#u4eimg').removeClass("rubberBand");
        }
    );

    $('#dkhoveranimator').hover(
        function () {
            $('#dkimg').removeClass("bounceIn");
            $('#dkimg').addClass("rubberBand");
        },
        function () {
            $('#dkimg').removeClass("rubberBand");
        }
    );

    $('#tstohoveranimator').hover(
        function () {
            $('#tstoimg').removeClass("bounceIn");
            $('#tstoimg').addClass("rubberBand");
        },
        function () {
            $('#tstoimg').removeClass("rubberBand");            
        }
    );

    $('#fapphoveranimator').hover(function (wobbler) {
        $('#fappimg').removeClass("bounceIn");
        $('#fappimg').addClass("rubberBand");
    });

    $('#fapphoveranimator').hover(
        function () {
            $('#fappimg').removeClass("bounceIn");
            $('#fappimg').addClass("rubberBand");
        },
        function () {
            $('#fappimg').removeClass("rubberBand");
        }
    );

});
