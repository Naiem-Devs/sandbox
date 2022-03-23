(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  $(window).scroll(function(){
    if ($(window).scrollTop() > 200) {
        $('.header-area').addClass('fixed-header');
    }
    else {
        $('.header-area').removeClass('fixed-header');
    }
});

  // owlCarousel
  $(".blog_slide").owlCarousel({
    loop: true,
    smartSpeed: 500,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  $('select').niceSelect();
 
})(jQuery);
