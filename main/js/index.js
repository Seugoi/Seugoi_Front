var studyContainer = document.querySelector('user-study-container')
var studyBox = document.querySelectorAll('user-study-box')

// studyBox.addEventListener('click', e => {
//     const seleted e.target;
//     selet

// })

// function studyBoxCenter(target){
//     var box = document.querySelector('user-study-container');
//     var boxItem = box.querySelectorAll('user-study-box');
//     var columnGap = 17;
//     var boxHarf = (box.offsetWidth + columnGap) / 2;
//     var pos;
//     var listWidth = 0;
//     var targetLeft = 0;

//     boxItem.forEach(function (element, index){
//         listWidth += element.offsetWidth + (index < boxItem.length - 1 ? columnGap : 0)
//     });

//     for (var i = 0; i<target.index(); i++){
//         targetLeft += boxItem[i].offsetWidth + columnGap;
//     }

//     var selectTargetPos = targetLeft + target.offsetWidth / 2;

//     if(selectTargetPos <fboxHarf){
//         pos = 0;
//     } else if (listWidth - selectTargetPos <= boxHarf){
//         pos = listWidth - box.offsetWidth;
//     } else{
//         pos = selectTargetPos - boxHarf;
//     }

//     setTimeout(function() {
//         box.scrollTo({left: pos, behavior: 'smooth'});
//     }, 1);

//     console.log('boxHarf: ', boxHarf);
//     console.log('selectTargetpos: ', selectTargetPos);
// }

function muCenter(target) {
    var box = document.querySelector('.scroll-group-container');
    var boxItem = box.querySelectorAll('.group-box');
    var columnGap = 10; // 적절한 값을 설정하세요
    var boxHarf = (box.offsetWidth + columnGap) / 2;
    var pos;
    var listWidth = 0;
    var targetLeft = 0;

    boxItem.forEach(function (element, index) {
        listWidth += element.offsetWidth + (index < boxItem.length - 1 ? columnGap : 0);
    });

    for (var i = 0; i < target.index(); i++) {
        targetLeft += boxItem[i].offsetWidth + columnGap;
    }

    var selectTargetPos = targetLeft + target.offsetWidth / 2;

    if (selectTargetPos <= boxHarf) {
        pos = 0;
    } else if (listWidth - selectTargetPos <= boxHarf) {
        pos = listWidth - box.offsetWidth;
    } else {
        pos = selectTargetPos - boxHarf;
    }

    setTimeout(function () {
        box.scrollTo({ left: pos, behavior: 'smooth' });
    }, 1);

    console.log('boxHarf:', boxHarf);
    console.log('selectTargetPos:', selectTargetPos);
}
