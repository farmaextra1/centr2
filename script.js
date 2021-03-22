/*PRVNI SLIDE JS*/
$('.slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
	arrows: true,
    variableWidth: true
});

$( document ).ready(function() {
    $(".slick-next").html("");
});

$( document ).ready(function() {
    $(".slick-prev").html("");
});
/*KONEC PRVNI SLIDU JS*/

/*ZACATEK DRUHYHO SLIDERU JS */
$(document).ready(function() {
    $('.items').slick({
        centerMode:true,
        slidesToShow: 5,
        speed: 500,
        variableWidth: true,
        focusOnSelect: true
    });
});

$( document ).ready(function() {
    $(".slick-next").html("");
});

$( document ).ready(function() {
    $(".slick-prev").html("");
});
/*KONEC DRUHYHO SLIDERU JS */