
$(document).ready(function () {
    $("header nav").before('<figure class="hamburger"><p> </p><p> </p><p> </p></figure>');
});


$(document).ready(function () {
    if ($(window).width() < 800) {
        $("header nav li").not("header li:first-child").toggle(0);
    }

    $(".hamburger").click(function () {
        $("header nav li").not("header li:first-child").toggle("fast");
    });

    $(window).resize(function() {
        if ($(window).width() > 800) {
            $("header nav li").not("header li:first-child").show();
        } else {
            $("header nav li").not("header li:first-child").hide();
        }
    }).resize();

});
