'use script';
import Swiper, {Navigation, Pagination, Autoplay, Thumbs} from 'swiper';

import GLightbox from 'glightbox';


Swiper.use([Navigation, Pagination, Autoplay, Thumbs]);


window.addEventListener('DOMContentLoaded', () => {
    const lightbox = GLightbox({});
    let headerMenu = document.querySelector('.header__nav'),
        html = document.querySelector('html'),
        body = document.querySelector('body');
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        console.log('asdfasdfasdfasdf')
        var cardLeft = document.querySelector('.card-block__left'),
            cardBlock = document.querySelector('.card-block');
        let cardLeftNew = document.createElement('div');


        if (cardLeft) {
            let cardImg = document.querySelector('.card__img');
            cardLeft.remove();
            console.log(cardImg);
            cardBlock.insertAdjacentHTML('afterbegin', `
                <div class="card-block__left col col-lg-7">
                <div class="d-flex justify-content-center align-items-center">
                ${cardImg.innerHTML}
                </div>
                </div>
                `);
        }

    }


    /* HAMBURGER + FORM SEARCH OPEN HEADER */
    let header = document.querySelector('.header'),
        searchForm = header.querySelector('.header__search > form'),
        hamburgerBtn = header.querySelector('.js-burger'),
        hamburgerMenu = header.querySelector('.hamburger-menu');


    header.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.classList.contains('js-search')) {
            searchForm.classList.toggle('active');
        }
        if (target && target.classList.contains('js-burger')) {
            hamburgerMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
            html.classList.toggle('lock');
            body.classList.toggle('lock');

        }
    });
    /* MODAL */
    let modalBlock = document.querySelector('.js-sidebars'),
        allModal = document.querySelectorAll('.js-sidebars > section'),
        modalCall = document.querySelector('.modal-call'),
        modalRegion = document.querySelector('.modal-region'),
        modalOneClick = document.querySelector('.modal-one-click'),
        modalAssortment = document.querySelector('.modal-assortment'),
        modalJob = document.querySelector('.modal-job'),
        modalSubscribe = document.querySelector('.modal-subscribe'),
        regionSelect = document.querySelectorAll('.modal-region__link'),
        regionBtn = document.querySelector('.js-region-city');

    if (localStorage.getItem('city') != null) {
        console.log(localStorage.getItem('city'));
        console.log(typeof (localStorage.getItem('city')));
        regionBtn.innerHTML = localStorage.getItem('city');
    } else {
        regionBtn.innerHTML = 'Москва';
    }
    document.addEventListener('click', e => {

        let target = e.target;

        if (target && (target.classList.contains('js-call') || target.classList.contains('modal-call__exit'))) {
            openCloseModal(e, modalCall);
        }
        if (target && (target.classList.contains('js-card-one-click') || target.classList.contains('modal-one-click__exit'))) {
            openCloseModal(e, modalOneClick);
        }
        if (target && (target.classList.contains('js-job') || target.classList.contains('modal-job__exit'))) {
            openCloseModal(e, modalJob);
        }
        if (target && (target.classList.contains('js-subscribe') || target.classList.contains('modal-subscribe__exit'))) {
            openCloseModal(e, modalSubscribe);
        }
        if (target && (target.classList.contains('js-assortment') || target.classList.contains('modal-assortment__exit'))) {
            openCloseModal(e, modalAssortment);
        }
        if (target && (target.classList.contains('js-region') || target.classList.contains('modal-region__exit'))) {
            openCloseModal(e, modalRegion);
        }
        if (target.classList.contains('modal-region__link')) {
            for (let i = 0; i < regionSelect.length; i++) {
                if (regionSelect[i] == target) {
                    let citiValue = regionSelect[i].innerHTML;
                    localStorage.setItem('city', citiValue)
                    let testValue = localStorage.getItem('city')
                    if (testValue == 'undifiend') {
                        regionBtn.innerHTML = 'Москва';
                    } else {
                        regionBtn.innerHTML = testValue.innerHTML;
                        regionBtn.innerHTML = testValue;
                    }

                }
            }
            /*
            regionSelect.forEach(item => {
                if (item == target) {
                    let citiValue = item.innerHTML;
                    localStorage.setItem('city', citiValue)
                    let testValue = localStorage.getItem('city')
                    regionBtn.innerHTML = testValue.innerHTML;
                    regionBtn.innerHTML = testValue;
                }
            });
            */
            openCloseModal(e, modalRegion);
        } else if (target.classList.contains('js-region-close')) {
            let city = document.querySelector('.js-select-city');
            localStorage.setItem('city', city.innerHTML);
            let testValue = localStorage.getItem('city');
            regionBtn.innerHTML = testValue;
            openCloseModal(e, modalRegion);
        }


        /* ЗАКРЫТИЕ ПО КЛИКУ НА САЙДБАР */
        if (target && target.classList.contains('sidebar-bg')) {
            e.preventDefault();
            //html.classList.toggle('lock');
            modalBlock.classList.toggle('sidebar-bg');
            for (let i = 0; i < allModal.length; i++) {
                if (allModal[i].classList.toggle('active')) {
                    allModal[i].classList.remove('active');
                }
            }
            /*
            allModal.forEach(item => {
                if (item.classList.toggle('active')) {
                    item.classList.remove('active');
                }
            });*/
        }

    });

    function openCloseModal(e, modal) {
        e.preventDefault();
        //html.classList.toggle('lock');
        //body.classList.toggle('lock');
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
    let swiperTagsTwo = new Swiper('.swiper-container-tags-2', {
        slidesPerView: "auto",
        spaceBetween: 0,
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            nextEl: '.tags__next-2',
            prevEl: '.tags__prev-2',
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
            0: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1199: {
                slidesPerView: 5,
            },
            1399: {
                slidesPerView: 6,
            },
        }

    });
    let swiperArticles = new Swiper('.swiper-container-articles', {
        slidesPerView: 1,
        spaceBetween: 50,
        observer: true,
        autoHeight: true,
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
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 3,
            },
        }

    });
    let swiperObject = new Swiper('.swiper-container-object', {
        slidesPerView: 3,
        spaceBetween: 35,
        observer: true,
        observeParents: true,
        autoHeight: true,
        navigation: {
            nextEl: '.object__next',
            prevEl: '.object__prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 3,
            },
        }

    });
    let swiperRecommend = new Swiper('.swiper-container-recommend', {
        slidesPerView: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.recommend__next',
            prevEl: '.recommend__prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 3,
            },
        }

    });
    let swiperViews = new Swiper('.swiper-container-views', {
        slidesPerView: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.views__next',
            prevEl: '.views__prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 3,
            },
        }

    });
    let swiperAwardsBlock = new Swiper('.swiper-container-awards-block', {
        slidesPerView: 4,
        spaceBetween: 40,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.awards-block__next',
            prevEl: '.awards-block__prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 3,
            },
            1399: {
                slidesPerView: 4,
            },
        }
    });


    let galleryThumbs = new Swiper('.swiper-container-card-mini', {
        spaceBetween: 30,
        autoplay: true,
        slidesPerView: 3,
        direction: 'vertical',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 3,
            },
            navigation: {
                nextEl: '.card-gallery__mini-ar-b',
                prevEl: '.card-gallery__mini-ar-t',
            },
        }
    });
    let galleryTop = new Swiper('.swiper-container-card-gallery', {
        spaceBetween: 100,
        autoplay: true,
        navigation: {
            nextEl: '.card-gallery__mini-ar-b',
            prevEl: '.card-gallery__mini-ar-t',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });


    /* TABS */
    let articleLink = document.querySelectorAll('.js-article-link'),
        articleTabs = document.querySelectorAll('.js-article-tabs'),
        articleParents = document.querySelector('.articles-block'),
        hitLink = document.querySelectorAll('.js-hit-link'),
        hitTabs = document.querySelectorAll('.js-hit-tabs'),
        hitParents = document.querySelector('.hit'),
        jobLink = document.querySelectorAll('.job__header'),
        jobTabs = document.querySelectorAll('.job__bottom'),
        jobParents = document.querySelector('.job'),
        bannerParent = document.querySelector('.banner'),
        bannerLink = document.querySelectorAll('.banner__adv'),
        bannerContent = document.querySelectorAll('.banner__content'),
        productParent = document.querySelector('.product-block'),
        productLink = document.querySelectorAll('.js-product-link'),
        productTab = document.querySelectorAll('.js-product-tab');

    if (hitParents && hitParents.classList.contains('hit-catalog') == false) {
        showHideTabs(0, hitLink, hitTabs, hitParents, 'js-hit-link');
    }
    if (bannerParent && bannerLink.length != 0) {
        showHideTabs(0, bannerLink, bannerContent, bannerParent, 'banner__adv');
    }
    if (articleParents && articleLink.length != 0) {
        showHideTabs(0, articleLink, articleTabs, articleParents, 'js-article-link');
    }
    if (jobParents && jobLink.length != 0) {
        showHideTabs(0, jobLink, jobTabs, jobParents, 'job__header');
    }
    if (productParent && productLink.length != 0) {
        showHideTabs(0, productLink, productTab, productParent, 'js-product-link');
    }

    function showHideTabs(i = 0, link, tabs, parent, classContains) {
        hideTabs(link, tabs);
        showTabs(0, link, tabs);
        parent.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(classContains)) {
                e.preventDefault();
                for (let i = 0; i < link.length; i++) {
                    if (link[i] == e.target) {
                        hideTabs(link, tabs);
                        showTabs(i, link, tabs);
                    }
                }
                /*
                link.forEach((item, i) => {
                    if (item == e.target) {
                        hideTabs(link, tabs);
                        showTabs(i, link, tabs);
                    }
                });*/
            }
        });
    }

    function showTabs(i = 0, link, content) {
        link[i].classList.add('active');
        content[i].classList.add('active');
    }

    function hideTabs(link, content) {
        for (let i = 0; i < link.length; i++) {
            link[i].classList.remove('active');
        }
        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove('active');
        }

    }

    /* RATING */
    let ratingParent = document.querySelector('.js-rating'),
        ratingInput = document.querySelector('#js-rating'),
        ratingStar = document.querySelectorAll('.js-rating > li');

    if (ratingParent) {
        ratingParent.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target;
            if (target && target.tagName == 'LI') {
                for (let i = 0; i < ratingStar.length; i++) {
                    ratingStar[i].classList.remove('active')
                }

                for (let i = 0; i => ratingStar.length; i++) {
                    if (ratingStar[i] == target) {
                        ratingStar[i].classList.add('active');
                        ratingInput.value = ++i;
                        return
                    } else {
                        ratingStar[i].classList.add('active');
                    }
                }
            }

        });
    }
    /* footer link */
    let footerMenuParent = document.querySelector('.footer'),
        footerLink = document.querySelectorAll('.js-footer-title'),
        footerList = document.querySelectorAll('.js-footer-menu'),
        hitFilterParent = document.querySelector('.hit__filter'),
        hitFilterLink = document.querySelectorAll('.js-accordion-btn'),
        hitFilterList = document.querySelectorAll('.hit__filter-checkboxes');
    if (footerMenuParent) {
        footerMenuParent.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('js-footer-title')) {
                event.preventDefault();
                for (let i = 0; i < footerLink.length; i++) {
                    if (footerLink[i] == target) {
                        target.classList.toggle('active');
                        footerList[i].classList.toggle('active');
                    }
                }

            }

        }, {passive: false});
    }

    if (hitFilterParent) {
        hitFilterParent.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('js-accordion-btn')) {
                event.preventDefault();
                for (let i = 0; i < hitFilterLink.length; i++) {
                    if (hitFilterLink[i] == target) {
                        target.classList.toggle('active');
                        hitFilterList[i].classList.toggle('open');
                    }
                }

            }

        }, {passive: false});
    }
    /*
    if (this.classList.contains('active')) {
        accordionContent.classList.remove('open');
        this.classList.remove('active');
    } else {
        accordionContent.classList.add('open');
        this.classList.add('active');
    }
    /* footer
    let filterBtn = document.querySelector('.js-filter-btn'),
        filterContent = document.querySelector('.js-filter-content');

    if (filterBtn) {
        filterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            filterContent.classList.toggle('active');
        });
    }
    /* SHOW ALL BUTTON*/

    let getSiblings = function (e, byClass) {
        let siblings = [];
        let siblingsByClass = [];
        if (!e.parentNode) {
            return siblings;
        }
        let sibling = e.parentNode.firstChild;
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
                if (sibling.classList.contains(byClass)) {
                    siblingsByClass.push(sibling);
                }
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return {
            'siblings': sibling,
            'siblingsByClass': siblingsByClass
        }
    };

    let showAllBtn = document.querySelectorAll('.js-show-all')
    for (let i = 0; i < showAllBtn.length; i++) {
        showAllBtn[i].addEventListener('click', function (e) {
            let arShowItems = getSiblings(this, 'mask').siblingsByClass

            if (this.classList.contains('open')) {
                for (let i = 0; i < arShowItems.length; i++) {
                    arShowItems[i].classList.add('hidden')
                }

                this.innerHTML = "Показать все"
                this.classList.remove('open')
            } else {
                for (let i = 0; i < arShowItems.length; i++) {
                    arShowItems[i].classList.remove('hidden')
                }
                this.innerHTML = "Скрыть последние"
                this.classList.add('open')
            }
        })
    }
    /*
        showAllBtn.forEach(elem => {
            elem.addEventListener('click', function (e) {
                let arShowItems = getSiblings(this, 'mask').siblingsByClass

                if (this.classList.contains('open')) {
                    arShowItems.forEach(el => {
                        el.classList.add('hidden')
                    })
                    this.innerHTML = "Показать все"
                    this.classList.remove('open')
                } else {
                    arShowItems.forEach(el => {
                        el.classList.remove('hidden')
                    })
                    this.innerHTML = "Скрыть последние"
                    this.classList.add('open')
                }
            })
        })


        /* ASIDE ACCORDION

        let accordionBtn = document.querySelectorAll('.js-accordion-btn');

        for (let i = 0; i < accordionBtn.length; i++) {
            const element = accordionBtn[i];
            element.addEventListener('click', function (e) {
                let accordionContent = this.nextElementSibling;
                if (this.classList.contains('active')) {
                    accordionContent.classList.remove('open');
                    this.classList.remove('active');
                } else {
                    accordionContent.classList.add('open');
                    this.classList.add('active');
                }
            })
        }
    /*
        function handleChange(input, min, max) {
            input.value = input.value.replace(/[^0-9]/g, '');
            if (+input.value < min) input.value = min;
            if (+input.value > max) input.value = max;
        }

        let inputNumber = document.querySelectorAll('.js-input-wrap input')
        inputNumber.forEach(el => {
            el.addEventListener('keyup', function () {
                let minValue = el.getAttribute('data-min')
                let maxValue = el.getAttribute('data-max')
                handleChange(el, minValue, maxValue)
            })
        })*/

    /* VIDEO */
    function findVideos() {
        let videos = document.querySelectorAll('.video');

        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video__button');
        let id = parseMediaURL(media);

        video.addEventListener('click', () => {
            let iframe = createIframe(id);

            link.remove();
            button.remove();
            video.appendChild(iframe);
        });

        link.removeAttribute('href');
        video.classList.add('video--enabled');
    }

    function parseMediaURL(media) {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);

        return match[1];
    }

    function createIframe(id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video__media');

        return iframe;
    }

    function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    }

    findVideos();
    /* Reviews Stars 

    let starsContainer = document.querySelector('.card__rate');
    let str = '';

    function activeStarts(el, index, flag) {
        str = '';
        if (!flag) {
            stars.forEach((elem, i) => {
                elem.classList.remove('active')
            })
        } else if (flag == undefined) {
            stars.forEach((elem, i) => {
                if (i <= index) {
                    elem.classList.add('active')
                } else {
                    elem.classList.remove('active')
                }
            })
        }
        else {
            stars.forEach((elem, i) => {
                if (i <= index) {
                    elem.classList.add('active')
                } else {
                    elem.classList.remove('active')
                }
                str += elem.outerHTML;
            })
            starsContainer.innerHTML = str;
            handleEvenets()
        }
    }


    function handleEvenets() {
        let stars = document.querySelectorAll('.card__rate span');
        let starsFlag = true;

        stars.forEach((el, index) => {
            el.addEventListener('mouseover', function () {
                starsFlag = false;
                stars.forEach((elem, i) => {
                    if (i <= index) {
                        elem.classList.add('active')
                    } else {
                        elem.classList.remove('active')
                    }
                })
            })

            el.addEventListener('mouseout', function StarsHandleMouseOut(el) {
                starsFlag = false;
                activeStarts(el, index, starsFlag)
            })

            el.addEventListener('click', function StarsHandleClick() {
                starsFlag = true;
                activeStarts(el, index, starsFlag)
            })

        })
    }
    handleEvenets()*/


    /* Custom Selects*/

    let selectrics = document.querySelectorAll('.selectric');
    let options = document.querySelectorAll('.hidden ul li');
    let formDelivery = '';

    for (let i = 0; i < selectrics.length; i++) {
        selectrics[i].addEventListener('click', function () {
            show(this)
        })
    }
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function () {
            select(this)
            formDelivery = this.innerHTML;
        })
    }

    function show(context) {
        let selectbox = context.querySelector(".selectric-options");
        // visible
        if (selectbox.classList.contains("hidden")) {
            selectbox.classList.remove("hidden");
            selectbox.classList.add("visible");
            context.classList.add("open");
            // hidden
        } else {
            selectbox.classList.remove("visible");
            selectbox.classList.add("hidden");
            context.classList.remove("open");
        }
    }

    function select(context) {
        context.parentNode.parentNode.parentNode.querySelector('.label span').innerHTML = context.innerHTML;
    }

    // K0RZINA

    let basketItems = document.querySelectorAll('.basket-item');
    let basketSum = document.querySelector('.js-basket-sum')
    let basketSumOld = document.querySelector('.js-basket-sum-old')
    let basketDelivery = document.querySelector('.js-basket-delivery')
    let basketDiscount = document.querySelector('.js-basket-discount')
    let basketTotal = document.querySelector('.js-basket-total')

    let totalPrice = {};
    let totalDelivery = {};
    let totalDiscount = {};
    let totalSum = 0;

    function formatMoney(amount, decimalCount = 0, decimal = ".", thousands = " ") {
        try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const negativeSign = amount < 0 ? "-" : "";

            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;

            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
            console.log(e)
        }
    };

    function sumSalaries(salaries) {

        let sum = 0;
        for (let salary of Object.values(salaries)) {
            sum += +salary;
        }

        return sum; // 650
    }


    if (basketItems.length >= 1) {

        basketItems.forEach(el => {
            let countBtn = el.querySelectorAll('.js-basket-count-btn')
            let countInput = el.querySelector('.js-basket-count-input')
            let basketCost = el.querySelector('.basket-item__cost')
            let basketDelete = el.querySelector('.product-remove')
            let oldCost = basketCost.querySelector('.basket-item__old');
            let curCost = basketCost.querySelector('.basket-item__new');
            let curDiscount = el.dataset.basketDiscount;
            let curId = el.dataset.basketId;
            let curPrice = el.dataset.basketPrice;

            let localPrice = 0;
            // ИЗМЕНЕНИЕ КОЛИЧЕСТВА ЕДИНИЦЫ ТОВАРА
            countBtn.forEach(element => {
                element.addEventListener('click', function () {
                    setTimeout(() => {
                        if (countInput.value >= 1) {
                            countInput.value = +countInput.value + +this.dataset.delta;
                        }
                        if (+countInput.value <= 1) {
                            countInput.value = 1;
                            this.disabled = true;
                        } else {
                            this.disabled = false;
                            countBtn.forEach(elem => {
                                elem.disabled = false;
                            })
                        }
                        localPrice = +curPrice * +countInput.value;
                        if (oldCost) {
                            oldCost.innerHTML = formatMoney(localPrice / (100 - +curDiscount) * 100) + ' ₽';
                            curCost.innerHTML = formatMoney(localPrice) + ' ₽';

                            //СкидОчка
                            totalDiscount[curId] = (localPrice - (localPrice / (100 - +curDiscount) * 100)).toFixed(0);
                            basketDiscount.innerHTML = formatMoney(sumSalaries(totalDiscount)) + ' ₽';

                        } else {
                            curCost.innerHTML = formatMoney(localPrice) + ' ₽';
                        }
                        //Сумма товаров
                        totalPrice[curId] = localPrice;
                        basketSum.innerHTML = formatMoney(sumSalaries(totalPrice)) + ' ₽';

                        if (sumSalaries(totalDiscount)) {
                            basketSumOld.innerHTML = formatMoney(sumSalaries(totalPrice) + sumSalaries(totalDiscount) * -1) + ' ₽';
                        } else {
                            basketSumOld.innerHTML = '';
                        }

                        //ИТОГО
                        basketTotal.innerHTML = formatMoney(sumSalaries(totalPrice) + sumSalaries(totalDelivery)) + ' ₽';
                    }, 400);
                })
            });

            // УАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ
            if (basketDelete) {
                basketDelete.addEventListener('click', function () {
                    this.parentNode.parentNode.parentNode.remove()

                    totalDiscount[curId] = 0;
                    basketDiscount.innerHTML = formatMoney(sumSalaries(totalDiscount)) + ' ₽';

                    totalPrice[curId] = 0;
                    basketSum.innerHTML = formatMoney(sumSalaries(totalPrice)) + ' ₽';


                    //Сумма товаров
                    basketSum.innerHTML = formatMoney(sumSalaries(totalPrice)) + ' ₽';
                    if (sumSalaries(totalDiscount)) {
                        basketSumOld.innerHTML = formatMoney(sumSalaries(totalPrice) + sumSalaries(totalDiscount) * -1) + ' ₽';
                    } else {
                        basketSumOld.innerHTML = '';
                    }
                    //ИТОГО
                    basketTotal.innerHTML = formatMoney(sumSalaries(totalPrice) + sumSalaries(totalDelivery)) + ' ₽';

                    if (document.querySelectorAll('.basket-item').length <= 0) {
                        document.getElementById("basket").style.display = "none";
                        document.querySelector('.basket-items__title').style.display = "none";
                        document.querySelector('.basket-items').innerHTML = `<h2 style="text-align: center; margin: 30px 0;">Ваша корзина пуста.</h2>  
                    <a href="/catalog" style="color: #0467FB;display: block;text-align: center;font-size: 18px;font-weight: 500;" >Вернуться в каталог</a>`;
                    } else {
                        document.getElementById("basket").style.display = "block";
                        //document.querySelector('.basket-items__title').style.display = "flex";
                    }
                })
            }


        });


        // ФОРМА - ТЕЛЕФОН
        let phoneField = document.querySelector('[name="phone"]');
        let phoneResponse = document.querySelector('.js-respose-phone')
        let phoneValid = false;
        if (phoneField) {
            phoneField.addEventListener("focus", function () {
                var input = phoneField,
                    atr = "+7 (___) ___-__-__",
                    pat = new RegExp("_"),
                    target = event.target;

                input.setAttribute("value", atr);
            });

            phoneField.addEventListener("keyup", function () {
                var input = phoneField,
                    atr = "+7 (___) ___-__-__",
                    pat = new RegExp("_"),
                    target = event.target;

                if (!pat.test(input.value)) {
                    phoneResponse.innerHTML = 'Телефон введен верно'
                    phoneResponse.style.color = '#009800'
                    phoneValid = true;
                }
            })
            phoneField.addEventListener("blur", function () {
                var input = phoneField,
                    atr = "+7 (___) ___-__-__",
                    pat = new RegExp("_"),
                    target = event.target;

                if (pat.test(input.value)) {
                    input.setAttribute("value", "");
                    phoneResponse.innerHTML = 'Поле не должно быть пустым'
                    phoneResponse.style.color = 'red'
                    phoneValid = false;
                } else {
                    phoneResponse.innerHTML = 'Телефон введен верно'
                    phoneResponse.style.color = '#009800'
                    phoneValid = true;
                }
            });


            //input.setAttribute("value", atr);
            phoneField.addEventListener("click", function (event) {
                // Mask for telephone
                function setCursorPosition(pos, elem) {
                    elem.focus();
                    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
                    else if (elem.createTextRange) {
                        var range = elem.createTextRange();
                        range.collapse(false);
                        range.moveEnd("character", pos);
                        range.moveStart("character", pos);
                        range.select();
                    }
                }

                function mask(event) {
                    var matrix = this.defaultValue,
                        i = 0,
                        def = matrix.replace(/\D/g, ""),
                        val = this.value.replace(/\D/g, "");
                    // console.log('matrix: ' + matrix, 'i: ' + i, 'dev: ' + def, 'val: ' + val);
                    def.length >= val.length && (val = def);
                    matrix = matrix.replace(/[_\d]/g, function (a) {
                        return val.charAt(i++) || "_";
                    });
                    this.value = matrix;
                    i = matrix.lastIndexOf(val.substr(-1));
                    i < matrix.length && matrix != this.defaultValue
                        ? i++
                        : (i = matrix.indexOf("_"));
                    setCursorPosition(i, this);
                }

                var input = phoneField;
                input.addEventListener("input", mask, false);
                var input = phoneField,
                    atr = "+7 (___) ___-__-__";

                input.onfocus = function () {
                    input.setAttribute("value", atr);
                };

                //var isClickInside = input.contains(event.target);
                var target = event.target,
                    pattern = "_"; // где был клик?

                if (target.id != 'phone' && pattern && pattern.test(input.value)) {
                    input.setAttribute("value", "");
                }

            });
        }


        // ФОРМА - E-MAIL
        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        // ФОРМА ОФОРМЛЕНИЯ ЗАКАЗА
        let formElem = document.getElementById('basket')
        let emailField = document.querySelector('[name="email"]');
        let emailResponse = document.querySelector('.js-respose-email')
        let emailValid = false;
        if (emailField) {
            emailField.addEventListener('keyup', function () {
                let email = this.value;
                if (validateEmail(email)) {
                    emailResponse.innerHTML = "E-mail введен верно";
                    emailResponse.style.color = '#009800';
                    emailValid = true;
                }
            })

            emailField.addEventListener('blur', function () {
                let email = this.value;
                if (validateEmail(email)) {
                    emailResponse.innerHTML = "E-mail введен верно";
                    emailResponse.style.color = '#009800';
                    emailValid = true;
                } else {
                    emailResponse.innerHTML = "Введите корректный E-mail";
                    emailResponse.style.color = 'red';
                    emailValid = false;
                }
            })

        }
        if (formElem) {
            formElem.addEventListener('submit', function (e) {
                e.preventDefault()
                let formData = new FormData(this);
                let formBasket = [];
                let basketItems = document.querySelectorAll('.basket-item');

                basketItems.forEach(element => {
                    formBasket.push(element.dataset.basketId)
                });

                formData.append('delivery', formDelivery)
                formData.append('basket-items', formBasket)

                if (phoneValid && emailValid) {
                    console.log(...formData)
                }

            })

        }

    }
});

function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");

    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        // массив объектов с подходящим брейкпоинтом
        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("max");
da.init();