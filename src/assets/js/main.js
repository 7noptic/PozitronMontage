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
        
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            nextEl: '.partners__next',
            prevEl: '.partners__prev',
        },

    });
    let swiperArticles = new Swiper('.swiper-container-articles', {
        slidesPerView: 1,
        spaceBetween: 50,
        observer: true,
        observeParents: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        pagination:{
            el: '.swiper-pagination-bullets',
            type: 'bullets',
            clickable: true,
        }

    });
    /* TABS */
    let articleLink = document.querySelectorAll('.js-article-link'),
        articleTabs = document.querySelectorAll('.js-article-tabs'),
        articleParents = document.querySelector('.articles-block');

    if(articleParents){
        hideTabs(articleLink, articleTabs);
        showTabs(0, articleLink, articleTabs);
        articleParents.addEventListener('click', (e) => {
            if(e.target && e.target.classList.contains('js-article-link')){
                e.preventDefault();
                articleLink.forEach((item, i) => {
                    if(item == e.target){
                        hideTabs(articleLink, articleTabs);
                        showTabs(i, articleLink, articleTabs);
                    }
                });
            }        
        });

    }
    function showTabs(i = 0,link, content){
        link[i].classList.add('active');
        content[i].classList.add('active');
    }
    function hideTabs(link, content){
        link.forEach(item =>{
            item.classList.remove('active');
        });
        content.forEach(item =>{
            item.classList.remove('active');
        });
    }
});