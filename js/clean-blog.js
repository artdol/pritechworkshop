(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;


  $(document).ready(function() {

    if ($(window).width() > MQL) {
      var headerHeight = $('#mainNav').height();
      var currentTop = $(window).scrollTop();
      if (currentTop > headerHeight) {
        $('#mainNav').addClass('is-visible');
        $('#mainNav').addClass('is-fixed');
      }

      //if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
    }
  });

  //primary navigation slide-in effect
   if ($(window).width() > MQL) {
     var headerHeight = $('#mainNav').height();
     $(window).on('scroll', {
         previousTop: 0
       },
       function() {
         var currentTop = $(window).scrollTop();
         //check if user is scrolling up
         //if (currentTop < this.previousTop) {
  //         //if scrolling up...
           if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
             $('#mainNav').addClass('is-visible');
           } else {
             $('#mainNav').removeClass('is-visible is-fixed');
           }
         //} else if (currentTop > this.previousTop) {
  //         //if scrolling down...
  //         $('#mainNav').removeClass('is-visible');
           if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
         //}
         this.previousTop = currentTop;
       });
   }

// smooth scrolling
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
})(jQuery); // End of use strict
