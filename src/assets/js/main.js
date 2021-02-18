'use script';
import Swiper, { Navigation, Pagination } from 'swiper';
import Readmore from "readmore-js";
import GLightbox from 'glightbox';
import $ from 'jquery';
import { head, startCase } from 'lodash';

Swiper.use([Navigation, Pagination]);


window.addEventListener('DOMContentLoaded', () => {
    const lightbox = GLightbox({});
    let headerMenu = document.querySelector('.header__nav'),
        html = document.querySelector('html'),
        body = document.querySelector('body');
    
            
/* HAMBURGER + FORM SEARCH OPEN HEADER */
let header = document.querySelector('.header'),
    searchForm = header.querySelector('.header__search > form'),
    hamburgerBtn = header.querySelector('.js-burger'),
    hamburgerMenu = header.querySelector('.hamburger-menu');

    header.addEventListener('click', (e) => {
        let target = e.target;
        if(target && target.classList.contains('js-search')){
            searchForm.classList.toggle('active');
        }
        if(target && target.classList.contains('js-burger')){
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
            //html.classList.toggle('lock');
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
        spaceBetween: 30,
        observer: true,
        observeParents: true,
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
        spaceBetween: 100,
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


    const $gallery = $('.swiper-container-card-gallery');
    const $thumbs = $('.swiper-container-card-mini');
    const slideNumber = $gallery.find('.swiper-slide').length / 3;
    const slidesPerView = 3;
    let targetIndex;

    const activeSlideClass = 'active';
    let $thumbsActiveSlide;
    let $galleryActiveSlide;


    let swiperGallery = new Swiper('.swiper-container-card-gallery', {
        direction: 'vertical',
        //loop: true,
        //loopAdditionalSlides: 0,
        initialSlide: slideNumber,
        speed: 700,
        simulateTouch: false,
        spaceBetween: 20,
        
    });

    let swiperThumbs = new Swiper('.swiper-container-card-mini', {
        direction: 'vertical',
        //loop: true,
        //loopAdditionalSlides: 0,
        slidesPerView: slidesPerView,
        initialSlide: slideNumber,
        centeredSlides: true,
        slideToClickedSlide: true,
        speed: 500,
        spaceBetween: 20,
        navigation: {
            nextEl: '.card-gallery__mini-ar-b',
            prevEl: '.card-gallery__mini-ar-t',
        },
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
            
        }
    });

    //add custom active class for smooth animation
    $thumbsActiveSlide = $(swiperThumbs.slides).filter('.swiper-slide-active');
    $galleryActiveSlide = $(swiperGallery.slides).filter('.swiper-slide-active');
    $thumbsActiveSlide.addClass(activeSlideClass);
    $galleryActiveSlide.addClass(activeSlideClass);
    //---------------------------------------------


    swiperThumbs.on("slideChangeTransitionStart", function () {
        //add custom active class for smooth animation
        $thumbsActiveSlide = $(swiperThumbs.slides).filter('.swiper-slide-active');
        $thumbsActiveSlide.siblings().removeClass(activeSlideClass);
        //---------------------------------------------

        targetIndex = Number(swiperThumbs.realIndex);
        swiperThumbs.detachEvents();
        swiperGallery.slideTo(targetIndex + 1, 700, true);
    });

    // swiperThumbs.on("slideChangeTransitionEnd", function () {
    //   swiperThumbs.attachEvents();
    // });

    swiperGallery.on("slideChangeTransitionStart", function () {
        //add custom active class for smooth animation
        $galleryActiveSlide = $(swiperGallery.slides).filter('.swiper-slide-active');
        $galleryActiveSlide.siblings().removeClass(activeSlideClass);
        //---------------------------------------------
    });

    swiperGallery.on("slideChangeTransitionEnd", function () {
        if (targetIndex < slideNumber) {
            targetIndex += slideNumber;
            teleportTo(targetIndex);
        } else if (targetIndex >= slideNumber * 2) {
            targetIndex -= slideNumber;
            teleportTo(targetIndex);
        } else {
            //add custom active class for smooth animation
            $thumbsActiveSlide.addClass(activeSlideClass);
            $galleryActiveSlide.addClass(activeSlideClass);
            //---------------------------------------------
        }
        swiperThumbs.attachEvents();
    });

    function teleportTo(slideIndex) {
        swiperThumbs.slideTo(slideIndex + slidesPerView, 0, false);
        swiperGallery.slideTo(slideIndex + 1, 0, false);

        //add custom active class for smooth animation
        $thumbsActiveSlide = $(swiperThumbs.slides).filter('.swiper-slide-active');
        $galleryActiveSlide = $(swiperGallery.slides).filter('.swiper-slide-active');
        $thumbsActiveSlide.addClass(activeSlideClass);
        $galleryActiveSlide.addClass(activeSlideClass);
        //---------------------------------------------
    }

    //If u have images with lazy add this after swipers init
    function fixLazy() {
        let gallerylastIndex = slideNumber * 2;
        let thumbslastIndex = slideNumber * 2 + slidesPerView - 1;
        let $lastGallerySlide = $(swiperGallery.slides[gallerylastIndex]).find('.swiper-lazy');
        let $lastThumbsSlide = $(swiperThumbs.slides[thumbslastIndex]).find('.swiper-lazy');

        removeLazySlide($lastGallerySlide);
        removeLazySlide($lastThumbsSlide);

        let counter;

        if ((slidesPerView - 1) % 2 !== 0) {
            counter = Math.floor((slidesPerView - 1) / 2) + 1;
        } else {
            counter = (slidesPerView - 1) / 2;
        }

        for (let i = 0; i < counter; i++) {

            let $prevSlide = $(swiperThumbs.slides[thumbslastIndex - (i + 1)]).find('.swiper-lazy');
            let $nextSlide = $(swiperThumbs.slides[thumbslastIndex + (i + 1)]).find('.swiper-lazy');

            removeLazySlide($prevSlide);
            removeLazySlide($nextSlide);
        }
    }

    function removeLazySlide($slide) {
        let data = $slide.data('background');
        $slide.attr('style', `background-image: url('${data}')`);
        $slide.removeAttr('data-background');
        $slide.addClass('swiper-lazy-loaded');
        $slide.empty();
    }



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

        }, { passive: false });
    }


    /* SHOW ALL BUTTON */

    let getSiblings = function (e, byClass) {

        // for collecting siblings
        let siblings = [];
        let siblingsByClass = [];
        // if no parent, return no sibling
        if (!e.parentNode) {
            return siblings;
        }
        // first child of the parent node
        let sibling = e.parentNode.firstChild;

        // collecting siblings
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


    /* ASIDE ACCORDION */

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
    })


    /* Reviews Stars */

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
                str += elem.outerHTML ;
            })
            starsContainer.innerHTML = str;
            handleEvenets()
        }
    }


    function handleEvenets(){
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
    handleEvenets()
    
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