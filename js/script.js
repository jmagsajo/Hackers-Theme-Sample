$(document).ready(function(){
	
	window.sr = ScrollReveal();
	let animation1 = {
        origin   : "right",
        distance : "100px",
        duration : 1000,
        delay    : 100,
        scale    : 1,
    };

    sr.reveal('.display-2', animation1);

    animation1.delay = 200;
    animation1.origin = "left";
    sr.reveal('.lead', animation1);

    animation1.delay = 300;
    animation1.origin = "right";
    sr.reveal('.home-info', animation1);

    animation1.delay = 400;
    animation1.origin = "left";
    sr.reveal('.btn-sample-container', animation1);

    animation1.origin = "right";
    sr.reveal('.portfolio-container', animation1);

    animation1.origin = "left";
    sr.reveal('.transbox', animation1);

    animation1.origin = "right";
    sr.reveal('.desc-paragraph', animation1);

    animation1.origin = "left";
    sr.reveal('.contact-txt-head', animation1);

    animation1.origin = "right";
    sr.reveal('.contact-form', animation1);

    /***** SCROLL TO TOP *****/
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    $('.nav-link').click(function(){
        $('.home-caret').removeClass('vim-caret');
        $('.portfolio-caret').removeClass('vim-caret');
        $('.about-caret').removeClass('vim-caret');
        $('.contact-caret').removeClass('vim-caret');
        if( $(this).hasClass('home-link') ){
            $('.home-caret').addClass('vim-caret');
            ScrollTo("#home");
        }else if( $(this).hasClass('portfolio-link') ){
            $('.portfolio-caret').addClass('vim-caret');
            ScrollTo("#portfolio");
        }else if( $(this).hasClass('about-link') ){
            $('.about-caret').addClass('vim-caret');
            ScrollTo("#about");
        }else if( $(this).hasClass('contact-link') ){
            $('.contact-caret').addClass('vim-caret');
            ScrollTo("#contact");
        }

    });

    $('.navbar-brand').click(function(){
        $('.home-caret').removeClass('vim-caret');
        $('.portfolio-caret').removeClass('vim-caret');
        $('.about-caret').removeClass('vim-caret');
        $('.contact-caret').removeClass('vim-caret');
        $('.home-caret').addClass('vim-caret');
        ScrollTo("#home");
    });

});

function ScrollTo(containerName){
    $('html,body').animate({
        scrollTop: $(containerName).offset().top},
    'slow');
}