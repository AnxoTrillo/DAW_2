

$(document).ready(function() {
    $("header nav").before('<figure class="hamburger"><p> </p><p> </p><p> </p></figure>');
});


$(document).ready(function() {
        $(".hamburger").click(function() {
            $("header nav li").not("header li:first-child").toggle("fast");
        });
});