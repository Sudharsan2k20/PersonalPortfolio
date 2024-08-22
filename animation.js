$(document).ready(function() {

    // $('.submit').click(function(){
    //     alert("Hello");
    // })

// Function to check if an element is in the viewport
function isInViewport(element) {
    
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
}

// Fade in elements on scroll
$(window).on('scroll', function() {
    $('.content').each(function() {
        if (isInViewport(this)) {
            $(this).css('opacity', '1');
        }
    });
});

// Trigger scroll event on page load
$(window).trigger('scroll');
});