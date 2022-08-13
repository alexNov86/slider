$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    // adaptiveHeight: true,
    slidesToShow: 3,
    // slidesToScroll: 1,
    speed: 1000,
    // easing: "ease",
    // infinite: true,
    // initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 800,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    // pauseOnDotsHover: true,
    // draggable: false,
    // swipe: true,
    // touchThreshold: 10,
    // touchMove: true,
    // waitForAnimate: false,
    // centerMode: true,
    // variableWidth: false,
    // rows: 1,
    // slidesPerRow: 1,
    // vertical: false,
    // verticalSwiping: true,
    // asNavFor: ".slider-big",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // mobileFirst: false,
    // appendArrows: $(".content"),
    // appendDots: $(".content"),
  });
  // $(".slider-big").slick({
  //   arrows: false,
  //   fade: true,
  //   asNavFor: ".slider",
  // });
});
