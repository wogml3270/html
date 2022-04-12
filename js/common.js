
$(document).ready(function(){

  //상단 메뉴
  $("#gnb").on('mouseenter',function(){
    $("#headerWrap").stop().animate({ height:400})
  })
  $("#headerWrap").on('mouseleave',function(){
    $(this).stop().animate({ height:80})
  })

  $("#gnb > ul > li").on('mouseenter',function(){
    $(this).addclass('on')
  }).on('mouseleave',function(){
    $(this).removeClass('on')
  })
  $(window).on('scroll',function(){
    if($(window).scrollTop() >= $("#header").height() ){
      $("#headerWrap").addClass('on')
    }
    else {
      $("#headerWrap").removeClass('on')
    }
  })

  //prev, next 슬라이드쇼
  var timer = setInterval(nextSlider, 5000)
  function nextSlider(){
    var className = $("#sliderList li:eq(0)").attr('class')
    var classNum = className.substr(6,1)
    if ( classNum == 6){
      classNum = 0;
    }
    $("#btnNum a").removeClass('active');
    $("#btnNum a:eq("+classNum+")").addClass('active')
    $("#sliderList").stop().animate({marginLeft:"-100%"},function(){
      $(this).append($("#sliderList li:first")).css({marginLeft:0})
    })
  }
  function prevSlider(){
    var className = $("#sliderList li:last").attr('class')
    var classNum = className.substr(6,1) - 1;
    $("#btnNum a").removeClass('active')
    $("#btnNum a:eq("+classNum+")").addClass('active')

    $("#sliderList").prepend($("#sliderList li:last"))
                            .css({marginLeft:"-100%"})
                            .animate({marginLeft:"0"})
  }

  $("#btnDir .next").click(function(){
    nextSlider();
    clearInterval(timer);
  })
  $("#btnDir .prev").click(function(){
    prevSlider();
    clearInterval(timer);
  })

  // 슬라이드 하단 버튼
  $("#btnNum a").click(function(){
    $("#btnNum a").removeClass('active')
    $(this).addClass('active')

    var n = $(this).index()+1;
    console.log(n)
    var pos = $("#sliderList li.slider"+n).position().left;
    $("#sliderList").animate({marginLeft:-pos},function(){
      var num = n;
      for( var i = 0; i < ($("#sliderList li").length-1); i++){
        num++
        if( num > 6){
          num = 1;
        }
        $(this).append($("#sliderList li.slider"+num))
      }
      $(this).css({marginLeft:0})
    })
    $("#btnNum a, #btnDir button").click(function(){
      clearInterval(timer);
      timer = setInterval(nextSlider, 3000)
    })
  })

  // 레시피 슬라이드쇼
  function sliding(){
    if( $("#recipe ul:not(:animated)").css('left') == "-2400px"){
      $("#recipe ul:not(:animated)").animate({left:0})
    }
    else{
      $("#recipe ul:not(:animated)").animate({left:"-=800px"})

    }
  }
  $(".prevRecipe").click(function(){
    if($("#recipe ul:not(:animated)").css('left') == '0px'){
      $("#recipe ul:not(:animated)").animate({left:-2400})

    }
    else{
      $("#recipe ul:not(:animated)").animate({left:'+=800px'})
    }
    clearInterval(timer2);
  })
  var timer2 = setInterval(sliding, 5000)

  $(".nextRecipe").click(function(){
    sliding();
    clearInterval(timer2);
    return false;
  })

  
})
