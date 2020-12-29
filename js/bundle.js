/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.regexp.exec.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.string.match.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.dom-collections.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





function calc() {
  var result = document.querySelector('#calories');
  var ratio, weight, height, age, sex;

  if (localStorage.getItem('ratio')) {
    ratio = +localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', "1.375");
  }

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'famale';
    localStorage.setItem('sex', 'famale');
  }

  function initLocal(parent, activeClass) {
    var element = document.querySelectorAll("".concat(parent, " .calculating__choose-item"));
    element.forEach(function (item) {
      item.classList.remove(activeClass);

      if (item.getAttribute('id') == localStorage.getItem('sex')) {
        item.classList.add(activeClass);
      }

      if (item.getAttribute('data-calc') === localStorage.getItem('ratio')) {
        item.classList.add(activeClass);
      }
    });
  }

  initLocal('#gender', 'calculating__choose-item_active');
  initLocal('.calculating__choose_big', 'calculating__choose-item_active');

  function calculateTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '___';
      return;
    }

    if (sex === 'famale') {
      result.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
    } else {
      result.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    }
  }

  calculateTotal();

  function getStaticInfo(parent, activeClass) {
    var element = document.querySelectorAll("".concat(parent, " .calculating__choose-item"));
    element.forEach(function (elem) {
      elem.addEventListener('click', function (e) {
        if (e.target.getAttribute('data-calc')) {
          ratio = +e.target.getAttribute('data-calc');
          localStorage.setItem('ratio', +e.target.getAttribute('data-calc'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }

        element.forEach(function (item) {
          item.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        calculateTotal();
      });
    });
  }

  getStaticInfo('#gender', 'calculating__choose-item_active');
  getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');

  function getDynammicInfo(selector) {
    var inputData = document.querySelector(selector);
    inputData.addEventListener('input', function () {
      switch (inputData.getAttribute('id')) {
        case 'height':
          height = +inputData.value;
          break;

        case 'weight':
          weight = +inputData.value;
          break;

        case 'age':
          age = +inputData.value;
          break;
      }

      if (inputData.value.match(/\D/g)) {
        inputData.style.border = '1px solid red';
      } else {
        inputData.style.border = '';
      }

      calculateTotal();
    });
  }

  getDynammicInfo('#weight');
  getDynammicInfo('#height');
  getDynammicInfo('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/getitem.js":
/*!*******************************!*\
  !*** ./js/modules/getitem.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.concat.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.dom-collections.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



function getItem() {
  var AddItem = /*#__PURE__*/function () {
    function AddItem(src, alt, title, about, price, praerntselector) {
      _classCallCheck(this, AddItem);

      this.src = src;
      this.title = title;
      this.about = about;
      this.alt = alt;

      for (var _len = arguments.length, clases = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        clases[_key - 6] = arguments[_key];
      }

      this.clases = clases;
      this.price = price;
      this.praerntselector = document.querySelector(praerntselector);
      this.transfer = 22;
      this.transferr();
    }

    _createClass(AddItem, [{
      key: "transferr",
      value: function transferr() {
        this.price = this.price * this.transfer;
      }
    }, {
      key: "contsructionItem",
      value: function contsructionItem() {
        var itm = document.createElement('div');

        if (this.clases.length === 0) {
          itm.classList.add('menu__item');
        } else {
          this.clases.forEach(function (clasesName) {
            itm.classList.add(clasesName);
          });
        }

        itm.innerHTML = "<img src=".concat(this.src, " alt=").concat(this.alt, ">\n            <h3 class=\"menu__item-subtitle\">").concat(this.title, "</h3>\n            <div class=\"menu__item-descr\">").concat(this.about, "</div>\n            <div class=\"menu__item-price\">\n                <div class=\"menu__item-cost\">\u0426\u0435\u043D\u0430:</div>\n                <div class=\"menu__item-total\"><span>").concat(this.price, "</span> $</div>\n            </div>");
        this.praerntselector.append(itm);
      }
    }]);

    return AddItem;
  }();

  (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.getRezsurs)();
  axios.get('http://localhost:3000/menu').then(function (response) {
    // handle success
    response.data.forEach(function (_ref) {
      var img = _ref.img,
          altimg = _ref.altimg,
          title = _ref.title,
          descr = _ref.descr,
          price = _ref.price;
      new AddItem(img, altimg, title, descr, price, '.menu .container').contsructionItem();
    });
  }).catch(function (error) {
    // handle error
    console.log(error);
  }).then(function () {// always executed
  });
}

/* harmony default export */ __webpack_exports__["default"] = (getItem);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; },
/* harmony export */   "openModal": function() { return /* binding */ openModal; }
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.dom-collections.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



function openModal(moddals, modalTimerId) {
  var modalWindow = document.querySelector(moddals);
  modalWindow.classList.toggle('view');
  document.body.style.overflow = 'hidden';
  console.log(modalTimerId);

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function closeModal(moddals) {
  var modalWindow = document.querySelector(moddals);
  modalWindow.classList.toggle('view');
  document.body.style.overflow = 'auto';
}

function modall(trigger, moddals, modalTimerId) {
  var btnModal = document.querySelectorAll(trigger),
      modalWindow = document.querySelector(moddals),
      modalBox = document.querySelector('.modal');
  btnModal.forEach(function (item) {
    item.addEventListener('click', function () {
      return openModal(moddals, modalTimerId);
    });
  });
  modalBox.addEventListener('click', function (eevnt) {
    if (eevnt.target === modalBox || eevnt.target.getAttribute('data-close') == "") {
      closeModal(moddals);
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape' && modalBox.classList.contains('view')) {
      closeModal(moddals);
    }
  });

  function removeEvent(event) {
    for (var i = 0; i < 1; i++) {
      window.removeEventListener('event', eventEvent);
    }
  }

  window.addEventListener('scroll', function () {
    eventEvent();
    removeEvent(scroll);
  });

  function eventEvent() {
    if (window.pageXOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight) {
      openModal(moddals, modalTimerId);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (modall);



/***/ }),

/***/ "./js/modules/showmoduls.js":
/*!**********************************!*\
  !*** ./js/modules/showmoduls.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.iterator.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.object.from-entries.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.object.to-string.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.promise.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.promise.finally.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.dom-collections.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.dom-collections.iterator.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");











function showModals(formss, modalTimerId) {
  var form = document.querySelectorAll(formss);
  var message = {
    succes: 'done',
    loadding: 'img/form/spinner.svg',
    fail: '404'
  };
  form.forEach(function (item) {
    addForm(item);
  });

  function addForm(form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var block = document.createElement('img');
      block.src = message.loadding;
      block.style.cssText = "\n              width:100px;\n              height:100px;\n              dispaly: block;\n              margin: 0 auto;\n            ";
      form.insertAdjacentElement('afterend', block);
      var formDataa = new FormData(form);
      var json = JSON.stringify(Object.fromEntries(formDataa.entries()));
      (0,_services_services__WEBPACK_IMPORTED_MODULE_2__.postData)('http://localhost:3000/requests', json).then(function (data) {
        console.log(data);
        showmodule(message.succes);
        block.remove();
      }).catch(function () {
        showmodule(message.fail);
      }).finally(function () {
        form.reset();
      });
    });
  }

  function showmodule(message) {
    var prevModule = document.querySelector('.modal__dialog'),
        parentModules = document.querySelector('.modal');
    prevModule.classList.add('hide');
    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('[data-modal]', modalTimerId);
    var newModal = document.createElement('div');
    newModal.classList.add('modal__dialog');
    newModal.innerHTML = "\n        <div class=\"modal__content\">\n        <div class=\"modal__close\" data-close>x</div>\n        <div class=\"modal__title\">".concat(message, "</div>\n        </div>\n        ");
    parentModules.append(newModal);
    setTimeout(function () {
      newModal.remove();
      prevModule.classList.add('show');
      prevModule.classList.remove('hide');
      (0,_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)('[data-modal]');
    }, 4000);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (showModals);

/***/ }),

/***/ "./js/modules/sldie.js":
/*!*****************************!*\
  !*** ./js/modules/sldie.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.regexp.exec.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.string.replace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.dom-collections.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





function slide(_ref) {
  var container = _ref.container,
      slide = _ref.slide,
      next = _ref.next,
      back = _ref.back,
      total = _ref.total,
      curentt = _ref.curentt,
      wrapper = _ref.wrapper,
      field = _ref.field;
  var sliderImg = document.querySelectorAll(slide),
      leftSlide = document.querySelector(back),
      rightSlide = document.querySelector(next),
      numberTotal = document.querySelector(total),
      numberCurent = document.querySelector(curentt),
      slideInner = document.querySelector(field),
      slider = document.querySelector(container),
      slideWrapper = document.querySelector(wrapper),
      width = window.getComputedStyle(slideWrapper).width;
  var index = 1;
  var chenge = 0;
  slideInner.style.width = 100 * sliderImg.length + '%';
  slideInner.style.display = 'flex';
  slideInner.style.transition = '0.8s all ';
  slideWrapper.style.overflow = 'hidden';
  slider.style.position = 'relative';
  var indicator = document.createElement('ol');
  var dots = [];
  indicator.classList.add('carusel');
  indicator.style.cssText = "\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 15;\n    display: flex;\n    justify-content: center;\n    margin-right: 15%;\n    margin-left: 15%;\n    list-style: none;\n    ";

  for (var i = 0; i < sliderImg.length; i++) {
    var dot = document.createElement('div');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = "\n       box-sizing: content-box;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 6px;\n    margin-right: 3px;\n    margin-left: 3px;\n    cursor: pointer;\n    background-color: #fff;\n    background-clip: padding-box;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    opacity: .5;\n    transition: opacity .6s ease;\n      ";

    if (i == 0) {
      dot.style.backgroundColor = 'red';
    }

    indicator.append(dot);
    dots.push(dot);
  }

  slider.append(indicator);
  sliderImg.forEach(function (item) {
    item.style.width = width;
  });

  if (sliderImg.length < 10) {
    numberTotal.textContent = "0".concat(sliderImg.length);
    numberCurent.textContent = "0".concat(index);
  } else if (sliderImg.length > 10) {
    numberCurent.textContent = index;
  }

  rightSlide.addEventListener('click', function () {
    if (chenge == addWidth(width) * (sliderImg.length - 1)) {
      chenge = 0;
    } else {
      chenge += addWidth(width);
    }

    slideInner.style.transform = "translateX(-".concat(chenge, "px)");

    if (index == sliderImg.length) {
      index = 1;
    } else {
      index++;
    }

    lengthTotal();
    addDots();
  });
  leftSlide.addEventListener('click', function () {
    if (chenge == 0) {
      chenge = addWidth(width) * (sliderImg.length - 1);
    } else {
      chenge -= addWidth(width);
    }

    if (index == 1) {
      index = sliderImg.length;
    } else {
      index--;
    }

    slideInner.style.transform = "translateX(-".concat(chenge, "px)");
    lengthTotal();
    addDots();
  });
  dots.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var slideTo = e.target.getAttribute('data-slide-to');
      index = slideTo;
      chenge = addWidth(width) * (slideTo - 1);

      if (sliderImg.length < 10) {
        numberCurent.textContent = "0".concat(index);
      } else {
        numberCurent.textContent = index;
      }

      slideInner.style.transform = "translateX(-".concat(chenge, "px)");
      addDots();
    });
  });

  function addDots() {
    dots.forEach(function (item) {
      item.style.opacity = '.5';
      item.style.backgroundColor = 'white';
    });
    dots[index - 1].style.backgroundColor = 'red';
  }

  function lengthTotal() {
    if (sliderImg.length < 10) {
      numberCurent.textContent = "0".concat(index);
    } else {
      numberCurent.textContent = index;
    }
  }

  function addWidth(w) {
    return +w.replace(/\D/g, '');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (slide);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.slice.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.dom-collections.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




function tabs(tabparents, activaClass, content, tabClick) {
  var tab = document.querySelectorAll(tabClick);
  var tabContent = document.querySelectorAll(content);
  var tabParent = document.querySelector(tabparents);

  function hideTab() {
    tabContent.forEach(function (item) {
      item.style.display = "none";
    });
    tab.forEach(function (tab) {
      tab.classList.remove(activaClass);
    });
  }

  function showTab() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabContent[i].style.display = "block";
    tab[i].classList.add(activaClass);
  }

  hideTab();
  showTab();
  tabParent.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains(tabClick.slice(1))) {
      tab.forEach(function (item, i) {
        if (target == item) {
          hideTab();
          showTab(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(dedlinee, idd) {
  var dedline = dedlinee;

  function gotTimeRenaiming(endTime) {
    var t = new Date(endTime) - new Date(),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor(t / (1000 * 60) % 60),
        seconds = Math.floor(t / 1000 % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0".concat(num);
    } else {
      return num;
    }
  }

  function setClock(selector, endTime) {
    var timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      var t = gotTimeRenaiming(endTime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(idd, dedline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_getitem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getitem */ "./js/modules/getitem.js");
/* harmony import */ var _modules_sldie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sldie */ "./js/modules/sldie.js");
/* harmony import */ var _modules_showmoduls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showmoduls */ "./js/modules/showmoduls.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");










document.addEventListener("DOMContentLoaded", function () {
  var modalTimerId = setTimeout(function () {
    return (0,_modules_modal__WEBPACK_IMPORTED_MODULE_6__.openModal)('[data-modal]', modalTimerId);
  }, 30000);
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabheader__items', 'tabheader__item_active', '.tabcontent', '.tabheader__item');
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.default)("2021-01-29", '.timer');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_2__.default)();
  (0,_modules_getitem__WEBPACK_IMPORTED_MODULE_3__.default)();
  (0,_modules_sldie__WEBPACK_IMPORTED_MODULE_4__.default)({
    container: '.offer__slider',
    slide: '.offer__slide',
    next: '.offer__slider-next',
    back: '.offer__slider-prev',
    total: '#total',
    curentt: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
  (0,_modules_showmoduls__WEBPACK_IMPORTED_MODULE_5__.default)('form', modalTimerId);
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_6__.default)('[data-atribute]', '[data-modal]', modalTimerId);
});

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": function() { return /* binding */ postData; },
/* harmony export */   "getRezsurs": function() { return /* binding */ getRezsurs; }
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.concat.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.object.to-string.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.promise.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var postData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, data) {
    var rest;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              method: "POST",
              headers: {
                'Content-type': 'application/json'
              },
              body: data
            });

          case 2:
            rest = _context.sent;
            _context.next = 5;
            return rest.json();

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getRezsurs = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
    var rest;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(url);

          case 2:
            rest = _context2.sent;

            if (rest.ok) {
              _context2.next = 5;
              break;
            }

            throw new Error("not feach ".concat(utl, " and status : ").concat(url.status));

          case 5:
            _context2.next = 7;
            return rest.json();

          case 7:
            return _context2.abrupt("return", _context2.sent);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getRezsurs(_x3) {
    return _ref2.apply(this, arguments);
  };
}();




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map