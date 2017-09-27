$(document).ready(function () {
    $(".toggle").click(function () {
        $('.links').slideToggle();
    });
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.links').show();
        } else {
            $('.links').hide();
        }
    });
});