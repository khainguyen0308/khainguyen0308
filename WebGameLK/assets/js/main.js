// form-login
var login = document.querySelector('.login');
var formLogin = document.querySelector('.form-login');
var formLoginSwitchBtn = document.querySelector('.form-login .auth-form__switch-btn');

login.onclick = function() {
    formRegister.style.display = 'none';
    modal.style.display = 'flex';
};

formLoginSwitchBtn.onclick = function() {
    formLogin.style.display = 'none';
    formRegister.style.display = 'block';
};

// form-register
var register = document.querySelector('.register');
var formRegister = document.querySelector('.form-register');
var formRegisterSwitchBtn = document.querySelector('.form-register .auth-form__switch-btn');

register.onclick = function() {
    formLogin.style.display = 'none';
    modal.style.display = 'flex';
};

formRegisterSwitchBtn.onclick = function() {
    formRegister.style.display = 'none';
    formLogin.style.display = 'block';
};

// close-modal
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay');

overlay.onclick = function() {
    modal.style.display = 'none';
    formRegister.style.display = 'block';
    formLogin.style.display = 'block';
};

// game-item-like
var itemLike = document.querySelectorAll('.game-menu-item__like');

for ( var i = 0; i < itemLike.length; i++) {
    itemLike[i].onclick = function() {
        var check = true;
        for( var i = 0; i < this.querySelector('i').classList.length; i++) {
            if (this.querySelector('i').classList[i] == 'fa-regular') {
                this.querySelector('i').classList.replace('fa-regular', 'fa-solid');
                this.querySelector('i').style.color = 'red';
                check = false;
                break;
            };
        };
        if (check == true) {
            this.querySelector('i').classList.replace('fa-solid', 'fa-regular');
            this.querySelector('i').style.color = 'white';
        };
    };
}

// scroll-back-to-top
var backToTop = document.querySelector('.backToTop');

window.onscroll = function() {
    if( document.body.scrollTop > document.querySelector('.header').clientHeight || document.documentElement.scrollTop > document.querySelector('.header').clientHeight) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    };
};

backToTop.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
