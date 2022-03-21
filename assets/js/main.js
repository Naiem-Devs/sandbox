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

 
})(jQuery);
