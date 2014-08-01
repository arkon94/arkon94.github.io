/* Smooth scrollTo */
var scrollTo = function(el, off){
  $('html, body').animate({
    scrollTop: $(el).offset().top - off
  }, 650);
}

$("#header-more").click(function(){ scrollTo("#about", 0); });
$("#footer-top").click(function(){ scrollTo("body", 0); });
