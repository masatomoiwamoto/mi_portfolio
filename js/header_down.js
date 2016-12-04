$(function(){
  var menuHeight = $("#header").height();

  $('#header .icon').hover(function(){
    $("#header").css("top", 0 + "px");
    $("#header .icon").css("top", 16 + "px");
    },
    function(){
      $("#header").css("top", '-' + menuHeight + "px");
      $("#header .icon").css("top", menuHeight + 16 + "px");
    });

  });
