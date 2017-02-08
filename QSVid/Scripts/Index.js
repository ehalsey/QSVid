$(document).ready(function () {

    // responsive nav
    var responsiveNav = $('#toggle-nav');
    var navBar = $('.nav-bar');

    responsiveNav.on('click', function (e) {
        e.preventDefault();
        console.log(navBar);
        navBar.toggleClass('active')
    });

    $('.owl-carousel').owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
});
