(function($) {

  
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
      $('.navbar-toggler i').toggleClass('fa fa-bars fa fa-times');
      $('#mobile-nav-overlay').toggleClass('active');
  
    });
    $('.navbar-nav a').on('click', function () {
      $('.navbar-collapse').collapse('hide'); // This will hide the navbar-collapse.
      $('.navbar-toggler i').toggleClass('fa fa-bars fa fa-times');
      $('#mobile-nav-overlay').toggleClass('active');
    });
  });

jQuery(document).ready(function($){
    let slider = $('.owl-carousel');
    slider.each(function () {
      $(this).owlCarousel({
        nav: true,
        loop:false,
        dots: true,
        pagination: false,
        margin: 25,
        autoHeight: false,
        stagePadding: 50,
        navText: [
            "<i class='fa fa-arrow-left' aria-hidden='true'></i>",
           "<i class='fa fa-arrow-right' aria-hidden='true'></i>",
         ],
        responsive:{
          0:{
            items: 1,
            stagePadding: 0,
            margin: 30,
          },
          767:{
            items: 2,
            stagePadding: 25,
          },
          1000:{
            items: 2,
          }
        }
      });
    });
  });



  

})(jQuery);



/* TOP Menu Stick*/
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".header-sticker").removeClass("stick");
    } else {
      $(".header-sticker").addClass("stick");
    }
  });

/* AOS Animation on scroll */
window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  





