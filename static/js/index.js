'use strict'

$(document).ready(function () {
  $(".owl-one").owlCarousel({
    items: 4,
    margin: 70,
    nav: true,
    rewind: true,
    navText: ["<img src='/static/image/left.svg'>", "<img src='/static/image/right.svg'>"],
    dots: true,
    responsive: {
      320: {
        items: 1,
        dotsEach: 1,
        center: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        autoplay: false,
      },
      576: {
        items: 1,
        dotsEach: 1,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        autoplay: false,
      },
      768: {
        items: 2,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
      },
      992: {
        items: 3,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
      },
      1200: {
        items: 3,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
      },
      1400: {
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
      }
    }
  });
});


$(".owl-two").owlCarousel({
  items: 3,
  navText: ["<img src='/static/image/left.svg'>", "<img src='/static/image/right.svg'>"],
  responsive: {
    320: {
      items: 1,
      dotsEach: 1,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      nav: true,
      dots: true
    },
    1400: {
      nav: false,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false
    }
  }
});

window.onscroll = (event) => {
  if (window.scrollY > 1000) {
    document.querySelector('.top-button').style.opacity = 1;
    document.querySelector('.top-button').style.pointerEvents = 'auto';
  } else {
    document.querySelector('.top-button').style.opacity = 0;
    document.querySelector('.top-button').style.pointerEvents = 'none';
  }
}