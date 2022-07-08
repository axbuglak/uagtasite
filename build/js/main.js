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
    if(up) {
        up.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    }
})();

function setOnline() {
    const onlineText = document.querySelector('.hero__content-online-text p');
    if(onlineText) {
        let onlineNow = 1024;
        onlineText.textContent = onlineNow;
    
        return onlineText;
    }
}

setOnline();


(function() {
    const animItems = document.querySelectorAll('.guid__steps');
    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll)
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart

                if(animItemHeight > window.innerHeight){
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                
                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset+animItemHeight)){
                    animItem.classList.add('active')
                } else {
                    animItem.classList.remove('active')
                }
            }
        }
        function offset (el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
    }
})()


// function scrollToGuid () {
//     const btn = document.querySelector('.section__btn');
//     const guid = document.querySelector('#guid');
//     if (btn && guid) {
//         btn.addEventListener('click', () => {
//             guid.scrollIntoView({ block: 'center', behavior: 'smooth' });
//         })
//     }
// }
// scrollToGuid()