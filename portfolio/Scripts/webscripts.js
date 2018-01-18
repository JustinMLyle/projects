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

   
                
   
});
