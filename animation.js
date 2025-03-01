$(document).ready(function() {

    
function isInViewport(element) {
    
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
}


$(window).on('scroll', function() {
    $('.content').each(function() {
        if (isInViewport(this)) {
            $(this).css('opacity', '1');
        }
    });
});


$(window).trigger('scroll');
});