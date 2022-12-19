// $(window).scroll(function(){
//     if($(this).scrollTop() >= 200){
//         $("#navbar").addClass("scroled")
//     } else {
//         $("#navbar").removeClass("scroled")
//     }
// })

function scroll () {
    if (document.documentElement.scrollTop >= 200 ) {
        document.getElementById ("navbar").classList.add("scrolled")
    } else {
        document.getElementById("navbar").classList.remove("scrolled")
    }
}

window.onscroll = function(){
    scroll();
}


$(document).ready(function(){
    $('.circle').circleProgress({
        startAngle : -Math.PI / 2,
        fiil :"rgb(39, 39, 254)"
    }).on('circle-animation-progress' , function(event ,progress ,stepValue){
        $(this).find('span').html(Math.round(stepValue*100) + '%')
    })
})