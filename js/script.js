$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    easing: "ease",
    infinite: false,
  });
});
