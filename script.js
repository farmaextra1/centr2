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

/*ZACATEK POSLEDNIHO SLIDERU */
$('.slider-2').slick({
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
/*KONEC POSLEDNIHO SLIDERU */


function platba1()
{
    document.getElementById('platbicka2').style.backgroundColor= "white";
    document.getElementById('platbicka2').style.color= "black";
    document.getElementById('platbicka1').style.backgroundColor= "rgb(54, 54, 54)";
    document.getElementById('platbicka1').style.color= "white";
    document.getElementById('cenaZmena').style.color= "rgb(86, 93, 161)";
    document.getElementById('cenaZmena2').style.color= "rgb(86, 93, 161)";
    document.getElementById('platbicka3').style.backgroundColor= "white";
    document.getElementById('platbicka3').style.color= "black";
}
function platba2()
{
    document.getElementById('platbicka1').style.backgroundColor= "white";
    document.getElementById('platbicka1').style.color= "black";
    document.getElementById('platbicka2').style.backgroundColor= "rgb(54, 54, 54)";
    document.getElementById('platbicka2').style.color= "white";
    document.getElementById('cenaZmena').style.color= "rgb(255, 237, 137)";
    document.getElementById('cenaZmena2').style.color= "rgb(255, 237, 137)";
    document.getElementById('platbicka3').style.backgroundColor= "white";
    document.getElementById('platbicka3').style.color= "black";
}
function platba3()
{
    document.getElementById('platbicka1').style.backgroundColor= "white";
    document.getElementById('platbicka1').style.color= "black";
    document.getElementById('platbicka3').style.backgroundColor= "rgb(54, 54, 54)";
    document.getElementById('platbicka3').style.color= "white";
    document.getElementById('cenaZmena').style.color= "rgb(86, 93, 161)";
    document.getElementById('cenaZmena2').style.color= "rgb(86, 93, 161)";
    document.getElementById('platbicka2').style.backgroundColor= "white";
    document.getElementById('platbicka2').style.color= "black";
}