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
        space = window_height - (element_offset -$(window).scrollTop());
        if (space < 300) {
            $element.addClass("non-focus");
        } else {
            $element.removeClass("non-focus");
        }
 
    });
};

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
      $("#legend-top").addClass("nav-down").removeClass("nav-up");
      $("#progress-container").addClass("progress-up").removeClass("progress-down");
    } else {
      $("#legend-top").addClass("nav-up").removeClass("nav-down");
      $("#progress-container").addClass("progress-down").removeClass("progress-up");
    }

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
});
