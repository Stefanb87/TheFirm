$(document).ready(function() {
    /* jQuery za nav*/

$(window).scroll(function() {
    var nav = $('nav');
    var nav1 = $('.navDiv');
    var nav2 = $('span');
    var nav3 = $('a');
    var top = 100;
    if ($(window).scrollTop() >= top) {

        nav.removeAttr('id', 'navbar');
        nav1.removeAttr('id', 'navbarDiv');
        nav2.removeClass('spanBrend12 spanBrend22');
        nav3.removeClass('navbarA');
    } else {
        nav.attr('id', 'navbar');
        nav1.attr('id', 'navbarDiv');
        nav2.addClass('spanBrend12 spanBrend22');
        nav3.addClass('navbarA');
    }
});

$('ul li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

/* jquery za strijelicu*/

$('#divStrijelicaPrva a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

/* jquery za accordion*/

$('.aAccordion').on('click', function () {
    $('.aAccordion').removeAttr('id', 'aAccordion1');
});

/* jquery za tabPanel*/

$('.aTabPanel').on('click', function () {
    $('.aTabPanel').removeAttr('id', 'aTabPanel1');
});

/* kraj jquery-ja za nav*/

/* jquery za progress*/

/*$(window).scroll(function() {
    var top = 1300;
    if ($(window).scrollTop() >= top) {
        progress(80, $('#progressBar1'));
        progress(67, $('#progressBar2'));
        progress(89, $('#progressBar3'));
        progress(94, $('#progressBar4'));
        
        function progress(percent, $element) {
            var progressBarWidth = percent * $element.width() / 100;
            $element.find('div').animate({ width: progressBarWidth }, 1000).html(percent + "% ");
        }
    }
});*/

$("#divProgresBarsWrap").mouseenter(function(){
    $("#progress1").css("width", "80%");
    $("#progress2").css("width", "67%");
    $("#progress3").css("width", "89%");
    $("#progress4").css("width", "94%");
  });

/* kraj jquery-ja za progress*/

/* jq za kocke/projekte cetvrti div */

    /*prvi*/
    var innerSirina1 = $('div#inner1').css('width');
    var wrapperSirina1 = $('div#wrapper1').css('width');
    var innerSirinaBroj1 = parseInt(innerSirina1);
    var wrapperSirinaBroj1 = parseInt(wrapperSirina1);

    $("div#wrapper1").hover(function move() {
        $('div#inner1').animate({ width: wrapperSirinaBroj1 }, 400);
    }, function move() {
        $('div#inner1').animate({ width: 0 }, 200);
    });

    var bottomVisina1 = $('div#bottom1').css('height');
    var wrapperVisina1 = $('div#wrapper1').css('height');
    var bottomVisinaBroj1 = parseInt(bottomVisina1);
    var wrapperVisinaBroj1 = parseInt(wrapperVisina1);

    $("div#wrapper1").hover(function move() {
        $('div#bottom1').animate({ height: wrapperVisinaBroj1 }, 300);
    }, function move() {
        $('div#bottom1').animate({ height: 0 }, 200);
    });
    /*drugi*/
    var innerSirina2 = $('div#inner2').css('width');
    var wrapperSirina2 = $('div#wrapper2').css('width');
    var innerSirinaBroj2 = parseInt(innerSirina2);
    var wrapperSirinaBroj2 = parseInt(wrapperSirina2);

    $("div#wrapper2").hover(function move() {
        $('div#inner2').animate({ width: wrapperSirinaBroj2 }, 400);
    }, function move() {
        $('div#inner2').animate({ width: 0 }, 200);
    });

    var bottomVisina2 = $('div#bottom2').css('height');
    var wrapperVisina2 = $('div#wrapper2').css('height');
    var bottomVisinaBroj2 = parseInt(bottomVisina2);
    var wrapperVisinaBroj2 = parseInt(wrapperVisina2);

    $("div#wrapper2").hover(function move() {
        $('div#bottom2').animate({ height: wrapperVisinaBroj2 }, 300);
    }, function move() {
        $('div#bottom2').animate({ height: 0 }, 200);
    });
    /*treci*/
    var innerSirina3 = $('div#inner3').css('width');
    var wrapperSirina3 = $('div#wrapper3').css('width');
    var innerSirinaBroj3 = parseInt(innerSirina3);
    var wrapperSirinaBroj3 = parseInt(wrapperSirina3);

    $("div#wrapper3").hover(function move() {
        $('div#inner3').animate({ width: wrapperSirinaBroj3 }, 400);
    }, function move() {
        $('div#inner3').animate({ width: 0 }, 200);
    });

    var bottomVisina3 = $('div#bottom3').css('height');
    var wrapperVisina3 = $('div#wrapper3').css('height');
    var bottomVisinaBroj3 = parseInt(bottomVisina3);
    var wrapperVisinaBroj3 = parseInt(wrapperVisina3);

    $("div#wrapper3").hover(function move() {
        $('div#bottom3').animate({ height: wrapperVisinaBroj3 }, 300);
    }, function move() {
        $('div#bottom3').animate({ height: 0 }, 200);
    });
/*cetvrti*/
    var innerSirina4 = $('div#inner4').css('width');
    var wrapperSirina4 = $('div#wrapper4').css('width');
    var innerSirinaBroj4 = parseInt(innerSirina4);
    var wrapperSirinaBroj4 = parseInt(wrapperSirina4);

    $("div#wrapper4").hover(function move() {
        $('div#inner4').animate({ width: wrapperSirinaBroj4 }, 400);
    }, function move() {
        $('div#inner4').animate({ width: 0 }, 200);
    });

    var bottomVisina4 = $('div#bottom4').css('height');
    var wrapperVisina4 = $('div#wrapper4').css('height');
    var bottomVisinaBroj4 = parseInt(bottomVisina4);
    var wrapperVisinaBroj4 = parseInt(wrapperVisina4);

    $("div#wrapper4").hover(function move() {
        $('div#bottom4').animate({ height: wrapperVisinaBroj4 }, 300);
    }, function move() {
        $('div#bottom4').animate({ height: 0 }, 200);
    });
/*peti*/
    var innerSirina5 = $('div#inner5').css('width');
    var wrapperSirina5 = $('div#wrapper5').css('width');
    var innerSirinaBroj5 = parseInt(innerSirina5);
    var wrapperSirinaBroj5 = parseInt(wrapperSirina5);

    $("div#wrapper5").hover(function move() {
        $('div#inner5').animate({ width: wrapperSirinaBroj5 }, 400);
    }, function move() {
        $('div#inner5').animate({ width: 0 }, 200);
    });

    var bottomVisina5 = $('div#bottom5').css('height');
    var wrapperVisina5 = $('div#wrapper5').css('height');
    var bottomVisinaBroj5 = parseInt(bottomVisina5);
    var wrapperVisinaBroj5 = parseInt(wrapperVisina5);

    $("div#wrapper5").hover(function move() {
        $('div#bottom5').animate({ height: wrapperVisinaBroj5 }, 300);
    }, function move() {
        $('div#bottom5').animate({ height: 0 }, 200);
    });
/*sesti*/
    var innerSirina6 = $('div#inner6').css('width');
    var wrapperSirina6 = $('div#wrapper6').css('width');
    var innerSirinaBroj6 = parseInt(innerSirina6);
    var wrapperSirinaBroj6 = parseInt(wrapperSirina6);

    $("div#wrapper6").hover(function move() {
        $('div#inner6').animate({ width: wrapperSirinaBroj6 }, 400);
    }, function move() {
        $('div#inner6').animate({ width: 0 }, 200);
    });

    var bottomVisina6 = $('div#bottom6').css('height');
    var wrapperVisina6 = $('div#wrapper6').css('height');
    var bottomVisinaBroj6 = parseInt(bottomVisina6);
    var wrapperVisinaBroj6 = parseInt(wrapperVisina6);

    $("div#wrapper6").hover(function move() {
        $('div#bottom6').animate({ height: wrapperVisinaBroj6 }, 300);
    }, function move() {
        $('div#bottom6').animate({ height: 0 }, 200);
    });
/*sedmi*/
    var innerSirina7 = $('div#inner7').css('width');
    var wrapperSirina7 = $('div#wrapper7').css('width');
    var innerSirinaBroj7 = parseInt(innerSirina7);
    var wrapperSirinaBroj7 = parseInt(wrapperSirina7);

    $("div#wrapper7").hover(function move() {
        $('div#inner7').animate({ width: wrapperSirinaBroj7 }, 400);
    }, function move() {
        $('div#inner7').animate({ width: 0 }, 200);
    });

    var bottomVisina7 = $('div#bottom7').css('height');
    var wrapperVisina7 = $('div#wrapper7').css('height');
    var bottomVisinaBroj7 = parseInt(bottomVisina7);
    var wrapperVisinaBroj7 = parseInt(wrapperVisina7);

    $("div#wrapper7").hover(function move() {
        $('div#bottom7').animate({ height: wrapperVisinaBroj7 }, 300);
    }, function move() {
        $('div#bottom7').animate({ height: 0 }, 200);
    });
/*osmi*/
    var innerSirina8 = $('div#inner8').css('width');
    var wrapperSirina8 = $('div#wrapper8').css('width');
    var innerSirinaBroj8 = parseInt(innerSirina8);
    var wrapperSirinaBroj8 = parseInt(wrapperSirina8);

    $("div#wrapper8").hover(function move() {
        $('div#inner8').animate({ width: wrapperSirinaBroj8 }, 400);
    }, function move() {
        $('div#inner8').animate({ width: 0 }, 200);
    });

    var bottomVisina8 = $('div#bottom8').css('height');
    var wrapperVisina8 = $('div#wrapper8').css('height');
    var bottomVisinaBroj8 = parseInt(bottomVisina8);
    var wrapperVisinaBroj8 = parseInt(wrapperVisina8);

    $("div#wrapper8").hover(function move() {
        $('div#bottom8').animate({ height: wrapperVisinaBroj8 }, 300);
    }, function move() {
        $('div#bottom8').animate({ height: 0 }, 200);
    });
/*deveti*/
    var innerSirina9 = $('div#inner9').css('width');
    var wrapperSirina9 = $('div#wrapper9').css('width');
    var innerSirinaBroj9 = parseInt(innerSirina9);
    var wrapperSirinaBroj9 = parseInt(wrapperSirina9);

    $("div#wrapper9").hover(function move() {
        $('div#inner9').animate({ width: wrapperSirinaBroj9 }, 400);
    }, function move() {
        $('div#inner9').animate({ width: 0 }, 200);
    });

    var bottomVisina9 = $('div#bottom9').css('height');
    var wrapperVisina9 = $('div#wrapper9').css('height');
    var bottomVisinaBroj9 = parseInt(bottomVisina9);
    var wrapperVisinaBroj9 = parseInt(wrapperVisina9);

    $("div#wrapper9").hover(function move() {
        $('div#bottom9').animate({ height: wrapperVisinaBroj9 }, 300);
    }, function move() {
        $('div#bottom9').animate({ height: 0 }, 200);
    });
/*deseti*/
    var innerSirina10 = $('div#inner10').css('width');
    var wrapperSirina10 = $('div#wrapper10').css('width');
    var innerSirinaBroj10 = parseInt(innerSirina10);
    var wrapperSirinaBroj10 = parseInt(wrapperSirina10);

    $("div#wrapper10").hover(function move() {
        $('div#inner10').animate({ width: wrapperSirinaBroj10 }, 400);
    }, function move() {
        $('div#inner10').animate({ width: 0 }, 200);
    });

    var bottomVisina10 = $('div#bottom10').css('height');
    var wrapperVisina10 = $('div#wrapper10').css('height');
    var bottomVisinaBroj10 = parseInt(bottomVisina10);
    var wrapperVisinaBroj10 = parseInt(wrapperVisina10);

    $("div#wrapper10").hover(function move() {
        $('div#bottom10').animate({ height: wrapperVisinaBroj10 }, 300);
    }, function move() {
        $('div#bottom10').animate({ height: 0 }, 200);
    });
/*jedanaesti*/
    var innerSirina11 = $('div#inner11').css('width');
    var wrapperSirina11 = $('div#wrapper11').css('width');
    var innerSirinaBroj11 = parseInt(innerSirina11);
    var wrapperSirinaBroj11 = parseInt(wrapperSirina11);

    $("div#wrapper11").hover(function move() {
        $('div#inner11').animate({ width: wrapperSirinaBroj11 }, 400);
    }, function move() {
        $('div#inner11').animate({ width: 0 }, 200);
    });

    var bottomVisina11 = $('div#bottom11').css('height');
    var wrapperVisina11 = $('div#wrapper11').css('height');
    var bottomVisinaBroj11 = parseInt(bottomVisina11);
    var wrapperVisinaBroj11 = parseInt(wrapperVisina11);

    $("div#wrapper11").hover(function move() {
        $('div#bottom11').animate({ height: wrapperVisinaBroj11 }, 300);
    }, function move() {
        $('div#bottom11').animate({ height: 0 }, 200);
    });
/*dvanaesti*/
    var innerSirina12 = $('div#inner12').css('width');
    var wrapperSirina12 = $('div#wrapper12').css('width');
    var innerSirinaBroj12 = parseInt(innerSirina12);
    var wrapperSirinaBroj12 = parseInt(wrapperSirina12);

    $("div#wrapper12").hover(function move() {
        $('div#inner12').animate({ width: wrapperSirinaBroj12 }, 400);
    }, function move() {
        $('div#inner12').animate({ width: 0 }, 200);
    });

    var bottomVisina12 = $('div#bottom12').css('height');
    var wrapperVisina12 = $('div#wrapper12').css('height');
    var bottomVisinaBroj12 = parseInt(bottomVisina12);
    var wrapperVisinaBroj12 = parseInt(wrapperVisina12);

    $("div#wrapper12").hover(function move() {
        $('div#bottom12').animate({ height: wrapperVisinaBroj12 }, 300);
    }, function move() {
        $('div#bottom12').animate({ height: 0 }, 200);
    });
/*JQ za dugmad za projekte*/
    $("button#BAll").on('click', function () {
        $('#wrapper1, #wrapper2, #wrapper3, #wrapper4, #wrapper5, #wrapper6, #wrapper7, #wrapper8, #wrapper9, #wrapper10, #wrapper11, #wrapper12').show(400);
        $(this).addClass('BAllBoja');
        $('button#BGD, button#BWD, button#BWDev').removeClass('BAllBoja');
    });

    $("button#BWD").on('click', function () {
        $('#wrapper1, #wrapper2, #wrapper3, #wrapper4, #wrapper5, #wrapper6, #wrapper7, #wrapper8, #wrapper9, #wrapper10, #wrapper11, #wrapper12').show(400);
        $('#wrapper5, #wrapper6, #wrapper7, #wrapper8, #wrapper9, #wrapper10, #wrapper11, #wrapper12').hide(400);
        $('button#BAll, button#BGD, button#BWD, button#BWDev').removeClass('BAllBoja');
        $(this).addClass('BAllBoja');
    });

    $("button#BGD").on('click', function () {
        $('#wrapper1, #wrapper2, #wrapper3, #wrapper4, #wrapper5, #wrapper6, #wrapper7, #wrapper8, #wrapper9, #wrapper10, #wrapper11, #wrapper12').show(400);
        $('#wrapper1, #wrapper2, #wrapper3, #wrapper4, #wrapper9, #wrapper10, #wrapper11, #wrapper12').hide(400);
        $('button#BAll, button#BGD, button#BWD, button#BWDev').removeClass('BAllBoja');
        $(this).addClass('BAllBoja');
    });

    $("button#BWDev").on('click', function () {
        $('#wrapper1, #wrapper2, #wrapper3, #wrapper4, #wrapper5, #wrapper6, #wrapper7, #wrapper8, #wrapper9, #wrapper10, #wrapper11, #wrapper12').show(400);
        $('#wrapper5, #wrapper6, #wrapper7, #wrapper8').hide(400);
        $('#wrapper1, #wrapper2, #wrapper3, #wrapper4').hide(400);
        $('button#BAll, button#BGD, button#BWD, button#BWDev').removeClass('BAllBoja');
        $(this).addClass('BAllBoja');
    });

/* kraj cssa za kocke/projekte cetvrti div */

/* JQ za count */
    $(".projectSec2").one("mouseenter", function(){
        startCounter();
    });
    
    function startCounter() {
            $('.pPetiDiv').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }

/* kraj JQ za count */

/*JQ za Price sekciju*/
$(".wrapperPrice").mouseenter(function() {
    var d = $(this).attr("id");
    $("#" + d + " h5").addClass("h5Boja");
    $("#" + d + " hr").addClass("hrBoja");
    $("#" + d + " .spanRec").addClass("h5Boja");
});

$(".wrapperPrice").mouseleave(function() {
    $(".h5Hover").removeClass("h5Boja");
    $(".wrapperPrice hr").removeClass("hrBoja");
    $(".wrapperPrice .spanRec").removeClass("h5Boja");
});

/* JQ za scroll to top */

    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut(100);
    }
  });
  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

/* Kraj JQ za scroll to top */

});