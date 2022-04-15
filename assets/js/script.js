$(document).ready(function(){
    var animacion = $(".nav-link");

    animacion.mouseover(function () { 
        $(this).css("background", "#F6E65F");
    });

    animacion.mouseout(function () { 
        $(this).css("background",  "transparent")
    });



})