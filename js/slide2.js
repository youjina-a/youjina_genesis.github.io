//이미지를 감싸는 div
const slideGroup = document.querySelector('#slide_group');
//이전다음 링크를 가진 div
const nav = document.querySelector('#nav');
//img를 담은 Nodelist

let current = 0;
let prev;
let next;
//노드복사!!!
const firstImg = slideGroup.firstElementChild.cloneNode(true);
const lastImg = slideGroup.lastElementChild.cloneNode(true);
//마지막에 자식요소를 추가하기
slideGroup.appendChild(firstImg);
//원하는 위치에 자식요소를 추가하기 부모요소.insertBefore(추가요소, 추가할위치);
slideGroup.insertBefore(lastImg, slideGroup.firstElementChild);
//img를 담은 NodeList
const slideImgs = document.querySelectorAll('.slide_img');
let listImgNum = slideImgs.length - 1;
//이미지를 감싸는 div크기를 이미지 갯수 * 100%로 변경
slideGroup.style.width = (slideImgs.length) * 100 + '%';
//슬라이드 이미지의 크기를 100/이미지갯수 %로 변경
//슬라이드 이미지의 left도 100/이미지갯수 % * index
slideImgs.forEach((item, index) => {
        item.style.width = (100 / slideImgs.length) + '%';
        item.style.left = (index * (100 / slideImgs.length)) + '%';
    })
    //nav에 이벤트를 연결하기
nav.addEventListener('click', function(event) {
    //이전연결된 이벤트 해지 a 태그할 때만 사용하는 것 
    event.preventDefault();
    console.log(event.target.className);
    //prev버튼을 클릭했을때
    if (event.target.className == 'prev') {
        prev = current - 1;
        slideMove(prev);
    }
    //next를 클릭했을때
    else {
        next = current + 1;
        slideMove(next);
    }
});

//슬라이스 div를 이동시키는 함수
function slideMove(imgNum) {
    slideGroup.style.transition = 0.5 + 's';
    slideGroup.style.left = -(imgNum * 100) + '%';
    current = imgNum;
    console.log(current);
    // imgNum = 0 -> left : 0
    // imgNum = 1 -> left : -100%
    // imgNum = 2 -> left : -200%
    // imgNum = 3 -> left : -300%
    if (imgNum == listImgNum) {
        firstCurrent();
    }
    if (imgNum == 0) {
        lastCurrent();
    }
}

function firstCurrent() {
    setTimeout(function() {
        slideGroup.style.transition = '0s';
        slideGroup.style.left = -(100) + '%';
        current = 1;
    }, 500)
}

function lastCurrent() {
    setTimeout(function() {
        slideGroup.style.transition = '0s';
        slideGroup.style.left = -(listImgNum - 1) * 100 + '%';
        current = 4;
    }, 500)
}