/* 1 - BANNER slide */
const banner_list = new Swiper('.banner_list', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  effect: 'fade', // Thay đổi hiệu ứng từ slide sang fade
  fadeEffect: {
    crossFade: true, // Kích hoạt hiệu ứng fade mượt
  },
  zoom: {
    maxRatio: 2, // Cấu hình zoom (tuỳ chỉnh tỷ lệ)
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* nhấn nút pause thì dừng slide và hiện nút play, bấm play thì tiếp tục auto slide */
$(".pause").click(function () {
  banner_list.autoplay.stop();
  $(this).hide();
  $(".play").show();
});
$(".play").click(function () {
  banner_list.autoplay.start();
  $(this).hide();
  $(".pause").show();
});





/* EVENT */
const event_list = new Swiper('.event_list', {
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets", //bullets, progressbar, fraction
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // 1 slide trên màn hình nhỏ
      spaceBetween: 20, // Khoảng cách giữa các slide
    },
    768: {
      slidesPerView: 3, // 2 slide trên màn hình trung bình
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4, // 3 slide trên màn hình lớn
      spaceBetween: 40,
    },
  },
});



/* sponsor slide */
const sponsor_list = new Swiper('.sponsor_list', {
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1024: { //1024px 이상에서 
      slidesPerView: 8,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 10,
      spaceBetween: 50,
    },
  },
});
