// carousel
var arrowLeft = document.querySelector('.carousel__arrow-left');
var arrowRight = document.querySelector('.carousel__arrow-right');
var carouselImgWidth = document.querySelectorAll('.carousel__img')[0].offsetWidth;
var carouselDots = document.querySelectorAll('.carousel__dot');
var positionX = 0;
var temp = 0;

carouselDots[(positionX/carouselImgWidth)*-1].style.backgroundColor = 'var(--main-color)';
temp = (positionX/carouselImgWidth)*-1;

for (var i = 0; i < carouselDots.length; i++) {
    carouselDots[i].onclick = function() {
        positionX = -this.getAttribute('data-index')*carouselImgWidth;
        document.querySelector('.carousel__container-list').style.transform = `translateX(${positionX}px)`;
        carouselDots[temp].style.backgroundColor = 'white';
        this.style.backgroundColor = 'var(--main-color)';
        temp = this.getAttribute('data-index');
    };
};

arrowLeft.onclick = function() {
    positionX -= carouselImgWidth;
    if ( positionX < -(carouselImgWidth * document.querySelectorAll('.carousel__img').length - carouselImgWidth)) {
        positionX = 0;
    };
    document.querySelector('.carousel__container-list').style.transform = `translateX(${positionX}px)`;
    carouselDots[temp].style.backgroundColor = 'white';
    carouselDots[(positionX/carouselImgWidth)*-1].style.backgroundColor = 'var(--main-color)';
    temp = (positionX/carouselImgWidth)*-1;
};

arrowRight.onclick = function() {
    positionX += carouselImgWidth;
    if ( positionX > 0) {
        positionX = 0;
    };
    document.querySelector('.carousel__container-list').style.transform = `translateX(${positionX}px)`;
    carouselDots[temp].style.backgroundColor = 'white';
    carouselDots[(positionX/carouselImgWidth)*-1].style.backgroundColor = 'var(--main-color)';
    temp = (positionX/carouselImgWidth)*-1;
};

// focus-game-play
var headerHeight = document.querySelector('.header').clientHeight;
var carouselHeight = document.querySelector('.carousel').clientHeight;

window.onload = function() {
    window.scrollTo({ top: (headerHeight + carouselHeight + 50), behavior: 'smooth' });
}

// like-game-play
var likeBtn = document.querySelector('.game-play__like');
var likeText = document.querySelector('.game-play__like span');

likeBtn.onclick = function() {
    var check = true;
    for( var i = 0; i < this.querySelector('i').classList.length; i++) {
        if (this.querySelector('i').classList[i] == 'fa-regular') {
            this.querySelector('i').classList.replace('fa-regular', 'fa-solid');
            this.querySelector('i').style.color = 'red';
            likeText.textContent = 'Đã thích';
            check = false;
            break;
        };
    };
    if (check == true) {
        this.querySelector('i').classList.replace('fa-solid', 'fa-regular');
        this.querySelector('i').style.color = 'var(--text-color)';
        likeText.textContent = 'Yêu thích';
    };
}

// rating
var stars = document.querySelectorAll('.rating i');
var textArea = document.querySelector('.rating__actions-comment textarea');
var ratingAtions = document.querySelector('.rating-ations');
var ratingNotify = document.querySelector('.rating__notify');

for( var i = 0; i < stars.length; i++) {
    stars[i].onclick = function() {
        ratingNotify.style.display = 'block';
        var check = true;
        for ( var j = 0; j < this.classList.length; j++) {
            if ( this.classList[j] == 'fa-regular') {
                for ( var k = 0; k <= this.getAttribute('data-index'); k++) {
                    stars[k].classList.replace('fa-regular', 'fa-solid');
                };
                check = false;
            };
        };
        if ( check == true) {
            for ( var k = 0; k < stars.length; k++) {
                stars[k].classList.replace('fa-solid', 'fa-regular');
            }
            for ( var k = 0; k <= this.getAttribute('data-index'); k++) {
                stars[k].classList.replace('fa-regular', 'fa-solid');
            };
        }
    };
};

textArea.onchange = function() {
    ratingNotify.style.display = 'block';
};

ratingNotify.querySelector('.rating__notify-login').onclick = function() {
    formRegister.style.display = 'none';
    modal.style.display = 'flex';
};

ratingNotify.querySelector('.rating__notify-register').onclick = function() {
    formLogin.style.display = 'none';
    modal.style.display = 'flex';
};