// Animate on Scroll Library initialization
// AOS.init({
//     // Global settings:
//     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//     startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//     initClassName: 'aos-init', // class applied after initialization
//     animatedClassName: 'aos-animate', // class applied on animation
//     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


//     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//     offset: 120, // offset (in px) from the original trigger point
//     delay: 0, // values from 0 to 3000, with step 50ms
//     duration: 2000, // values from 0 to 3000, with step 50ms
//     easing: 'ease', // default easing for AOS animations
//     once: false, // whether animation should happen only once - while scrolling down
//     mirror: false, // whether elements should animate out while scrolling past them
//     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

// });

// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });

$(document).ready(function(){
  $('.overlay-rcfit').hide();
  $('.overlay-mongoscraper').hide();
  $('.overlay-unwrapped').hide();
  $('.rcfitClickSvg').show();
  $('.mongoscraperClickSvg').show();
  $('.unwrappedClickSvg').show();
  let overlayRcfitShow = false;
  let overlayMongoscraperShow = false;
  let overlayUnwrappedShow = false;
  
  $('.portfolio-rcfit').on('click', function () {
    if (overlayRcfitShow === false) {
      $('.overlay-rcfit').fadeIn(1000);
      overlayRcfitShow = true;
      $('.rcfitClickSvg').hide();
    } else {
      $('.overlay-rcfit').hide();
      overlayRcfitShow = false;
      $('.rcfitClickSvg').show();
    }
  });

  $('.portfolio-mongoscraper').on('click', function () {
    if (overlayMongoscraperShow === false) {
      $('.overlay-mongoscraper').fadeIn(1000);
      overlayMongoscraperShow = true;
      $('.mongoscraperClickSvg').hide();
    } else {
      $('.overlay-mongoscraper').hide();
      overlayMongoscraperShow = false;
      $('.mongoscraperClickSvg').show();
    }
  });

  $('.portfolio-unwrapped').on('click', function () {
    if (overlayUnwrappedShow === false) {
      $('.overlay-unwrapped').fadeIn(1000);
      overlayUnwrappedShow = true;
      $('.unwrappedClickSvg').hide();
    } else {
      $('.overlay-unwrapped').hide();
      overlayUnwrappedShow = false;
      $('.unwrappedClickSvg').show();
    }
  });

  $('.data-slick-auto-carousel').slick({
    autoplay: true,
    autoplaySpeed: 700,
    speed: 1700,
    arrows: false,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      }
    ]
  });

});






  