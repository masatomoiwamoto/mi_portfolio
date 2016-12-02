var menuHeight = $("#header").height();
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 200) {
      $("#header").css("top", "-" + menuHeight + "px");
    }
  } else {
    $("#header").css("top", 0 + "px");

  }
  startPos = currentPos;
});
