let width = document.documentElement.clientWidth;
let elem = document.querySelector(".micocin__dom-img");
    if(width <= 768) {
        elem.classList.remove('unvisible');
        elem.classList.add('vivible');
    } else if (width > 768) {
        elem.classList.remove('vivible');
        elem.classList.add('unvisible');
    };


