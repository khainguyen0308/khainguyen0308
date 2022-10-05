var percents = document.querySelectorAll('.top-game__item-percent');
var percentChilds = document.querySelectorAll('.percent-child');

window.onscroll = function() {
    if( document.body.scrollTop > ( document.querySelector('.header').clientHeight + document.querySelector('.banner').clientHeight) || document.documentElement.scrollTop > ( document.querySelector('.header').clientHeight + document.querySelector('.banner').clientHeight)) {
        for ( var index = 0; index < 10; index++) {
            switch(index) {
                case 0:
                    for ( var i = 0; i < percents.length; i++) {
                        if (percents[i].getAttribute('data-index') == index) {
                            percents[i].querySelector('.percent-child').style.width = '47%';
                            percents[i].querySelector('.count').style.display = 'block';
                        };
                    };
                    break;
                case 1:
                    for ( var i = 0; i < percents.length; i++) {
                        if (percents[i].getAttribute('data-index') == index) {
                            percents[i].querySelector('.percent-child').style.width = '15%';
                            percents[i].querySelector('.count').style.display = 'block';
                        };
                    };
                    break;
                case 2:
                    for ( var i = 0; i < percents.length; i++) {
                        if (percents[i].getAttribute('data-index') == index) {
                            percents[i].querySelector('.percent-child').style.width = '11%';
                            percents[i].querySelector('.count').style.display = 'block';
                        };
                    };
                    break;
                case 3:
                    for ( var i = 0; i < percents.length; i++) {
                        if (percents[i].getAttribute('data-index') == index) {
                            percents[i].querySelector('.percent-child').style.width = '7%';
                            percents[i].querySelector('.count').style.display = 'block';
                        };
                    };
                    break;
                case 4:
                    for ( var i = 0; i < percents.length; i++) {
                        if (percents[i].getAttribute('data-index') == index) {
                            percents[i].querySelector('.percent-child').style.width = '6%';
                            percents[i].querySelector('.count').style.display = 'block';
                        };
                    };
                    break;
                case 5:
                    for ( var i = 0; i < percents.length; i++) {
                        if (percents[i].getAttribute('data-index') == index) {
                            percents[i].querySelector('.percent-child').style.width = '5%';
                            percents[i].querySelector('.count').style.display = 'block';
                        };
                    };
                    break;
                case 6:
                    for ( var i = 0; i < percents.length; i++) {
                        if (percents[i].getAttribute('data-index') == index) {
                            percents[i].querySelector('.percent-child').style.width = '3%';
                            percents[i].querySelector('.count').style.display = 'block';
                        };
                    };
                    break;
                case 7:
                    for ( var i = 0; i < percents.length; i++) {
                        if (percents[i].getAttribute('data-index') == index) {
                            percents[i].querySelector('.percent-child').style.width = '3%';
                            percents[i].querySelector('.count').style.display = 'block';
                        };
                    };
                    break;
                case 8:
                    for ( var i = 0; i < percents.length; i++) {
                        if (percents[i].getAttribute('data-index') == index) {
                            percents[i].querySelector('.percent-child').style.width = '2%';
                            percents[i].querySelector('.count').style.display = 'block';
                        };
                    };
                    break;
                case 9:
                    for ( var i = 0; i < percents.length; i++) {
                        if (percents[i].getAttribute('data-index') == index) {
                            percents[i].querySelector('.percent-child').style.width = '1%';
                            percents[i].querySelector('.count').style.display = 'block';
                        };
                    };
                    break;   
            };
        }
    };
};