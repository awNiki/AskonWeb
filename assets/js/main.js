$(document).ready(function () {
    $(document).on( 'scroll', function(){
       if ($(window).scrollTop() == 0) $('#scroller').addClass('hidden');
       else $('#scroller').removeClass('hidden');

       $.fn.isInViewport = function() {
        var elementTop = $("#steps").offset().top;
        var elementBottom = elementTop + $("#steps").innerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
        };

        if($("#steps").isInViewport()){
            $(".step[data-id='1']").animate({
                top: '-1px'
            }, 1000);
            $(".step[data-id='2']").animate({
                bottom: '0'
            }, 1000);
            $(".step[data-id='3']").animate({
                top: '5px'
            }, 1000);
            $(".step[data-id='4']").animate({
                bottom: '0'
            }, 1000);
            $(".step[data-id='5']").animate({
                bottom: '40px'
            }, 1000);
        }
       
    });
    
    $('#scroller').click(function(){
        window.scrollTo(0, 0);
    })

});

//Heading animation on load


const phoneInputField = document.querySelector("#phone-number");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    customPlaceholder: function(selectedCountryPlaceholder) {
        return selectedCountryPlaceholder;
      },
});