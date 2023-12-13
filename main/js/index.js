$(document).ready(function() {
    
    $(".user-study-box:first").addClass("select-box");
    $(".user-study-container").on('click', '.user-study-box', function() {
        $(".user-study-box").removeClass("select-box");
        $(this).addClass("select-box");

        muCenter($(this));
    });

    var $scrItem = $('.user-study-box');
    var scrIWidth = 0;
    var columnGap = parseInt($('.user-study-container').css('column-gap'), 10) || 0;

    for (var i = 0; i < $scrItem.length; i++) {
        scrIWidth += $scrItem.eq(i).outerWidth() + columnGap;
    }

    $('.user-study-container').css('width', scrIWidth);

    $scrItem.click(function () {
        var target = $(this);
        $scrItem.removeClass('select-box');
        target.addClass('select-box');
        muCenter(target);
    });

    function muCenter(target) {
        var box = $('.scroll-user-study-container');
        var boxItem = box.find('.user-study-box');
        var boxHarf = (box.width() + columnGap) / 2;
        var pos;
        var listWidth = 0;
        var targetLeft = 0;

        boxItem.each(function (index) {
            listWidth += $(this).outerWidth() + (index < boxItem.length - 1 ? columnGap : 0); // 마지막 요소를 제외한 나머지에 column-gap 추가
        });

        for (var i = 0; i < target.index(); i++) targetLeft += boxItem.eq(i).outerWidth() + columnGap; // column-gap 추가

        var selectTargetPos = targetLeft + target.outerWidth() / 2;

        if (selectTargetPos <= boxHarf) {
            pos = 0;
        } else if (listWidth - selectTargetPos <= boxHarf) {
            pos = listWidth - box.width();
        } else {
            pos = selectTargetPos - boxHarf;
        }

        setTimeout(function () {
            box.animate({ scrollLeft: pos }, 200);
        }, 1);

        console.log('boxHarf:', boxHarf);
        console.log('selectTargetPos:', selectTargetPos);
    }

    $(".search-window").hide();

    $(".search-box").on("input", function() {
        if ($(this).val() != "") {
            $(".search-window").show();
            $(".bx-menu").hide();
            $('.search-box').addClass("active");
        } else {
            $(".search-window").hide();
            $('.search-box').removeClass("active");
            $(".bx-menu").show();
        }
    });
});

// $(".search-window").hide();

// var $scrItem = $('.user-study-box');
// var scrIWidth = 0;
// for (var i=0; i<$scrItem.length; i++) {
//     scrIWidth += $scrItem.eq(i).outerWidth();
// }
// $('.user-study-container').css('width',scrIWidth)
// $scrItem.click(function(){
//     var target = $(this); 
//     $scrItem.removeClass('select-box')
//     target.addClass('select-box');
//     muCenter(target);
// })
// function muCenter(target){
//     var box = $('.scroll-user-study-container');
//     var boxItem = box.find('.user-study-box');
//     var boxHarf = box.width()/2;
//     var pos;
//     var listWidth=0;
//     var targetLeft = 0;

//     boxItem.each(function(){ listWidth += $(this).outerWidth(); })    
    
//     for (var i=0; i<target.index(); i++) targetLeft += boxItem.eq(i).outerWidth(); // 선택요소 까지 길이
    
//     var selectTargetPos = (targetLeft + target.outerWidth()/2);
//     if (selectTargetPos <= boxHarf) { // left
//         pos = 0;
//     }else if (listWidth - selectTargetPos <= boxHarf) { //right : target 절반 이후 영역이 boxHarf 보다 작을경우 right 정렬
//         pos = listWidth-box.width();
//     }else {
//         pos = selectTargetPos - boxHarf; // 중앙정렬
//     }
    
//     setTimeout(function(){
//         box.animate({scrollLeft:pos},300)
//     }, 200);
// }