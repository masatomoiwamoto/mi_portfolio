$(function(){
  //アイコンのイメージを
  var images = $("#header .icon img");
    if(images.attr("src").match("_off.")) {
        $("#header .icon img").hover(function() {
            $(this).attr('src', $(this).attr("src").replace("_off.", "_on."));
        }, function() {
            $(this).attr('src', $(this).attr("src").replace("_on.", "_off."));
        });
    }
});
