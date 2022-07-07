// ADAPTIVE BURGER MENU
function burgerMenu() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelectorAll('.menu');
    const menuItems = document.querySelectorAll('.menu__item-link');
    const sign = document.querySelector('.navbar__sign');
    const body = document.querySelector('body');
    const navbarMenu = document.querySelector('#navbarMenu');

    menuItems.forEach(singleItem => {
        singleItem.addEventListener('click', event => {
            if (event.target.classList.contains('.menu')) return null;
            
            menuItems.forEach(singleItem => {
                singleItem.classList.remove('active');
            })
            
            event.target.classList.add('active');
            
            const attribute = event.target.dataset.trigger;
            
            localStorage.setItem('itemAttribute', attribute);
        })
        if (localStorage.getItem('itemAttribute')) {
            const localDataAttr = localStorage.getItem('itemAttribute');
            
            menuItems?.forEach((singleItem) => {
                if (singleItem.dataset.trigger === localDataAttr) {
                    singleItem.classList.add('active');
                }
            });
        }
    });
    
    burger.addEventListener('click', () => {
        if (!navbarMenu.classList.contains('active')) {
            navbarMenu.classList.add('active');
            burger.classList.add('active');
            sign.classList.add('active');
            body.classList.add('locked');
        } else {
            navbarMenu.classList.remove('active');
            burger.classList.remove('active');
            sign.classList.remove('active');
            body.classList.remove('locked');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navbarMenu.classList.remove('active');
            burger.classList.remove('active');
            sign.classList.remove('active');
            body.classList.remove('locked');
        }
    });
}
burgerMenu();

(function () {
    const up = document.querySelector('.footer__array');
    up.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
})();

function setOnline() {
    const onlineText = document.querySelector('.hero__content-online-text p');
    let onlineNow = 1024;
    onlineText.textContent = onlineNow;

    return onlineText;
}

setOnline();
