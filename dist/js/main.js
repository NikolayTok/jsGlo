/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 may 2022');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(100);\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    formId: 'form1',\n    someElem: [\n        {\n            type: 'block',\n            id: 'total'\n        }\n    ]\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    formId: 'form2',\n    someElem: [\n        {\n            type: 'block',\n            id: 'total'\n        }\n    ]\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    formId: 'form3',\n    someElem: [\n        {\n            type: 'block',\n            id: 'total'\n        }\n    ]\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price) => {\n    const calcPanel = document.querySelector('.calc-block');\n    const calcType = document.querySelector('.calc-type');\n    const calcSquare = document.querySelector('.calc-square');\n    const calcCount = document.querySelector('.calc-count');\n    const calcDay = document.querySelector('.calc-day');\n    const total = document.getElementById('total');\n    const inputCalc = calcPanel.querySelectorAll('input');\n\n    inputCalc.forEach((item) => {\n        item.addEventListener('input', (e) => {\n            if (!/[^\\d]/g.test(e.target.value)) {\n                console.log('молодец');\n            } else {\n                e.target.value = '';\n                alert('введите число');\n            }\n        });\n    });\n\n    const countCalc = () => {\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n        const calcSquareValue = +calcSquare.value;\n\n        let totalValue = 0;\n        let calcCountValue = 1;\n        let calcDayValue = 1;\n\n        if (calcCount.value > 1) {\n            calcCountValue = calcCountValue + (+calcCount.value / 10);\n        }\n\n        if (calcDay.value && calcDay.value < 5) {\n            calcDayValue = 2;\n        } else if (calcDay.value && calcDay.value < 10) {\n            calcDayValue = 1.5;\n        }\n\n        if (calcType.value && calcSquare.value) {\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\n\n        }\n        total.textContent = totalValue;\n    };\n\n    calcPanel.addEventListener('input', (e) => {\n        countCalc();\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu');\n    const menu = document.querySelector('menu');\n    const menuItems = menu.querySelectorAll('ul>li>a');\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu');\n    };\n    \n    menuBtn.addEventListener('click', handleMenu);\n\n    menu.addEventListener('click', (e) => {\n        if(e.target.closest('.close-btn') || e.target.tagName == 'A'){\n            handleMenu();\n        }\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const modalBtn = document.querySelectorAll('.popup-btn');\n    const modal = document.querySelector('.popup');\n    const modalClose = document.querySelector('.popup-close');\n\n    modalBtn.forEach((item) => {\n        item.addEventListener('click', () => {\n            modal.style = 'display: block';\n        });\n    });\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n            modal.style = 'display: none';\n        }\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\n    const form = document.getElementById(formId);\n    const inputName = form.querySelector('.form-name');\n    const inputEmail = form.querySelector('.form-email');\n    const inputPhone = form.querySelector('.form-phone')\n    const statusBlock = document.createElement('div');\n    const loadText = 'Загрузка...';\n    const errorText = 'Ошибка...';\n    const successText = 'Спасибо, наш менеджер с вами свяжется!'\n\n    const validate = (list) => {\n        let success = true;\n\n        if (/[^0-9()-]/.test(inputPhone.value)) {\n            success = false;\n        }\n        if (/[^а-я ]/g.test(inputName.value)) {\n            success = false;\n        }\n        if (/^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$/.test(inputEmail.value)) {\n            success = false;\n        }\n\n        return success;\n    }\n\n    const sendData = (data) => {\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\n            method: 'POST',\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-type\": \"multipart/form-data\"\n            }\n        }).then(response => response.json())\n    }\n\n    const submitForm = () => {\n        const formElements = form.querySelectorAll('input');\n        const formData = new FormData(form);\n        const formBody = {};\n\n        statusBlock.textContent = loadText;\n        form.append(statusBlock);\n\n        formData.forEach((val, key) => {\n            formBody[key] = val\n        });\n\n        someElem.forEach((elem) => {\n            const element = document.getElementById(elem.id);\n\n            console.log(element)\n            if (elem.type === 'block') {\n                formBody[elem.id] = element.textContent;\n            } else if (elem.type === 'input') {\n                formBody[elem.id] = element.value;\n            }\n        })\n\n        if (validate(formElements)) {\n            sendData(formBody)\n                .then(data => {\n                    statusBlock.textContent = successText;\n                    formElements.forEach(input => {\n                        input.value = ''\n                    })\n                })\n                .catch(error => {\n                    statusBlock.textContent = errorText;\n                })\n        } else {\n            formElements.forEach(input => {\n                input.value = ''\n            })\n            statusBlock.textContent = 'данныe не валидны!!!';\n        }\n    }\n\n    try {\n        if (!form) {\n            throw new Error('Верните форму на место, пожалуйста!!!!!')\n        }\n        form.addEventListener('submit', (event) => {\n            event.preventDefault();\n\n            submitForm();\n        })\n    } catch (error) {\n        consol.log(error.message)\n    }\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const sliderBlock = document.querySelector('.portfolio-content');\n    const slides = document.querySelectorAll('.portfolio-item');\n    const dots = document.querySelectorAll('.dot');\n\n    let interval;\n    let currentSlide = 0;\n\n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass);\n    };\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass);\n    };\n\n    const autoSlide = () => {\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\n        prevSlide(dots, currentSlide, 'dot-active');\n        currentSlide++;\n\n        if (currentSlide >= slides.length) {\n            currentSlide = 0;\n        }\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\n        nextSlide(dots, currentSlide, 'dot-active');\n    };\n\n    const startSlide = (timer = 1500) => {\n        interval = setInterval(autoSlide, timer);\n    };\n\n    const stopSlide = () => {\n        clearInterval(interval);\n    };\n\n    sliderBlock.addEventListener('click', (e) => {\n        e.preventDefault();\n\n        if (!e.target.matches('.dot, .portfolio-btn')) {\n            return;\n        }\n\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\n        prevSlide(dots, currentSlide, 'dot-active');\n\n        if (e.target.matches('#arrow-right')) {\n            currentSlide++;\n        } else if (e.target.matches('#arrow-left')) {\n            currentSlide--;\n        } else if (e.target.classList.contains('dot')) {\n            dots.forEach((dot, index) => {\n                if (e.target == dot) {\n                    currentSlide = index;\n                }\n            });\n        }\n\n        if (currentSlide >= slides.length) {\n            currentSlide = 0;\n        }\n\n        if (currentSlide < 0) {\n            currentSlide = slides.length - 1;\n        }\n\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\n        nextSlide(dots, currentSlide, 'dot-active');\n    });\n\n    sliderBlock.addEventListener('mouseenter', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            stopSlide();\n        }\n    }, true);//чтоб ивент видел дочерние елементы\n\n    sliderBlock.addEventListener('mouseleave', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            startSlide(2000);\n        }\n    }, true);\n\n    startSlide(2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    const tabContent = document.querySelectorAll('.service-tab');\n    const tabPanel = document.querySelector('.service-header');\n    const tabBtn = document.querySelectorAll('.service-header-tab');\n\n    tabPanel.addEventListener('click', (e) => {\n        if (e.target.closest('.service-header-tab')) {\n            const target = e.target.closest('.service-header-tab');\n            tabBtn.forEach((tab, index) => {\n                if (tab === target) {\n                    tab.classList.add('active');\n                    tabContent[index].classList.remove('d-none');\n                } else {\n                    tab.classList.remove('active');\n                    tabContent[index].classList.add('d-none');\n                }\n            });\n        }\n    });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSecond = document.getElementById('timer-seconds');\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let hours = Math.floor((timeRemaining / 60 / 60));\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n        const getZero = (num) => {\n            if (num == 0) {\n                // console.log(num + '0')\n                return num + '0';\n            } else if (num < 10) {\n                return '0' + num;\n            } else {\n                return num;\n            }\n        };\n\n        hours = getZero(hours);\n        minutes = getZero(minutes);\n        seconds = getZero(seconds);\n\n        return { timeRemaining, hours, minutes, seconds };\n    };\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining();\n\n        if (getTime.hours > 0) {\n            timerHours.textContent = getTime.hours;\n        } else {\n            timerHours.textContent = 0;\n        }\n        if (getTime.minutes > 0) {\n            timerMinutes.textContent = getTime.minutes;\n        } else {\n            timerMinutes.textContent = 0;\n        }\n        if (getTime.seconds > 0) {\n            timerSecond.textContent = getTime.seconds;\n        } else {\n            timerSecond.textContent = 0;\n        }\n\n        if (getTime.timeRemaining > 0) {\n            setTimeout(updateClock, 1000);\n        }\n    };\n\n    updateClock();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;