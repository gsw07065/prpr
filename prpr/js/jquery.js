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
});