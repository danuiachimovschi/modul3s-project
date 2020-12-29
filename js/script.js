"use strict";
import tabs from './modules/tabs';
import timer from './modules/timer';
import calc from './modules/calc';
import getItem from './modules/getitem';
import slide from './modules/sldie';
import showModules from './modules/showmoduls';
import modall from './modules/modal';
import { openModal } from './modules/modal';
document.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(() => openModal('[data-modal]', modalTimerId), 30000);
    tabs('.tabheader__items', 'tabheader__item_active', '.tabcontent', '.tabheader__item');
    timer("2021-01-29", '.timer');
    calc();
    getItem()
    slide({
        container: '.offer__slider',
        slide:'.offer__slide',
        next:'.offer__slider-next',
        back:'.offer__slider-prev',
        total:'#total',
        curentt:'#current',
        wrapper:'.offer__slider-wrapper',
        field:'.offer__slider-inner'
    });
    showModules('form', modalTimerId);
    modall('[data-atribute]', '[data-modal]', modalTimerId);
})
