'use script';
import Swiper, {Navigation, Pagination} from 'swiper';
import Readmore from "readmore-js";
import GLightbox from 'glightbox';

Swiper.use([Navigation, Pagination]);
window.addEventListener('DOMContentLoaded', () => {
    const lightbox = GLightbox({});
    let headerMenu = document.querySelector('.header__nav'),
        html = document.querySelector('html'),
        body = document.querySelector('body');

    /* MODAL */
    let modalBlock = document.querySelector('.js-sidebars'),
        allModal = document.querySelectorAll('.js-sidebars > section'),
        modalCall = document.querySelector('.modal-call'),
        modalRegion = document.querySelector('.modal-region'),
        modalOneClick = document.querySelector('.modal-one-click'),
        modalAssortment = document.querySelector('.modal-assortment'),
        regionSelect = document.querySelectorAll('.modal-region__link'),
        regionBtn = document.querySelector('.js-region-city');

    document.addEventListener('click', e => {

        let target = e.target;

        if (target && (target.classList.contains('js-call') || target.classList.contains('modal-call__exit') || target.classList.contains('modal-call__btn'))) {
            openCloseModal(e, modalCall);
        }
        if (target && (target.classList.contains('js-card-one-click') || target.classList.contains('modal-one-click__exit') || target.classList.contains('modal-one-click__btn'))) {
            openCloseModal(e, modalOneClick);
        }
        if (target && (target.classList.contains('js-assortment') || target.classList.contains('modal-assortment__exit') || target.classList.contains('modal-assortment__btn'))) {
            openCloseModal(e, modalAssortment);
        }
        if (target && (target.classList.contains('js-region') || target.classList.contains('modal-region__exit'))) {
            openCloseModal(e, modalRegion);
        }
        if (target.classList.contains('modal-region__link')) {

            regionSelect.forEach(item => {
                if (item == target) {
                    regionBtn.innerHTML = item.innerHTML;
                }
            });
            openCloseModal(e, modalRegion);
        } else if (target.classList.contains('js-region-close')) {
            let city = document.querySelector('.js-select-city');
            regionBtn.innerHTML = city.innerHTML;
            openCloseModal(e, modalRegion);
        }


        /* ЗАКРЫТИЕ ПО КЛИКУ НА САЙДБАР */
        if (target && target.classList.contains('sidebar-bg')) {
            e.preventDefault();
            html.classList.toggle('lock');
            body.classList.toggle('lock');
            modalBlock.classList.toggle('sidebar-bg');
            allModal.forEach(item => {
                if (item.classList.toggle('active')) {
                    item.classList.remove('active');
                }
            });
        }

    });

    function openCloseModal(e, modal) {
        e.preventDefault();
        html.classList.toggle('lock');
        body.classList.toggle('lock');
        modalBlock.classList.toggle('sidebar-bg');
        modal.classList.toggle('active');
    }

    /* СЛАЙДЕРЫ */
    let swiperTags = new Swiper('.swiper-container-tags', {
        slidesPerView: "auto",
        spaceBetween: 0,
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            nextEl: '.tags__next',
            prevEl: '.tags__prev',
        },

    });
    let swiperPartners = new Swiper('.swiper-container-partners', {
        slidesPerView: 6,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.partners__next',
            prevEl: '.partners__prev',
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
            },
            575:{
                slidesPerView: 2,
            },
            767:{
                slidesPerView: 3,
            },
            991:{
                slidesPerView: 4,
            },
            1199:{
                slidesPerView: 5,
            },
            1399:{
                slidesPerView: 6,
            },
        }

    });
    let swiperArticles = new Swiper('.swiper-container-articles', {
        slidesPerView: 1,
        spaceBetween: 50,
        observer: true,
        observeParents: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        pagination: {
            el: '.swiper-pagination-bullets',
            type: 'bullets',
            clickable: true,
        }

    });
    let swiperCard = new Swiper('.swiper-container-card', {
        slidesPerView: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            nextEl: '.card__next',
            prevEl: '.card__prev',
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
            },
            767:{
                slidesPerView: 2,
            },
            1199:{
                slidesPerView: 3,
            },
        }

    });
    let swiperObject = new Swiper('.swiper-container-object', {
        slidesPerView: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.object__next',
            prevEl: '.object__prev',
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
            },
            767:{
                slidesPerView: 2,
            },
            1199:{
                slidesPerView: 3,
            },
        }

    });
    let swiperAwardsBlock = new Swiper('.swiper-container-awards-block', {
        slidesPerView: 4,
        spaceBetween: 100,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.awards-block__next',
            prevEl: '.awards-block__prev',
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
            },
            767:{
                slidesPerView: 2,
            },
            1199:{
                slidesPerView: 3,
            },
            1399:{
                slidesPerView: 4,
            },
        }
    });


    /* TABS */
    let articleLink = document.querySelectorAll('.js-article-link'),
        articleTabs = document.querySelectorAll('.js-article-tabs'),
        articleParents = document.querySelector('.articles-block'),
        hitLink = document.querySelectorAll('.js-hit-link'),
        hitTabs = document.querySelectorAll('.js-hit-tabs'),
        hitParents = document.querySelector('.hit');

    if (hitParents) {
        showHideTabs(0, hitLink, hitTabs, hitParents, 'js-hit-link')
    }
    if (articleParents) {
        showHideTabs(0, articleLink, articleTabs, articleParents, 'js-article-link')
    }

    function showHideTabs(i = 0, link, tabs, parent, classContains) {
        hideTabs(link, tabs);
        showTabs(0, link, tabs);
        parent.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(classContains)) {
                e.preventDefault();
                link.forEach((item, i) => {
                    if (item == e.target) {
                        hideTabs(link, tabs);
                        showTabs(i, link, tabs);
                    }
                });
            }
        });
    }

    function showTabs(i = 0, link, content) {
        link[i].classList.add('active');
        content[i].classList.add('active');
    }

    function hideTabs(link, content) {
        link.forEach(item => {
            item.classList.remove('active');
        });
        content.forEach(item => {
            item.classList.remove('active');
        });
    }

    const footerMenuParent = document.querySelector('.footer'),
        footerLink = document.querySelectorAll('.js-footer-title'),
        footerList = document.querySelectorAll('.js-footer-menu');
    if (footerMenuParent) {
        footerMenuParent.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('js-footer-title')) {
                event.preventDefault();
                footerLink.forEach((item, i) => {
                    if (item == target) {
                        target.classList.toggle('active');
                        footerList[i].classList.toggle('active');
                    }
                });
            }

        }, {passive: false});
    }


    

    /* SHOW ALL BUTTON */

    let getSiblings = function (e, byClass) {
       
        // for collecting siblings
        let siblings = []; 
        let siblingsByClass = []; 
        // if no parent, return no sibling
        if(!e.parentNode) {
            return siblings;
        }
        // first child of the parent node
        let sibling  = e.parentNode.firstChild;

        // collecting siblings
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
                if(sibling.classList.contains(byClass)) {
                    siblingsByClass.push(sibling);
                } 
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return {
            'siblings' : sibling,
            'siblingsByClass' : siblingsByClass
        }
    };

    let showAllBtn = document.querySelectorAll('.js-show-all')
    showAllBtn.forEach( elem => {
        elem.addEventListener('click', function(e) {
            let arShowItems = getSiblings(this, 'mask').siblingsByClass
    
            if(this.classList.contains('open')) {
                arShowItems.forEach( el => {
                    el.classList.add('hidden')
                })
                this.innerHTML = "Показать все"
                this.classList.remove('open')
            } else {
                arShowItems.forEach( el => {
                    el.classList.remove('hidden')
                })
                this.innerHTML = "Скрыть последние"
                this.classList.add('open')
            }
        })
    })

    
    /* ASIDE ACCORDION */

    let accordionBtn = document.querySelectorAll('.js-accordion-btn');

    for (let i = 0; i < accordionBtn.length; i++) {
        const element = accordionBtn[i];
        element.addEventListener('click', function(e) {
            console.log(this)
            let accordionContent = this.nextElementSibling;
            console.log(accordionContent)
            if(this.classList.contains('active') ) {
                accordionContent.classList.remove('open');
                this.classList.remove('active');
            } else {
                accordionContent.classList.add('open');
                this.classList.add('active');
            }
        })
    }
    
});