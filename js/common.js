
//aos 초기화
AOS.init({
  duration: 2000,  //mọi hiệu ứng đều chậm 2s
  once: true, //chọn true nếu muốn chỉ hiệu ứng 1 lần khi f5 trang, lúc sroll lên xuống thì ko lặp lại
  disable: window.innerWidth < 768, //chỉ hiện ở window, ko hiện trên đt
});



//depth2
/* để chuột lên thì hiện ra menu2 và boder bottom, bỏ chuột ra thì mất */
$(".gnb > li").mouseenter(function () {
  $(this).find(".depth2").stop().slideDown(); /* 2차 menu */
  $("#header").addClass("active"); /* chi co border bottom thoi */
});

$(".gnb > li").mouseleave(function () {
  $(this).find(".depth2").stop().slideUp();
  $("#header").removeClass("active");
});


//nhấn nút tìm kiếm thì hiện box tìm kiếm, nút tắt box tìm kiếm, màu nền cho header&util
$(".btn_search").click(function () {
  $("#header").toggleClass("active");
  $(this).toggleClass("active");

  const searchBox = $(".search");
  if (searchBox.hasClass("show")) {
    searchBox.css("transform", "translate(-50%, -20px)").css("opacity", 0);
    setTimeout(() => {
      searchBox.removeClass("show").hide();
    }, 500);
  } else {
    searchBox.show();
    setTimeout(() => {
      searchBox.addClass("show").css("transform", "translate(-50%, 0)").css("opacity", 1);
    }, 10);
  }

});



//nhấn nút ham thì hiện màn hình đen mờ và các menu
$(".ham").click(function () {
  $(".mgnb_wrap").fadeIn();
  $(".search").fadeOut(); // Ẩn phần search
  $(".util").fadeOut(); // Ẩn phần util
  $(".btn_search").removeClass("active");
  $("#header").removeClass("active"); // ẩn cả logo màu 
});
$(".mgnb_close").click(function () {
  $(".mgnb_wrap").fadeOut();
  $(".util").fadeIn(); // hiện lại util
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").stop().slideUp();
});




/* mobile - nhấn vào a trong li thì không bị dẫn đến liên kết khác, chặn link liên kết  */
document.querySelectorAll('.mgnb > li > a[href="sub/plan.html"]').forEach(link => {
  link.addEventListener('click', function (event) {
    if (window.innerWidth <= 768) {
      event.preventDefault(); // Chặn chuyển trang
      const submenu = this.nextElementSibling; // Tìm danh sách con
      if (submenu && submenu.classList.contains('mdepth2')) {
        submenu.classList.toggle('open'); // Mở hoặc đóng danh sách con
      }
    }
  });
});