jQuery(document).ready(function(){
  // #mainOranges show
  $("#mainWrap").delay(50).animate({opacity:1},1000);
  $("#mainOranges div > h2").animate({opacity:1, marginTop:'20px'},3000);
  $("#mainOranges div > p").delay(500).animate({opacity:1, marginTop:'100px'},2000);

  $("#oranges div ul li span").click(function(){
    $("#oranges div ul li").not($(this).parent()).animate({height:30},300)
    $(this).parent().animate({height:500},300)
  })
})
