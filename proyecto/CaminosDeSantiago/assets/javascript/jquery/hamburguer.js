
$(document).ready(function () {

    $(window).resize(function () {
        $("link#dynamic-css").remove();

        if ($(window).width() >= 1000) {
            $("head").append('<link id="dynamic-css" rel="stylesheet" href="../../styles/headers/header_mediumm.css" type="text/css">');
        } else if (($(window).width() >= 670)) {
            $("head").append('<link id="dynamic-css" rel="stylesheet" href="../../styles/headers/header_medium.css" type="text/css">');
        } else {
            $("head").append('<link id="dynamic-css" rel="stylesheet" href="../../styles/headers/header_slim.css" type="text/css">');
        }
    });
});





$(document).ready(function() {
    $("header nav").before('<figure class="hamburger"><p> </p><p> </p><p> </p></figure>');
});


$(document).ready(function() {
        $(".hamburger").click(function() {
            $("header nav li").not("header li:first-child").toggle("fast");
        });
});