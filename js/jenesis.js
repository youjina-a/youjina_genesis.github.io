function delate() {
    document.querySelector('#popup').classList.toggle('delete');
}

let tit = document.querySelector('.title_leftbg');
console.log(tit.offsetTop);
addEventListener('scroll', function() {
    let titTop = tit.offsetTop;
    let sct = document.documentElement.scrollTop;
    // console.log(sct, titTop);
    if (sct >= titTop - 600) {
        let divs = document.querySelectorAll('.title_left');
        divs.forEach(function(item) {
            item.classList.add('on');
        });

    } else {
        let divs = document.querySelectorAll('.title_left');
        divs.forEach(function(item) {
            item.classList.remove('on');
        });

    }
})

let tit2 = document.querySelector('.main_2_Bigtit');
console.log(tit2.offsetTop);
addEventListener('scroll', function() {
    let titTop2 = tit2.offsetTop;
    let sct = document.documentElement.scrollTop;
    // console.log(sct, titTop2);
    if (sct >= titTop2 - 800) {
        let divs = document.querySelectorAll('.Bigtit_p');
        divs.forEach(function(item) {
            item.classList.add('down');
        });

    } else {
        let divs = document.querySelectorAll('.Bigtit_p');
        divs.forEach(function(item) {
            item.classList.remove('down');
        });

    }
})

let tit3 = document.querySelector('.main_6_Bigtit');
console.log(tit3.offsetTop);
addEventListener('scroll', function() {
    let titTop3 = tit3.offsetTop;
    let sct2 = document.documentElement.scrollTop;
    console.log(sct2, titTop3);
    if (sct2 >= titTop3 - (-8200)) {
        let divs = document.querySelectorAll('.Bigtit_6');
        divs.forEach(function(item) {
            item.classList.add('show');
        });

    } else {
        let divs = document.querySelectorAll('.Bigtit_6');
        divs.forEach(function(item) {
            item.classList.remove('show');
        });

    }
})

let timer = setInterval(function() {
    let now = new Date();
    document.querySelector('#right_menu_hours').innerText = now.getHours();
    document.querySelector('#right_menu_min').innerText = now.getMinutes();
}, 1000)