var menuHeight = $("#header").height();
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 200) {
      //$("#header").css("top", 0 + "px");
      $("#header .icon").css("top", menuHeight + 16 + "px");

    }
  } else {
    //$("#header").css("top", '-' + menuHeight + "px");
    $("#header .icon").css("top", 16 + "px");

  }
  startPos = currentPos;
});
