$(document).ready(function(){
    $('#menu').click(function(){
       $(this).toggleClass('fa-times');
       $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop()>0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    //smooth scrolling

    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
       $('html,body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
       },
       500,
       'linear'
       );

    });
});



const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor((dots * marked) / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});


