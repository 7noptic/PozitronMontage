'use script';
import Swiper, {Navigation, Pagination} from 'swiper';
import Readmore from "readmore-js";
import GLightbox from 'glightbox';

Swiper.use([Navigation, Pagination]);
window.addEventListener('DOMContentLoaded', () => {
    const lightbox = GLightbox({});
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