$(document).ready(function () {


    //Dumps video data on modal close to prevent sticking across modals
    $("#u4emodal").on('hidden.bs.modal', function (e) {
        $("#u4emodal iframe").attr("src", $("#u4emodal iframe").attr("src"));
    });

    $("#dkmodal").on('hidden.bs.modal', function (e) {
        $("#dkvid1 iframe").attr("src", $("#dkvid1 iframe").attr("src"));
        $("#dkvid2 iframe").attr("src", $("#dkvid2 iframe").attr("src"));
    });

    $("#tstomodal").on('hidden.bs.modal', function (e) {
        $("#tstomodal iframe").attr("src", $("#tstomodal iframe").attr("src"));
    });

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-113718468-1');



});
