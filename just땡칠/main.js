$('#gnb').on('mouseenter',function(){
    $('.sub').stop().slideDown();
})
$('#gnb').on('mouseleave',function(){
    $('.sub').stop().slideUp();
})
$('#gnb>li').on('mouseenter',function(){
    $(this).children('a').addClass('on')
})
$('#gnb>li').on('mouseleave',function(){
    $(this).children('a').removeClass('on')
})

$('.tab>li').on('click',function(){
    $('.tab').find('li').removeClass('on')
    $('.content').find('div').removeClass('on')

    $(this).addClass('on')
    let conId = $(this).children('a').attr('href')
    $(conId).addClass('on')
})


setInterval(function(){
    $('.frame').animate({top : '-300px'},function(){
        $('.frame>li').eq(0).appendTo('.frame')
        $('.frame').css({top: 0})
    })
},3000)


$('#notice>ul>li>a').on('click',function(e){
    e.preventDefault
    $('.popup').css("display", "block")
})
$('#close').click(function(){
    $('.popup').css("display", "none")
})