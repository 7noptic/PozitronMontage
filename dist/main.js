!function(e){function t(t){for(var n,o,a=t[0],l=t[1],c=t[2],u=0,v=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(d&&d(t);v.length;)v.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,a=1;a<s.length;a++){var l=s[a];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},i={0:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=l;r.push([125,1]),s()}({125:function(e,t,s){s(126),e.exports=s(318)},312:function(e,t,s){},318:function(e,t,s){"use strict";s.r(t);s(312),s(313),s(314),s(315);var n=s(323),i=s(321),r=s(322),o=(s(316),s(91)),a=s.n(o);n.a.use([i.a,r.a]),window.addEventListener("DOMContentLoaded",(function(){a()({}),document.querySelector(".header__nav");var e=document.querySelector("html"),t=document.querySelector("body"),s=document.querySelector(".js-sidebars"),i=document.querySelectorAll(".js-sidebars > section"),r=document.querySelector(".modal-call"),o=document.querySelector(".modal-region"),l=document.querySelector(".modal-one-click"),c=document.querySelector(".modal-assortment"),d=document.querySelectorAll(".modal-region__link"),u=document.querySelector(".js-region-city");function v(n,i){n.preventDefault(),e.classList.toggle("lock"),t.classList.toggle("lock"),s.classList.toggle("sidebar-bg"),i.classList.toggle("active")}document.addEventListener("click",(function(n){var a=n.target;if(a&&(a.classList.contains("js-call")||a.classList.contains("modal-call__exit")||a.classList.contains("modal-call__btn"))&&v(n,r),a&&(a.classList.contains("js-card-one-click")||a.classList.contains("modal-one-click__exit")||a.classList.contains("modal-one-click__btn"))&&v(n,l),a&&(a.classList.contains("js-assortment")||a.classList.contains("modal-assortment__exit")||a.classList.contains("modal-assortment__btn"))&&v(n,c),a&&(a.classList.contains("js-region")||a.classList.contains("modal-region__exit"))&&v(n,o),a.classList.contains("modal-region__link"))d.forEach((function(e){e==a&&(u.innerHTML=e.innerHTML)})),v(n,o);else if(a.classList.contains("js-region-close")){var p=document.querySelector(".js-select-city");u.innerHTML=p.innerHTML,v(n,o)}a&&a.classList.contains("sidebar-bg")&&(n.preventDefault(),e.classList.toggle("lock"),t.classList.toggle("lock"),s.classList.toggle("sidebar-bg"),i.forEach((function(e){e.classList.toggle("active")&&e.classList.remove("active")})))}));new n.a(".swiper-container-tags",{slidesPerView:"auto",spaceBetween:0,allowSlidePrev:!0,allowSlideNext:!0,navigation:{nextEl:".tags__next",prevEl:".tags__prev"}}),new n.a(".swiper-container-partners",{slidesPerView:6,spaceBetween:30,observer:!0,observeParents:!0,navigation:{nextEl:".partners__next",prevEl:".partners__prev"},breakpoints:{0:{slidesPerView:1},575:{slidesPerView:2},767:{slidesPerView:3},991:{slidesPerView:4},1199:{slidesPerView:5},1399:{slidesPerView:6}}}),new n.a(".swiper-container-articles",{slidesPerView:1,spaceBetween:50,observer:!0,observeParents:!0,allowSlidePrev:!0,allowSlideNext:!0,pagination:{el:".swiper-pagination-bullets",type:"bullets",clickable:!0}}),new n.a(".swiper-container-card",{slidesPerView:3,spaceBetween:30,observer:!0,observeParents:!0,allowSlidePrev:!0,allowSlideNext:!0,navigation:{nextEl:".card__next",prevEl:".card__prev"},breakpoints:{0:{slidesPerView:1},767:{slidesPerView:2},1199:{slidesPerView:3}}}),new n.a(".swiper-container-object",{slidesPerView:3,spaceBetween:30,observer:!0,observeParents:!0,navigation:{nextEl:".object__next",prevEl:".object__prev"},breakpoints:{0:{slidesPerView:1},767:{slidesPerView:2},1199:{slidesPerView:3}}}),new n.a(".swiper-container-awards-block",{slidesPerView:4,spaceBetween:100,observer:!0,observeParents:!0,navigation:{nextEl:".awards-block__next",prevEl:".awards-block__prev"},breakpoints:{0:{slidesPerView:1},767:{slidesPerView:2},1199:{slidesPerView:3},1399:{slidesPerView:4}}});var p=document.querySelectorAll(".js-article-link"),f=document.querySelectorAll(".js-article-tabs"),g=document.querySelector(".articles-block"),b=document.querySelectorAll(".js-hit-link"),w=document.querySelectorAll(".js-hit-tabs"),m=document.querySelector(".hit");function L(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0;y(e,t),h(0,e,t),s.addEventListener("click",(function(s){s.target&&s.target.classList.contains(n)&&(s.preventDefault(),e.forEach((function(n,i){n==s.target&&(y(e,t),h(i,e,t))})))}))}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,s=arguments.length>2?arguments[2]:void 0;t[e].classList.add("active"),s[e].classList.add("active")}function y(e,t){e.forEach((function(e){e.classList.remove("active")})),t.forEach((function(e){e.classList.remove("active")}))}m&&L(0,b,w,m,"js-hit-link"),g&&L(0,p,f,g,"js-article-link");var _=document.querySelector(".footer"),P=document.querySelectorAll(".js-footer-title"),S=document.querySelectorAll(".js-footer-menu");_&&_.addEventListener("click",(function(e){var t=e.target;t&&t.classList.contains("js-footer-title")&&(e.preventDefault(),P.forEach((function(e,s){e==t&&(t.classList.toggle("active"),S[s].classList.toggle("active"))})))}),{passive:!1});document.querySelectorAll(".js-show-all").forEach((function(e){e.addEventListener("click",(function(e){var t=function(e,t){var s=[],n=[];if(!e.parentNode)return s;for(var i=e.parentNode.firstChild;i;)1===i.nodeType&&i!==e&&(i.classList.contains(t)&&n.push(i),s.push(i)),i=i.nextSibling;return{siblings:i,siblingsByClass:n}}(this,"mask").siblingsByClass;this.classList.contains("open")?(t.forEach((function(e){e.classList.add("hidden")})),this.innerHTML="Показать все",this.classList.remove("open")):(t.forEach((function(e){e.classList.remove("hidden")})),this.innerHTML="Скрыть последние",this.classList.add("open"))}))}));for(var j=document.querySelectorAll(".js-accordion-btn"),k=0;k<j.length;k++){j[k].addEventListener("click",(function(e){var t=this.nextElementSibling;this.classList.contains("active")?(t.classList.remove("open"),this.classList.remove("active")):(t.classList.add("open"),this.classList.add("active"))}))}document.querySelectorAll(".js-input-wrap input").forEach((function(e){e.addEventListener("keyup",(function(){var t,s,n,i=e.getAttribute("data-min"),r=e.getAttribute("data-max");s=i,n=r,(t=e).value=t.value.replace(/[^0-9]/g,""),+t.value<s&&(t.value=s),+t.value>n&&(t.value=n)}))}))}));s(317)}});