;(function (win, $) {
  'use strict';

    var minWidth = 768;

    var visualSwiper = new Swiper('.visual_banner_area.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    var schedualSwiper = new Swiper('.match_schedule_area .swiper-container', {
      slideClass: 'swiper-slide',
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: '.btn_next',
        prevEl: '.btn_prev',
        disabledClass: 'is_disabled'
      },
      allowTouchMove:false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed : 0,
      breakpoints: {
        768: {
          slidesPerView: 1,
        }
      }
    });


    var vodSwiper = new Swiper('.vod_wrap', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      breakpoints: {
        768: {
          spaceBetween: 30
        }
      }
    });

    //메인_일정 생방송 채널 레이어
    $('.onair_area .btn_onair').click(function(e){
      var DeviceWidthCheck = $(document).width();
      if(768>=DeviceWidthCheck){
        $('.layer_onair').addClass('is_show');
        $('body').addClass('has_layer_show');
      }
    });

    $(window).resize(function() {
      var DeviceWidthCheck = $(document).width();
      if(768<=DeviceWidthCheck){
        $('.onair_area .layer_onair').removeClass('is_show');
        $('body').removeClass('has_layer_show');
      }
    });

    //분기 필요없는 팝업
    $(win).on('load', function () {
      popupFunc('.lst_video_posts .link_posts', '.layer_vod');
      popupFunc('.item_channel', '.layer_vod');
    });

})(window, window.jQuery);