// Smooth scrollTo
var scrollTo = function(el, off){
  $('html, body').animate({
    scrollTop: $(el).offset().top - off
  }, 650);
}

$("#top").click(function(){ scrollTo("body", 0); });