var $element=$('.each-event, .title');
var $window = $(window);
$window.on('scroll resize', check_for_fade);
$window.trigger('scroll');
function check_for_fade() { 
    var window_height = $window.height();
    var window_width = $window.width();

    $.each($element, function (event) {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_offset = $element.offset().top;
        space = window_height - (element_height + element_offset -$(window).scrollTop());
        if (space < 60) {
            $element.addClass("non-focus");
        } else {
            $element.removeClass("non-focus");
        }
 
    });
};

$(document).scroll(function() {
    var y = $(this).scrollTop();
    console.log(y);
    if (y > 100) {
      $("#legend-top").addClass("nav-down").removeClass("nav-up");
      console.log("alisdjfk");
    } else {
      $("#legend-top").addClass("nav-up").removeClass("nav-down");
    }
});