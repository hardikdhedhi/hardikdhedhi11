$(document).ready(function () {
    $(window).on('scroll load', function () {


        if ($(window).scrollTop() > 0) {
            $(".nav-heading").addClass("scrolled");
            $(".menu").addClass("scroll");
            $(".logo").addClass("scroll");
            $(".topup").css("display", "block");
        }
        else {
            $(".nav-heading").removeClass("scrolled");
            $(".menu").removeClass("scroll");
            $(".topup").css("display", "none");

        }

    });


    $(window).on('scroll load', function () {

        if ($(window).scrollTop() > 1) {
            $(".nav-header").removeClass("left");
            $("#menu").removeClass("fa-times");
        }

    });


    $("#menu").click(function () {
        $(".nav-header").toggleClass("left");
        $("#menu").toggleClass("fa-times")


        $("li").click(function () {
            $(".nav-header").removeClass("left");
            $("#menu").removeClass("fa-times");
        })

    })



    var typed = new Typed(".multiple-text", {
        strings: ["Web Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    })

})


