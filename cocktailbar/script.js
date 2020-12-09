//hamburger menu
$(function () {
  $(".hamburger-menu, .nav-link").on("click", function () {
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });

  AOS.init({
    easing: "ease",
    duration: 1000,
  });
});

//get the current year for the copyright
$("#year").text(new Date().getFullYear());
