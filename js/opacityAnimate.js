// 스크롤을 내리면 지정된 위치에 발생하는 애니매이션

$(document).ready(function(){
$("main > section").css({ opacity: 0 })
$(window).on('scroll', function() {
  $("main > section").each(function() {
    if ( $(window).scrollTop() > $(this).position().top-500 ) {
        $(this).animate({ opacity: 1 },1000)
    }
    console.log($(this).offset().top)
  })
})
})
