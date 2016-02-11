$(function() {

    //Animations when Scrolling
    new WOW().init();
    
    //Animate Scrolling
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 750, 'easeInOutExpo');
        event.preventDefault();
    });

    // Advanced Mobile Interaction - Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('.animated-text').textillate({ callback: function(){
      // STUFF
    }});






  });
