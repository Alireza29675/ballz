/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Box = __webpack_require__(3);

var _Box2 = _interopRequireDefault(_Box);

var _Ball = __webpack_require__(2);

var _Ball2 = _interopRequireDefault(_Ball);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var options = {
    canvas: {
        background: '#333'
    },
    ground: {
        height: 50,
        color: '#666'
    },
    balls: {
        radius: 5,
        color: 'white'
    }
};

var Game = function () {
    function Game(query) {
        _classCallCheck(this, Game);

        // Options setup
        this.options = options;
        // Canvas setup
        this.canvas = document.querySelector(query);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.background = this.options.canvas.background;
        // Dynamic variables setup
        this.initalizeDynamicVariables
        // Boxes and Balls arrays
        ();this.boxes = [];
        this.balls = [];
    }

    _createClass(Game, [{
        key: 'initalizeDynamicVariables',
        value: function initalizeDynamicVariables() {
            // Game size
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            // Ballz area size
            this.lowestX = this.options.balls.radius;
            this.highestX = this.width - this.options.balls.radius;
            this.lowestY = this.height - this.options.ground.height - this.options.balls.radius;
            this.highestY = this.options.balls.radius;
        }

        // Flow Controls

    }, {
        key: 'start',
        value: function start() {
            this.renderer = framesFlow.render(this.render.bind(this));
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.renderer.pause();
        }
    }, {
        key: 'play',
        value: function play() {
            this.renderer.play();
        }

        // Game Methods

    }, {
        key: 'shootBall',
        value: function shootBall(startX, angelVector) {
            this.balls.push(new _Ball2.default(this, startX, angelVector));
        }

        // Render Methods

    }, {
        key: 'render',
        value: function render() {
            this.clear();
            this.drawGround();
            this.drawBallsAndBoxes();
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
    }, {
        key: 'drawGround',
        value: function drawGround() {
            this.ctx.fillStyle = this.options.ground.color;
            this.ctx.fillRect(0, this.height - this.options.ground.height, this.width, this.height);
        }
    }, {
        key: 'drawBallsAndBoxes',
        value: function drawBallsAndBoxes() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.boxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var box = _step.value;
                    box.render();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.balls[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var ball = _step2.value;
                    ball.render();
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FramesFlow__ = __webpack_require__(5);


// defining framesFlow as a global object
if (!(window.framesFlow instanceof __WEBPACK_IMPORTED_MODULE_0__components_FramesFlow__["a" /* default */])) { // if it didn't define before
    window.framesFlow = new __WEBPACK_IMPORTED_MODULE_0__components_FramesFlow__["a" /* default */]()
}

// export
/* harmony default export */ __webpack_exports__["default"] = (window.framesFlow);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
    function Ball(game, startX, velocityVector) {
        _classCallCheck(this, Ball);

        this.game = game;
        this.ctx = this.game.ctx;
        this.velocityVector = velocityVector;
        this.x = startX;
        this.y = this.game.lowestY;
    }

    _createClass(Ball, [{
        key: "reflectX",
        value: function reflectX() {
            this.velocityVector[0] *= -1;
        }
    }, {
        key: "reflectY",
        value: function reflectY() {
            this.velocityVector[1] *= -1;
        }
    }, {
        key: "computeCollisions",
        value: function computeCollisions() {
            if (this.x >= this.game.highestX) {
                this.x = this.game.highestX;
                this.reflectX();
            }
            if (this.x <= this.game.lowestX) {
                this.x = this.game.lowestX;
                this.reflectX();
            }
            if (this.y <= this.game.highestY) {
                this.y = this.game.highestY;
                this.reflectY();
            }
        }

        // Moves and Animation

    }, {
        key: "render",
        value: function render() {
            this.changes();
            this.draw();
        }
    }, {
        key: "changes",
        value: function changes() {
            this.computeCollisions();
            this.x += this.velocityVector[0];
            this.y += this.velocityVector[1];
        }
    }, {
        key: "draw",
        value: function draw() {
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.game.options.balls.radius, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = this.game.options.balls.color;
            this.ctx.fill();
        }
    }]);

    return Ball;
}();

exports.default = Ball;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Box = function () {
    function Box(ctx) {
        _classCallCheck(this, Box);

        this.ctx = ctx;
    }

    _createClass(Box, [{
        key: "render",
        value: function render() {}
    }]);

    return Box;
}();

exports.default = Box;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _Game = __webpack_require__(0);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ballz = new _Game2.default('#playground');

window.ballz = ballz;

ballz.start();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RendererArray__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Renderer__ = __webpack_require__(6);



// Compatibility for all browsers - Paul Irish version
window.requestAnimFrame = (function () {
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60)
          }
})()

// FramesFlow
class FramesFlow {
    constructor () {
        this.frames = 0
        this._fps = 30
        this.options = {
            minimumAcceptableFPS: 30
        }
        this.renderers = new __WEBPACK_IMPORTED_MODULE_0__RendererArray__["a" /* default */]
        this.performance = {
            logs: new Array(100),
            logsPointer: 0,
            lastTimeStamp: undefined,
            lastFrameFPS: 30,
            ratio: 1,
            status: 0,
            average: {
                fps: 30,
                ratio: 1,
                status: 0
            }
        }
        this.requestLoop()
    }
    get (id) {
        return this.renderers.get(id)
    }
    getAll () {
        return this.renderers
    }
    getAllByClass (className) {
        return this.renderers.filter(renderer => renderer.class == className)
    }
    removeRendererById (id) {
        this.renderers.remove(id)
    }
    checkValidationOfFrameRate (rate, isGlobalCheck = false) {
        let error = null
        const pointer = isGlobalCheck ? 'any' : 'this'
        if (rate < 0) error = 'FPS must not be a negative number!'
        else if (rate < 30 && rate > 0 && (30 / rate) % 1 !== 0) error = 'if FPS is less than 30fps, it have to be like this: (30 / FPS) should be integer'
        else if (rate > 30 && rate % 30 !== 0) error = 'if FPS is more than 30fps, it have to be like this: (FPS % 30 == 0)'
        if (error !== null) throw `can't set ${rate}fps for this renderer. REASON: <${error}>`
    }
    get fps () {
        return this._fps
    }
    set fps (newFPS) {
        try {
            this.checkValidationOfFrameRate(rate, true)
            this._fps = newFPS
        } catch (e) {
            console.error(e)
        }
    }
    playAll () {
        for (let renderer of this.getAllRenderers()) renderer.play()
    }
    pauseAll () {
        for (let renderer of this.getAllRenderers()) renderer.pause()
    }
    render (className, func) {
        if (typeof className == 'function') {
            func = className
            className = ''
        }
        const renderer = new __WEBPACK_IMPORTED_MODULE_1__Renderer__["a" /* default */](this, {
            id: this.renderers.length,
            class: className
        }, func)
        this.renderers.push(renderer)
        return renderer
    }
    onLag (minimumFPS, callback) {
        if (typeof minimumFPS == 'function') callback = minimumFPS
        else this.options.minimumAcceptableFPS = minimumFPS
        this.onLagCallback = callback
    }
    registerPerformanceLog (renderTime) {
        // Calculating fps
        this.performance.lastFrameFPS = 1000 / renderTime
        // Calculating lags
        if (this.performance.lastFrameFPS < this.options.minimumAcceptableFPS) if (typeof this.onLagCallback === 'function') this.onLagCallback(this.performance.lastFrameFPS)
        // logging
        this.performance.logs[this.performance.logsPointer] = this.performance.lastFrameFPS
        this.performance.logsPointer = (this.performance.logsPointer + 1) % 100
        // analyzing logs
        this.analyzePerformance()
    }
    analyzePerformance () {
        const allData = this.performance.logs.filter(data => typeof data == 'number')
        // Calculating average of data
        let FPSSum = 0
        for (let data of allData) FPSSum += data
        this.performance.average.fps = FPSSum / allData.length
        // Calculating performance percentage
        this.performance.ratio = this.performance.lastFrameFPS / 30
        this.performance.average.ratio = this.performance.average.fps / 30
        // defining status
        this.performance.status = this._getStatusOfFPS(this.performance.lastFrameFPS)
        this.performance.average.status = this._getStatusOfFPS(this.performance.average.fps)
    }
    _getStatusOfFPS (fps) {
        const ratio = fps / this.fps
        let status = -3 // WORST
        if (ratio > 0.3) status = -2 // BAD
        if (ratio > 0.6) status = -1 // NOT BAD
        if (ratio > 0.9) status = 0 // OK
        if (ratio > 1.3) status = 1 // GOOD
        if (ratio > 1.6) status = 2 // EXCELLENT
        if (ratio > 2) status = 3 // BEST
        return status
    }
    requestLoop () {
        requestAnimFrame(this.requestLoop.bind(this))
        this.frames++
        this.renderers.each(renderer => renderer.render())
        if (this.performance.lastTimeStamp !== undefined) this.registerPerformanceLog(Date.now() - this.performance.lastTimeStamp)
        this.performance.lastTimeStamp = Date.now()
    }
}

/* harmony default export */ __webpack_exports__["a"] = (FramesFlow);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Renderer {
    constructor (framesFlow, options, func) {
        this.id = options.id
        this.class = options.class || ''
        this.props = {
            isDebuging: false
        }
        this.framesFlow = framesFlow
        this._fps = undefined
        this.func = func
        this.frames = 0
        this.shouldGoNext = false
        this.render()
    }
    // Render next frame
    next () {
        this.shouldGoNext = true
    }
    remove () {
        this.framesFlow.removeRendererById(this.id)
    }
    pause () {
        this.props.isDebuging = true
    }
    play () {
        this.props.isDebuging = false
    }
    set fps (newFPS) {
        if (newFPS == undefined) return this._fps = newFPS
        try {
            this.framesFlow.checkValidationOfFrameRate(newFPS)
            this._fps = newFPS
        } catch (e) {
            console.error(e)
        }
    }
    get fps () {
        return this._fps || this.framesFlow.fps
    }
    shouldRenderThisFrame () {
        // all conditions to pause or play rendering
        const conditions = [
            !this.props.isDebuging,
            this.framesFlow.frames % (30 / Math.min(this.fps, 30)) == 0,
        ]
        let ret = true
        for (let cond of conditions) ret = ret && cond
        return ret
    }
    getFrameObjectToReturn () {
        return {
            renderer: this,
            index: this.frames,
            fps: this.fps,
            performance: {
                fps: this.framesFlow.performance.lastFrameFPS,
                ratio: this.framesFlow.performance.ratio,
                status: this.framesFlow.performance.status,
                average: this.framesFlow.performance.average
            }
        }
    }
    render () {
        if (this.shouldRenderThisFrame() || this.shouldGoNext) {
            let iteration = 0
            if (this.fps > 30) iteration = (Math.max(this.fps, 30) / 30)
            else iteration = 30 / this.fps
            for (let i = 0; i < iteration; i++) {
                this.frames++
                this.shouldGoNext = false
                this.func(this.getFrameObjectToReturn())
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Renderer);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class RendererArray {
    constructor(...args) {
        if (typeof args[0] === 'array') this.arr = args[0]
        else this.arr = new Array(...args)
    }
    get (i) {
        return this.arr[i]
    }
    set (i, val) {
        this.arr[i] = val
        return this
    }
    push (val) {
        this.arr.push(val)
        return this
    }
    remove (i) {
        this.arr[i] = undefined
        this.arr.splice(i, 1)
        return this
    }
    filter (condFunc) {
        return new RendererArray(this.arr.filter(condFunc))
    }
    each (cb) {
        for (let item of this.arr) cb(item)
    }
    get length () {
        return this.arr.length
    }
    toArray () {
        return this.arr
    }
    set fps (newFPS) {
        this.each(renderer => renderer.fps = newFPS)
    }
    remove () {
        this.each(renderer => renderer.remove())
    }
    next () {
        this.each(renderer => renderer.next())
    }
    pause () {
        this.each(renderer => renderer.pause())
    }
    play () {
        this.each(renderer => renderer.play())
    }
}

/* harmony default export */ __webpack_exports__["a"] = (RendererArray);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGM5MzQ2MTUyYjhjYTIyNWU2ZWMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9HYW1lLmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9CYWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9GcmFtZXNGbG93LmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZyYW1lc2Zsb3cvc3JjL2NvbXBvbmVudHMvUmVuZGVyZXJBcnJheS5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwiY2FudmFzIiwiYmFja2dyb3VuZCIsImdyb3VuZCIsImhlaWdodCIsImNvbG9yIiwiYmFsbHMiLCJyYWRpdXMiLCJHYW1lIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3R5bGUiLCJpbml0YWxpemVEeW5hbWljVmFyaWFibGVzIiwiYm94ZXMiLCJ3aWR0aCIsImxvd2VzdFgiLCJoaWdoZXN0WCIsImxvd2VzdFkiLCJoaWdoZXN0WSIsInJlbmRlcmVyIiwiZnJhbWVzRmxvdyIsInJlbmRlciIsImJpbmQiLCJwYXVzZSIsInBsYXkiLCJzdGFydFgiLCJhbmdlbFZlY3RvciIsInB1c2giLCJjbGVhciIsImRyYXdHcm91bmQiLCJkcmF3QmFsbHNBbmRCb3hlcyIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYm94IiwiYmFsbCIsIkJhbGwiLCJnYW1lIiwidmVsb2NpdHlWZWN0b3IiLCJ4IiwieSIsInJlZmxlY3RYIiwicmVmbGVjdFkiLCJjaGFuZ2VzIiwiZHJhdyIsImNvbXB1dGVDb2xsaXNpb25zIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsIkJveCIsImJhbGx6Iiwid2luZG93Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVU7QUFDWkMsWUFBUTtBQUNKQyxvQkFBWTtBQURSLEtBREk7QUFJWkMsWUFBUTtBQUNKQyxnQkFBUSxFQURKO0FBRUpDLGVBQU87QUFGSCxLQUpJO0FBUVpDLFdBQU87QUFDSEMsZ0JBQVEsQ0FETDtBQUVIRixlQUFPO0FBRko7QUFSSyxDQUFoQjs7SUFjTUcsSTtBQUNGLGtCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQ2hCO0FBQ0EsYUFBS1QsT0FBTCxHQUFlQSxPQUFmO0FBQ0E7QUFDQSxhQUFLQyxNQUFMLEdBQWNTLFNBQVNDLGFBQVQsQ0FBdUJGLEtBQXZCLENBQWQ7QUFDQSxhQUFLRyxHQUFMLEdBQVcsS0FBS1gsTUFBTCxDQUFZWSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxhQUFLWixNQUFMLENBQVlhLEtBQVosQ0FBa0JaLFVBQWxCLEdBQStCLEtBQUtGLE9BQUwsQ0FBYUMsTUFBYixDQUFvQkMsVUFBbkQ7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUU7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFOzs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFIiwiZmlsZSI6Ii4vcHVibGljL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGM5MzQ2MTUyYjhjYTIyNWU2ZWMiLCJpbXBvcnQgQm94IGZyb20gJy4vQm94J1xyXG5pbXBvcnQgQmFsbCBmcm9tICcuL0JhbGwnXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgY2FudmFzOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJyMzMzMnXHJcbiAgICB9LFxyXG4gICAgZ3JvdW5kOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgICBjb2xvcjogJyM2NjYnXHJcbiAgICB9LFxyXG4gICAgYmFsbHM6IHtcclxuICAgICAgICByYWRpdXM6IDUsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZSdcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICAvLyBPcHRpb25zIHNldHVwXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xyXG4gICAgICAgIC8vIENhbnZhcyBzZXR1cFxyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSlcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5vcHRpb25zLmNhbnZhcy5iYWNrZ3JvdW5kXHJcbiAgICAgICAgLy8gRHluYW1pYyB2YXJpYWJsZXMgc2V0dXBcclxuICAgICAgICB0aGlzLmluaXRhbGl6ZUR5bmFtaWNWYXJpYWJsZXMoKVxyXG4gICAgICAgIC8vIEJveGVzIGFuZCBCYWxscyBhcnJheXNcclxuICAgICAgICB0aGlzLmJveGVzID0gW11cclxuICAgICAgICB0aGlzLmJhbGxzID0gW11cclxuICAgIH1cclxuICAgIGluaXRhbGl6ZUR5bmFtaWNWYXJpYWJsZXMgKCkge1xyXG4gICAgICAgIC8vIEdhbWUgc2l6ZVxyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0XHJcbiAgICAgICAgLy8gQmFsbHogYXJlYSBzaXplXHJcbiAgICAgICAgdGhpcy5sb3dlc3RYID0gdGhpcy5vcHRpb25zLmJhbGxzLnJhZGl1c1xyXG4gICAgICAgIHRoaXMuaGlnaGVzdFggPSB0aGlzLndpZHRoIC0gdGhpcy5vcHRpb25zLmJhbGxzLnJhZGl1c1xyXG4gICAgICAgIHRoaXMubG93ZXN0WSA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5vcHRpb25zLmdyb3VuZC5oZWlnaHQgLSB0aGlzLm9wdGlvbnMuYmFsbHMucmFkaXVzXHJcbiAgICAgICAgdGhpcy5oaWdoZXN0WSA9IHRoaXMub3B0aW9ucy5iYWxscy5yYWRpdXNcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRmxvdyBDb250cm9sc1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBmcmFtZXNGbG93LnJlbmRlcih0aGlzLnJlbmRlci5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgcGF1c2UgKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucGF1c2UoKVxyXG4gICAgfVxyXG4gICAgcGxheSAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5wbGF5KClcclxuICAgIH1cclxuXHJcbiAgICAvLyBHYW1lIE1ldGhvZHNcclxuICAgIHNob290QmFsbCAoc3RhcnRYLCBhbmdlbFZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuYmFsbHMucHVzaChuZXcgQmFsbCh0aGlzLCBzdGFydFgsIGFuZ2VsVmVjdG9yKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW5kZXIgTWV0aG9kc1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKClcclxuICAgICAgICB0aGlzLmRyYXdHcm91bmQoKVxyXG4gICAgICAgIHRoaXMuZHJhd0JhbGxzQW5kQm94ZXMoKVxyXG4gICAgfVxyXG4gICAgY2xlYXIgKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgIH1cclxuICAgIGRyYXdHcm91bmQgKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5ncm91bmQuY29sb3JcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCB0aGlzLmhlaWdodCAtIHRoaXMub3B0aW9ucy5ncm91bmQuaGVpZ2h0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgIH1cclxuICAgIGRyYXdCYWxsc0FuZEJveGVzICgpIHtcclxuICAgICAgICBmb3IgKGxldCBib3ggb2YgdGhpcy5ib3hlcykgYm94LnJlbmRlcigpXHJcbiAgICAgICAgZm9yIChsZXQgYmFsbCBvZiB0aGlzLmJhbGxzKSBiYWxsLnJlbmRlcigpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc3JjL0dhbWUuanMiLCJpbXBvcnQgRnJhbWVzRmxvdyBmcm9tICcuL2NvbXBvbmVudHMvRnJhbWVzRmxvdydcblxuLy8gZGVmaW5pbmcgZnJhbWVzRmxvdyBhcyBhIGdsb2JhbCBvYmplY3RcbmlmICghKHdpbmRvdy5mcmFtZXNGbG93IGluc3RhbmNlb2YgRnJhbWVzRmxvdykpIHsgLy8gaWYgaXQgZGlkbid0IGRlZmluZSBiZWZvcmVcbiAgICB3aW5kb3cuZnJhbWVzRmxvdyA9IG5ldyBGcmFtZXNGbG93KClcbn1cblxuLy8gZXhwb3J0XG5leHBvcnQgZGVmYXVsdCB3aW5kb3cuZnJhbWVzRmxvd1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mcmFtZXNmbG93L3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBCYWxsIHtcclxuICAgIGNvbnN0cnVjdG9yIChnYW1lLCBzdGFydFgsIHZlbG9jaXR5VmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5nYW1lLmN0eFxyXG4gICAgICAgIHRoaXMudmVsb2NpdHlWZWN0b3IgPSB2ZWxvY2l0eVZlY3RvclxyXG4gICAgICAgIHRoaXMueCA9IHN0YXJ0WFxyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuZ2FtZS5sb3dlc3RZXHJcbiAgICB9XHJcbiAgICByZWZsZWN0WCAoKSB7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eVZlY3RvclswXSAqPSAtMVxyXG4gICAgfVxyXG4gICAgcmVmbGVjdFkgKCkge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHlWZWN0b3JbMV0gKj0gLTFcclxuICAgIH1cclxuICAgIGNvbXB1dGVDb2xsaXNpb25zICgpIHtcclxuICAgICAgICBpZiAodGhpcy54ID49IHRoaXMuZ2FtZS5oaWdoZXN0WCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUuaGlnaGVzdFhcclxuICAgICAgICAgICAgdGhpcy5yZWZsZWN0WCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnggPD0gdGhpcy5nYW1lLmxvd2VzdFgpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLmxvd2VzdFhcclxuICAgICAgICAgICAgdGhpcy5yZWZsZWN0WCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnkgPD0gdGhpcy5nYW1lLmhpZ2hlc3RZKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZ2FtZS5oaWdoZXN0WVxyXG4gICAgICAgICAgICB0aGlzLnJlZmxlY3RZKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW92ZXMgYW5kIEFuaW1hdGlvblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZXMoKVxyXG4gICAgICAgIHRoaXMuZHJhdygpXHJcbiAgICB9XHJcbiAgICBjaGFuZ2VzICgpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGVDb2xsaXNpb25zKClcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eVZlY3RvclswXVxyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5VmVjdG9yWzFdXHJcbiAgICB9XHJcbiAgICBkcmF3ICgpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5nYW1lLm9wdGlvbnMuYmFsbHMucmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5nYW1lLm9wdGlvbnMuYmFsbHMuY29sb3JcclxuICAgICAgICB0aGlzLmN0eC5maWxsKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zcmMvQmFsbC5qcyIsImNsYXNzIEJveCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NyYy9Cb3guanMiLCJpbXBvcnQgJ2ZyYW1lc2Zsb3cnXHJcbmltcG9ydCBHYW1lIGZyb20gJy4vYXBwL3NyYy9HYW1lJ1xyXG5cclxuY29uc3QgYmFsbHogPSBuZXcgR2FtZSgnI3BsYXlncm91bmQnKVxyXG5cclxud2luZG93LmJhbGx6ID0gYmFsbHpcclxuXHJcbmJhbGx6LnN0YXJ0KClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImltcG9ydCBSZW5kZXJlckFycmF5IGZyb20gJy4vUmVuZGVyZXJBcnJheSdcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyJ1xuXG4vLyBDb21wYXRpYmlsaXR5IGZvciBhbGwgYnJvd3NlcnMgLSBQYXVsIElyaXNoIHZlcnNpb25cbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XG4gICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKXtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApXG4gICAgICAgICAgfVxufSkoKVxuXG4vLyBGcmFtZXNGbG93XG5jbGFzcyBGcmFtZXNGbG93IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZnJhbWVzID0gMFxuICAgICAgICB0aGlzLl9mcHMgPSAzMFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW5pbXVtQWNjZXB0YWJsZUZQUzogMzBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcmVycyA9IG5ldyBSZW5kZXJlckFycmF5XG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UgPSB7XG4gICAgICAgICAgICBsb2dzOiBuZXcgQXJyYXkoMTAwKSxcbiAgICAgICAgICAgIGxvZ3NQb2ludGVyOiAwLFxuICAgICAgICAgICAgbGFzdFRpbWVTdGFtcDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGFzdEZyYW1lRlBTOiAzMCxcbiAgICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICAgICAgYXZlcmFnZToge1xuICAgICAgICAgICAgICAgIGZwczogMzAsXG4gICAgICAgICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXF1ZXN0TG9vcCgpXG4gICAgfVxuICAgIGdldCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmdldChpZClcbiAgICB9XG4gICAgZ2V0QWxsICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzXG4gICAgfVxuICAgIGdldEFsbEJ5Q2xhc3MgKGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnMuZmlsdGVyKHJlbmRlcmVyID0+IHJlbmRlcmVyLmNsYXNzID09IGNsYXNzTmFtZSlcbiAgICB9XG4gICAgcmVtb3ZlUmVuZGVyZXJCeUlkIChpZCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVycy5yZW1vdmUoaWQpXG4gICAgfVxuICAgIGNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlIChyYXRlLCBpc0dsb2JhbENoZWNrID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGVycm9yID0gbnVsbFxuICAgICAgICBjb25zdCBwb2ludGVyID0gaXNHbG9iYWxDaGVjayA/ICdhbnknIDogJ3RoaXMnXG4gICAgICAgIGlmIChyYXRlIDwgMCkgZXJyb3IgPSAnRlBTIG11c3Qgbm90IGJlIGEgbmVnYXRpdmUgbnVtYmVyISdcbiAgICAgICAgZWxzZSBpZiAocmF0ZSA8IDMwICYmIHJhdGUgPiAwICYmICgzMCAvIHJhdGUpICUgMSAhPT0gMCkgZXJyb3IgPSAnaWYgRlBTIGlzIGxlc3MgdGhhbiAzMGZwcywgaXQgaGF2ZSB0byBiZSBsaWtlIHRoaXM6ICgzMCAvIEZQUykgc2hvdWxkIGJlIGludGVnZXInXG4gICAgICAgIGVsc2UgaWYgKHJhdGUgPiAzMCAmJiByYXRlICUgMzAgIT09IDApIGVycm9yID0gJ2lmIEZQUyBpcyBtb3JlIHRoYW4gMzBmcHMsIGl0IGhhdmUgdG8gYmUgbGlrZSB0aGlzOiAoRlBTICUgMzAgPT0gMCknXG4gICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkgdGhyb3cgYGNhbid0IHNldCAke3JhdGV9ZnBzIGZvciB0aGlzIHJlbmRlcmVyLiBSRUFTT046IDwke2Vycm9yfT5gXG4gICAgfVxuICAgIGdldCBmcHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnBzXG4gICAgfVxuICAgIHNldCBmcHMgKG5ld0ZQUykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShyYXRlLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGF5QWxsICgpIHtcbiAgICAgICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5nZXRBbGxSZW5kZXJlcnMoKSkgcmVuZGVyZXIucGxheSgpXG4gICAgfVxuICAgIHBhdXNlQWxsICgpIHtcbiAgICAgICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5nZXRBbGxSZW5kZXJlcnMoKSkgcmVuZGVyZXIucGF1c2UoKVxuICAgIH1cbiAgICByZW5kZXIgKGNsYXNzTmFtZSwgZnVuYykge1xuICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmdW5jID0gY2xhc3NOYW1lXG4gICAgICAgICAgICBjbGFzc05hbWUgPSAnJ1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMsIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnJlbmRlcmVycy5sZW5ndGgsXG4gICAgICAgICAgICBjbGFzczogY2xhc3NOYW1lXG4gICAgICAgIH0sIGZ1bmMpXG4gICAgICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpXG4gICAgICAgIHJldHVybiByZW5kZXJlclxuICAgIH1cbiAgICBvbkxhZyAobWluaW11bUZQUywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtaW5pbXVtRlBTID09ICdmdW5jdGlvbicpIGNhbGxiYWNrID0gbWluaW11bUZQU1xuICAgICAgICBlbHNlIHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUyA9IG1pbmltdW1GUFNcbiAgICAgICAgdGhpcy5vbkxhZ0NhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB9XG4gICAgcmVnaXN0ZXJQZXJmb3JtYW5jZUxvZyAocmVuZGVyVGltZSkge1xuICAgICAgICAvLyBDYWxjdWxhdGluZyBmcHNcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPSAxMDAwIC8gcmVuZGVyVGltZVxuICAgICAgICAvLyBDYWxjdWxhdGluZyBsYWdzXG4gICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyA8IHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUykgaWYgKHR5cGVvZiB0aGlzLm9uTGFnQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHRoaXMub25MYWdDYWxsYmFjayh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUylcbiAgICAgICAgLy8gbG9nZ2luZ1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NbdGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlcl0gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQU1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyID0gKHRoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXIgKyAxKSAlIDEwMFxuICAgICAgICAvLyBhbmFseXppbmcgbG9nc1xuICAgICAgICB0aGlzLmFuYWx5emVQZXJmb3JtYW5jZSgpXG4gICAgfVxuICAgIGFuYWx5emVQZXJmb3JtYW5jZSAoKSB7XG4gICAgICAgIGNvbnN0IGFsbERhdGEgPSB0aGlzLnBlcmZvcm1hbmNlLmxvZ3MuZmlsdGVyKGRhdGEgPT4gdHlwZW9mIGRhdGEgPT0gJ251bWJlcicpXG4gICAgICAgIC8vIENhbGN1bGF0aW5nIGF2ZXJhZ2Ugb2YgZGF0YVxuICAgICAgICBsZXQgRlBTU3VtID0gMFxuICAgICAgICBmb3IgKGxldCBkYXRhIG9mIGFsbERhdGEpIEZQU1N1bSArPSBkYXRhXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgPSBGUFNTdW0gLyBhbGxEYXRhLmxlbmd0aFxuICAgICAgICAvLyBDYWxjdWxhdGluZyBwZXJmb3JtYW5jZSBwZXJjZW50YWdlXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UucmF0aW8gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyAvIDMwXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5yYXRpbyA9IHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgLyAzMFxuICAgICAgICAvLyBkZWZpbmluZyBzdGF0dXNcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUylcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLnN0YXR1cyA9IHRoaXMuX2dldFN0YXR1c09mRlBTKHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMpXG4gICAgfVxuICAgIF9nZXRTdGF0dXNPZkZQUyAoZnBzKSB7XG4gICAgICAgIGNvbnN0IHJhdGlvID0gZnBzIC8gdGhpcy5mcHNcbiAgICAgICAgbGV0IHN0YXR1cyA9IC0zIC8vIFdPUlNUXG4gICAgICAgIGlmIChyYXRpbyA+IDAuMykgc3RhdHVzID0gLTIgLy8gQkFEXG4gICAgICAgIGlmIChyYXRpbyA+IDAuNikgc3RhdHVzID0gLTEgLy8gTk9UIEJBRFxuICAgICAgICBpZiAocmF0aW8gPiAwLjkpIHN0YXR1cyA9IDAgLy8gT0tcbiAgICAgICAgaWYgKHJhdGlvID4gMS4zKSBzdGF0dXMgPSAxIC8vIEdPT0RcbiAgICAgICAgaWYgKHJhdGlvID4gMS42KSBzdGF0dXMgPSAyIC8vIEVYQ0VMTEVOVFxuICAgICAgICBpZiAocmF0aW8gPiAyKSBzdGF0dXMgPSAzIC8vIEJFU1RcbiAgICAgICAgcmV0dXJuIHN0YXR1c1xuICAgIH1cbiAgICByZXF1ZXN0TG9vcCAoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy5yZXF1ZXN0TG9vcC5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLmZyYW1lcysrXG4gICAgICAgIHRoaXMucmVuZGVyZXJzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIucmVuZGVyKCkpXG4gICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgIT09IHVuZGVmaW5lZCkgdGhpcy5yZWdpc3RlclBlcmZvcm1hbmNlTG9nKERhdGUubm93KCkgLSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXApXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCA9IERhdGUubm93KClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lc0Zsb3dcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9GcmFtZXNGbG93LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZnJhbWVzRmxvdywgb3B0aW9ucywgZnVuYykge1xuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgICAgICB0aGlzLmNsYXNzID0gb3B0aW9ucy5jbGFzcyB8fCAnJ1xuICAgICAgICB0aGlzLnByb3BzID0ge1xuICAgICAgICAgICAgaXNEZWJ1Z2luZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZyYW1lc0Zsb3cgPSBmcmFtZXNGbG93XG4gICAgICAgIHRoaXMuX2ZwcyA9IHVuZGVmaW5lZFxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jXG4gICAgICAgIHRoaXMuZnJhbWVzID0gMFxuICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IGZhbHNlXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG4gICAgLy8gUmVuZGVyIG5leHQgZnJhbWVcbiAgICBuZXh0ICgpIHtcbiAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSB0cnVlXG4gICAgfVxuICAgIHJlbW92ZSAoKSB7XG4gICAgICAgIHRoaXMuZnJhbWVzRmxvdy5yZW1vdmVSZW5kZXJlckJ5SWQodGhpcy5pZClcbiAgICB9XG4gICAgcGF1c2UgKCkge1xuICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSB0cnVlXG4gICAgfVxuICAgIHBsYXkgKCkge1xuICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSBmYWxzZVxuICAgIH1cbiAgICBzZXQgZnBzIChuZXdGUFMpIHtcbiAgICAgICAgaWYgKG5ld0ZQUyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLl9mcHMgPSBuZXdGUFNcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShuZXdGUFMpXG4gICAgICAgICAgICB0aGlzLl9mcHMgPSBuZXdGUFNcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBmcHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnBzIHx8IHRoaXMuZnJhbWVzRmxvdy5mcHNcbiAgICB9XG4gICAgc2hvdWxkUmVuZGVyVGhpc0ZyYW1lICgpIHtcbiAgICAgICAgLy8gYWxsIGNvbmRpdGlvbnMgdG8gcGF1c2Ugb3IgcGxheSByZW5kZXJpbmdcbiAgICAgICAgY29uc3QgY29uZGl0aW9ucyA9IFtcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmlzRGVidWdpbmcsXG4gICAgICAgICAgICB0aGlzLmZyYW1lc0Zsb3cuZnJhbWVzICUgKDMwIC8gTWF0aC5taW4odGhpcy5mcHMsIDMwKSkgPT0gMCxcbiAgICAgICAgXVxuICAgICAgICBsZXQgcmV0ID0gdHJ1ZVxuICAgICAgICBmb3IgKGxldCBjb25kIG9mIGNvbmRpdGlvbnMpIHJldCA9IHJldCAmJiBjb25kXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG4gICAgZ2V0RnJhbWVPYmplY3RUb1JldHVybiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZW5kZXJlcjogdGhpcyxcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLmZyYW1lcyxcbiAgICAgICAgICAgIGZwczogdGhpcy5mcHMsXG4gICAgICAgICAgICBwZXJmb3JtYW5jZToge1xuICAgICAgICAgICAgICAgIGZwczogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyxcbiAgICAgICAgICAgICAgICByYXRpbzogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnJhdGlvLFxuICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBhdmVyYWdlOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UuYXZlcmFnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlclRoaXNGcmFtZSgpIHx8IHRoaXMuc2hvdWxkR29OZXh0KSB7XG4gICAgICAgICAgICBsZXQgaXRlcmF0aW9uID0gMFxuICAgICAgICAgICAgaWYgKHRoaXMuZnBzID4gMzApIGl0ZXJhdGlvbiA9IChNYXRoLm1heCh0aGlzLmZwcywgMzApIC8gMzApXG4gICAgICAgICAgICBlbHNlIGl0ZXJhdGlvbiA9IDMwIC8gdGhpcy5mcHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lcysrXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZnVuYyh0aGlzLmdldEZyYW1lT2JqZWN0VG9SZXR1cm4oKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9SZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBSZW5kZXJlckFycmF5IHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdhcnJheScpIHRoaXMuYXJyID0gYXJnc1swXVxyXG4gICAgICAgIGVsc2UgdGhpcy5hcnIgPSBuZXcgQXJyYXkoLi4uYXJncylcclxuICAgIH1cclxuICAgIGdldCAoaSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycltpXVxyXG4gICAgfVxyXG4gICAgc2V0IChpLCB2YWwpIHtcclxuICAgICAgICB0aGlzLmFycltpXSA9IHZhbFxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBwdXNoICh2YWwpIHtcclxuICAgICAgICB0aGlzLmFyci5wdXNoKHZhbClcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlIChpKSB7XHJcbiAgICAgICAgdGhpcy5hcnJbaV0gPSB1bmRlZmluZWRcclxuICAgICAgICB0aGlzLmFyci5zcGxpY2UoaSwgMSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgZmlsdGVyIChjb25kRnVuYykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVuZGVyZXJBcnJheSh0aGlzLmFyci5maWx0ZXIoY29uZEZ1bmMpKVxyXG4gICAgfVxyXG4gICAgZWFjaCAoY2IpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYXJyKSBjYihpdGVtKVxyXG4gICAgfVxyXG4gICAgZ2V0IGxlbmd0aCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aFxyXG4gICAgfVxyXG4gICAgdG9BcnJheSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyXHJcbiAgICB9XHJcbiAgICBzZXQgZnBzIChuZXdGUFMpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIuZnBzID0gbmV3RlBTKVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlICgpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIucmVtb3ZlKCkpXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIubmV4dCgpKVxyXG4gICAgfVxyXG4gICAgcGF1c2UgKCkge1xyXG4gICAgICAgIHRoaXMuZWFjaChyZW5kZXJlciA9PiByZW5kZXJlci5wYXVzZSgpKVxyXG4gICAgfVxyXG4gICAgcGxheSAoKSB7XHJcbiAgICAgICAgdGhpcy5lYWNoKHJlbmRlcmVyID0+IHJlbmRlcmVyLnBsYXkoKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXJBcnJheVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mcmFtZXNmbG93L3NyYy9jb21wb25lbnRzL1JlbmRlcmVyQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==