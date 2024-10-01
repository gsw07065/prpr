$(function(){
  $("header .nav>li").hover(function(){
    $("header .head_bg").css({height:"230px"});
    $("header").css({"background-color":"rgba(255, 255, 255, 1)"});
  },function(){
    $("header .head_bg").css({height:"0"});
    $("header").css({"background-color":"rgba(255, 255, 255, .3)"});
  });

  $("header .right>li").hover(function(){
    $("header").css({"background-color":"rgba(255, 255, 255, 1)"});
  },function(){
    $("header").css({"background-color":"rgba(255, 255, 255, .3)"});
  });


  $('#fullpage').fullpage({
    verticalCentered: true,
    scrollBar: true,
    normalScrollElements: '.scrollable-element',
    afterLoad: function(origin, destination, direction) {
  if ($(".sec2").hasClass("active")) { 
    $.fn.fullpage.setScrollingSpeed(0); // 속도 조정
      $.fn.fullpage.setAllowScrolling(false);
      $("#section2").css("overflowY","scroll");
    
  } else {
      // 나머지 페이지는 다시 FullPage.js 사용
      $.fn.fullpage.setScrollingSpeed(1000);
      $.fn.fullpage.setAllowScrolling(true);
    }
  }
});


  //top버튼 이동
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
    $('#MOVE_TOP_BTN').fadeIn();
    } else {
    $('#MOVE_TOP_BTN').fadeOut();
    }
  });
  $("#MOVE_TOP_BTN").click(function() {
  $('html, body').animate({
  scrollTop : 0
  }, 400);
  return false;
  });
});