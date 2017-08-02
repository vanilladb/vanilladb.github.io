//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
	if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for version number
var url = 'https://script.google.com/macros/s/AKfycbzAeQ--a_RM3kDJchPOjvOACD4Bm8C8daFHHZj4aCvN3kaeaxE/exec';

$(document).ready($.get(url,
    function (data) {
        $('.coreVer > div ').css({"opacity":"0"})
        setTimeout( function() {
        $('.coreVer > div').text("Version: "+data.core);
        $('.coreVer > div').css({"opacity":"100"})
        }, 500);
        
        $('.commVer > div ').css({"opacity":"0"})
        setTimeout( function() {
        $('.commVer > div').text("Version: "+data.comm);
        $('.commVer > div').css({"opacity":"100"})
        }, 500);
    }
));