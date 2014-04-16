// Smooth scrollTo
var scrollTo = function(el, off){
  $('html, body').animate({
    scrollTop: $(el).offset().top - off
  }, 650);
}

$("#top").click(function(){ scrollTo("body", 0); });

// Sticky nav
// var scrollTop;

// var stickyNav = function(){
//   scrollTop = $(window).scrollTop();

//   if (scrollTop > 285) {
//     $('nav').addClass('sticky');
//   } else {
//     $('nav').removeClass('sticky');
//   }
// };

// stickyNav();
// $(window).scroll(function(){ stickyNav(); });
// window.onresize = function(){ stickyNav(); }