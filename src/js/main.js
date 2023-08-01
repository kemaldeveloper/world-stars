// RESPONSIVE

// Breakpoints
const breakpoints = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xsm: 375,
}

// Media quires
const MQ = {
  wWidth: 0,
  isXL: false,
  isLG: false,
  isMD: false,
  isSM: false,
  isXSM: false,
  updateState: function () {
    this.wWidth = $(window).width()

    for (let key in breakpoints) {
      this['is' + key.toUpperCase()] = this.wWidth <= breakpoints[key]
    }
  },
}

MQ.updateState()

$(document).ready(function () {
  const checkboxInput = $('.choose-form__label-content input[type=checkbox]')
  function favoriteStarsSwitcher() {
    checkboxInput.each((index, item) => {
      const isChecked = $(item).prop('checked')

      if (isChecked) {
        $(item).parent().addClass('label-active')
        $(item).parent().find('.favourite-btn').addClass('fav-active')
      } else {
        $(item).parent().removeClass('label-active')
        $(item).parent().find('.favourite-btn').removeClass('fav-active')
      }
    })
  }
  favoriteStarsSwitcher()

  checkboxInput.on('change', favoriteStarsSwitcher)
})

$(window).on('load', function () { })

$(window).on('resize', function () {
  MQ.updateState()
})

// COMMON FUNCTIONS

// Popup opener
$('.js-popup').on('click', function (event) {
  event.preventDefault()
  let popupID = $(this).attr('href')

  mfpPopup(popupID)
})

// Mobile menu toggle
$('.js-menu').on('click', function () {
  $(this).toggleClass('is-active')
  $('.menu').toggleClass('is-opened')
})

// Phone input mask
// $('input[type="tel"]').inputmask({
//   mask: '+7 (999) 999-99-99',
//   showMaskOnHover: false,
// })

// E-mail Ajax Send
// $('form').on('submit', function (e) {
//   e.preventDefault()

//   let form = $(this)
//   let formData = {}
//   formData.data = {}

//   // Serialize
//   form.find('input, textarea').each(function () {
//     let name = $(this).attr('name')
//     let title = $(this).attr('data-name')
//     let value = $(this).val()

//     formData.data[name] = {
//       title: title,
//       value: value,
//     }

//     if (name === 'subject') {
//       formData.subject = {
//         value: value,
//       }
//       delete formData.data.subject
//     }
//   })

//   $.ajax({
//     type: 'POST',
//     url: 'mail/mail.php',
//     dataType: 'json',
//     data: formData,
//   }).done(function (data) {
//     if (data.status === 'success') {
//       if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
//         form.find('.form-result').addClass('form-result--success')
//       } else {
//         mfpPopup('#success')
//       }

//       setTimeout(function () {
//         if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
//           form.find('.form-result').removeClass('form-result--success')
//         }
//         $.magnificPopup.close()
//         form.trigger('reset')
//       }, 3000)
//     } else {
//       alert('Ajax result: ' + data.status)
//     }
//   })
//   return false
// })

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
    closeMarkup: '<button type="button" class="mfp-close">&times</button>',
    mainClass: 'mfp-fade-zoom',
    // callbacks: {
    // 	open: function() {
    // 		$('.source').val(source)
    // 	}
    // }
  })
}

// Sliders begin

const topSlider = new Swiper('.top-slider', {
  slidesPerView: 10,
  slidesPerGroup: 3,
  simulateTouch: true,
  spaceBetween: 15,
  speed: 500,
  navigation: {
    prevEl: '.top-slider-prev',
    nextEl: '.top-slider-next',
  },
  breakpoints: {
    1200: {
      slidesPerView: 10,
    },
    992: {
      slidesPerView: 8,
    },
    768: {
      slidesPerView: 6,
    },
    576: {
      slidesPerView: 4,
    },
    0: {
      slidesPerView: 3,
    },
  },
})

const cloningSliderElements = $('.meets__track-item').clone()

new Swiper('.meets__track', {
  loop: true,
  slidesPerView: 5,
  loopedSlides: 5,
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
      $('.meets__track-wrapper').append(cloningSliderElements)
    },
  },
  breakpoints: {
    1440: {
      slidesPerView: 5,
    },

    576: {
      slidesPerView: 4,
    },
    0: {
      slidesPerView: 3,
    },
  },
})

new Swiper('.slider-meets', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
    onlyOnViewport: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
})

new Swiper('.shop-slider', {
  spaceBetween: 32,
  slidesPerView: 3,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
      centeredSlides: true,
    },
  },
})

new Swiper('.photo-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.photo-next',
    prevEl: '.photo-prev',
  },
})

// multiSlider function begin

const multiSlider = () => {
  const styleSliders = document.querySelectorAll('.style__item')

  styleSliders.forEach((item) => {
    new Swiper(item.querySelector('.style-slider'), {
      navigation: {
        nextEl: item.querySelector('.style-button-next'),
        prevEl: item.querySelector('.style-button-prev'),
      },
    })
  })
}

multiSlider()

// multiSlider function end

// Sliders end

// MultiSelect function begin

const multiSelect = () => {
  const selects = document.querySelectorAll('.js-choice')

  selects.forEach((item) => {
    new Choices(item, {
      searchEnabled: false,
      resetScrollPosition: false,
      itemSelectText: '',
      allowHTML: false,
      classNames: {
        flippedState: '',
      },
    })
  })
}

multiSelect()

// MultiSelect function end


const showPassword = () => {
  const showBtn = $('.show-btn')
  const passInput = $('.password-input')

  showBtn.on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('active')

    if ($(this).parent().find(passInput).attr('type') === 'password') {
      $(this).parent().find(passInput).attr('type', 'text')
    } else {
      $(this).parent().find(passInput).attr('type', 'password')
    }
  })
}

showPassword()

const filterBtnParent = $('.js-filters')

filterBtnParent.each((index, item) => {
  const filterBtn = $(item).find('.filter-btn')

  filterBtn.on('click', function () {
    filterBtn.removeClass('active')
    $(this).addClass('active')
  })
})

const titleInput = $('#titleInput')
const proposeTextarea = $('.propose-form__textarea')
const authorInput = $('#authorInput')
const result = $('.input-result')
const proposeBtn = $('.propose-form-submit')

const inputLimit = (input, limit) => {
  input.parent().find(result).text(`0 / ${limit} Знаков`)
  input.on('input', function () {
    let textLength = $(this).val().length
    $(this).parent().find(result).text(`${textLength} / ${limit} Знаков`)

    if (textLength > limit) {
      $(this).css('border-color', 'red')
      $(this).parent().find(result).css('color', 'red')
      // proposeBtn.prop('disabled', true)
    } else {
      $(this).css('border-color', '#D8D8D8')
      $(this).parent().find(result).css('color', '#000')
      // proposeBtn.prop('disabled', false)
    }
  })
}

inputLimit(titleInput, 100)
inputLimit(proposeTextarea, 1000)
inputLimit(authorInput, 500)



const formImagesQ = $('.photo-upload__input')
const formPreviewsQ = $('.photo-upload')

formImagesQ.each((i, item) => {
  const currentPreviewQ = formPreviewsQ[i]

  $(item).on('change', (e) => {
    if (!e.target.files[0]) {
      return
    }

    const fileUrlQ = URL.createObjectURL(e.target.files[0])
    setFileElementQ(fileUrlQ, currentPreviewQ)
  })
})


function setFileElementQ(url, element) {
  $(element).prepend(`
  <div class="photo-upload__preview">
    <img src="${url}" alt="">
  </div>
  `)
}

const videoInput = $('.video-upload__input')
const videoContainer = $('.video-upload')

videoInput.on("change", function (e) {
  const videoUrl = URL.createObjectURL(this.files[0]);
  setVideoFile(videoUrl, videoContainer)
});

function setVideoFile(url, element) {
  $(element).prepend(`
  <video class="video-upload__preview" width="100%" height="100%" controls>
    <source src="${url}" />
  </video>
  `)
}


const sportThemeBtn = $('#sportTheme'),
  movieThemeBtn = $('#movieTheme'),
  musicThemeBtn = $('#musicTheme'),
  fashionThemeBtn = $('#fashionTheme'),
  basketballThemeBtn = $('#basketballTheme'),
  cricketThemeBtn = $('#cricketTheme'),
  volleyballThemeBtn = $('#volleyballTheme')


function themeSwitcher(element, classNames) {
  element.on('click', function (e) {
    e.preventDefault()
    $(this).addClass('active')
    $(this).parent().find('.theme-btn').not(this).removeClass('active')
    $('.wrapper').removeClass().addClass(classNames)
  })
}

themeSwitcher(sportThemeBtn, 'wrapper sport-bg')
themeSwitcher(movieThemeBtn, 'wrapper movie-bg')
themeSwitcher(musicThemeBtn, 'wrapper music-bg')
themeSwitcher(fashionThemeBtn, 'wrapper fashion-bg')
themeSwitcher(basketballThemeBtn, 'wrapper basketball-bg')
themeSwitcher(cricketThemeBtn, 'wrapper cricket-bg')
themeSwitcher(volleyballThemeBtn, 'wrapper volleyball-bg')

const personsItem = $('.persons-likes__item-box')

function personsStatusSwitcher() {

  personsItem.on('click', function (e) {
    $(this).toggleClass('active')
  })
}

personsStatusSwitcher()
