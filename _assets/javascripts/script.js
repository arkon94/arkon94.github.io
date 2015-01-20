/* Smooth scrollTo */
var scrollTo = function(el, off){
  $('html, body').animate({
    scrollTop: $(el).offset().top - off
  }, 650);
}

$("#header__more").click(function(){ scrollTo("#about", 0); });
$("#footer__top").click(function(){ scrollTo("body", 0); });
