// RESPONSIVE

// Breakpoints
const breakpoints = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xsm: 375,
};

// Media quires
const MQ = {
  wWidth: 0,
  isXL: false,
  isLG: false,
  isMD: false,
  isSM: false,
  isXSM: false,
  updateState: function () {
    this.wWidth = $(window).width();

    for (let key in breakpoints) {
      this['is' + key.toUpperCase()] = this.wWidth <= breakpoints[key];
    }
  },
};

MQ.updateState();

$(document).ready(function () {
  $('.choose-form__img-label .choose-form__label-content').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('label-active').find('.favourite-btn').toggleClass('fav-active');
  });

  // $('.choose-form__img-label .favourite-btn').on('click', function (event) {
  //   event.preventDefault();
  //   $(this).toggleClass('fav-active');
  // });
});

$(window).on('load', function () {
  //
});

$(window).on('resize', function () {
  MQ.updateState();
});

// COMMON FUNCTIONS

// Popup opener
$('.js-popup').on('click', function (event) {
  event.preventDefault();
  let popupID = $(this).attr('href');

  mfpPopup(popupID);
});

// Mobile menu toggle
$('.js-menu').on('click', function () {
  $(this).toggleClass('is-active');
  $('.menu').toggleClass('is-opened');
});

// Phone input mask
$('input[type="tel"]').inputmask({
  mask: '+7 (999) 999-99-99',
  showMaskOnHover: false,
});

// E-mail Ajax Send
// $('form').on('submit', function (e) {
//   e.preventDefault();

//   let form = $(this);
//   let formData = {};
//   formData.data = {};

//   // Serialize
//   form.find('input, textarea').each(function () {
//     let name = $(this).attr('name');
//     let title = $(this).attr('data-name');
//     let value = $(this).val();

//     formData.data[name] = {
//       title: title,
//       value: value,
//     };

//     if (name === 'subject') {
//       formData.subject = {
//         value: value,
//       };
//       delete formData.data.subject;
//     }
//   });

//   $.ajax({
//     type: 'POST',
//     url: 'mail/mail.php',
//     dataType: 'json',
//     data: formData,
//   }).done(function (data) {
//     if (data.status === 'success') {
//       if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
//         form.find('.form-result').addClass('form-result--success');
//       } else {
//         mfpPopup('#success');
//       }

//       setTimeout(function () {
//         if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
//           form.find('.form-result').removeClass('form-result--success');
//         }
//         $.magnificPopup.close();
//         form.trigger('reset');
//       }, 3000);
//     } else {
//       alert('Ajax result: ' + data.status);
//     }
//   });
//   return false;
// });

const mfpPopup = function (popupID, source) {
  // https://dimsemenov.com/plugins/magnific-popup/
  $.magnificPopup.open({
    items: { src: popupID },
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    closeMarkup: '<button type="button" class="mfp-close">&times;</button>',
    mainClass: 'mfp-fade-zoom',
    // callbacks: {
    // 	open: function() {
    // 		$('.source').val(source);
    // 	}
    // }
  });
};

const topSLiderEl = $('.top-slider__slide').clone();

const topSlider = new Swiper('.top-slider', {
  slidesPerView: 'auto',
  simulateTouch: true,
  spaceBetween: 15,
  loop: true,
  loopedSlides: 10,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: '.top-slider-prev',
    nextEl: '.top-slider-next',
  },
  on: {
    beforeInit: function () {
      $('.top-slider__wrapper').append(topSLiderEl);
    },
  },
});

const cloningSliderElements = $('.meets__track-item').clone();

const swiper = new Swiper('.meets__track', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  wrapperClass: 'meets__track-wrapper',
  slideClass: 'meets__track-item',
  speed: 2050,
  simulateTouch: false,
  freeMode: {
    enabled: true,
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  on: {
    beforeInit: function () {
      $('.meets__track-wrapper').append(cloningSliderElements);
    },
  },
});

new Swiper('.meets__ribbon', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  wrapperClass: 'meets__ribbon-wrapper',
  slideClass: 'meets__ribbon-item',
  speed: 9500,
  simulateTouch: false,
  freeMode: {
    enabled: true,
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

new Swiper('.slider-meets', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
    onlyOnViewport: true,
  },
});

const sportSelect = document.querySelector('.js-choice');

const sportChoice = new Choices(sportSelect, {
  searchEnabled: false,
  resetScrollPosition: false,
  itemSelectText: '',
});
