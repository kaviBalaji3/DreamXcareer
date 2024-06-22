$(document).ready(function() {
   const navbarMenu = $("#menu");
   const burgerMenu = $("#burger");
   const headerMenu = $("#header");

   // Open Close Navbar Menu on Click Burger
   if (burgerMenu.length && navbarMenu.length) {
      burgerMenu.on("click", function() {
         $(this).toggleClass("is-active");
         navbarMenu.toggleClass("is-active");
      });
   }

   // Close Navbar Menu on Click Menu Links
   $(".menu-link").each(function() {
      $(this).on("click", function() {
         burgerMenu.removeClass("is-active");
         navbarMenu.removeClass("is-active");
      });
   });

   // Change Header Background on Scrolling
   $(window).on("scroll", function() {
      if ($(this).scrollTop() >= 85) {
         headerMenu.addClass("on-scroll");
      } else {
         headerMenu.removeClass("on-scroll");
      }
   });

   // Fixed Navbar Menu on Window Resize
   $(window).on("resize", function() {
      if ($(window).width() > 768) {
         if (navbarMenu.hasClass("is-active")) {
            navbarMenu.removeClass("is-active");
         }
      }
   });
});


/* sign up pop up */


$(document).on('click', '#signIn', function (event) {
   event.preventDefault();
   $('#modal').css('display', 'block');
   $('.modal-bg-signup').hide();
   $('.modal-bg-signin').fadeIn(800);
});


$(document).on('click', '#signUp', function (event) {
   event.preventDefault();
   $('#modal').css('display', 'block');
   $('.modal-bg-signin').hide();
   $('.modal-bg-signup').fadeIn(800);
});


