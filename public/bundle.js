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
    game: {
        background: '#333',
        gravity: -0.001,
        rowCount: 6
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
        this.canvas.style.background = this.options.game.background;
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
            // Box Dynamic vars
            this.boxSize = this.width / this.options.game.rowCount;
            // Setup logic
            this.step = 0;
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
    }, {
        key: 'goNextStep',
        value: function goNextStep() {
            this.step++;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.boxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var box = _step.value;
                    box.onStepChanged();
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

            this.insertBoxRow();
        }

        // Game Methods

    }, {
        key: 'shootBall',
        value: function shootBall(startX, angelVector) {
            this.balls.push(new _Ball2.default(this, startX, angelVector));
        }
    }, {
        key: 'removeBall',
        value: function removeBall(which) {
            var index = this.balls.indexOf(which);
            which = null; // Use garbage collector to remove this ball from memory
            if (index > -1) this.balls.splice(index, 1);
        }
    }, {
        key: 'insertBoxRow',
        value: function insertBoxRow() {
            var countInThisRow = Math.floor(Math.random() * (this.options.game.rowCount - 1)) + 1;
            var usedIndexes = [];
            var index = void 0;
            for (var i = 0; i < countInThisRow; i++) {
                do {
                    index = Math.floor(Math.random() * this.options.game.rowCount);
                } while (usedIndexes.indexOf(index) !== -1);
                usedIndexes.push(index);
                this.boxes.push(new _Box2.default(this, index));
            }
        }

        // Render Methods

    }, {
        key: 'render',
        value: function render() {
            this.clear();
            this.drawBallsAndBoxes();
            this.drawGround();
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
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.boxes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var box = _step2.value;
                    box.render();
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

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.balls[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var ball = _step3.value;
                    ball.render();
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
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
        key: "remove",
        value: function remove() {
            this.game.removeBall(this);
        }
    }, {
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
            // Walls Collisions
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
    }, {
        key: "computeGravity",
        value: function computeGravity() {
            this.velocityVector[1] -= this.game.options.game.gravity;
        }
    }, {
        key: "checkIfShouldDie",
        value: function checkIfShouldDie() {
            if (this.y > this.game.lowestY) this.remove();
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
            this.computeGravity();
            this.x += this.velocityVector[0];
            this.y += this.velocityVector[1];
            this.checkIfShouldDie();
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

var colors = ['red', 'blue', 'magenta', 'yellow'];
var lastChosenColorIndex = -1;
var nextColor = function nextColor() {
    lastChosenColorIndex++;
    if (lastChosenColorIndex === colors.length) lastChosenColorIndex = 0;
    return colors[lastChosenColorIndex];
};

var Box = function () {
    function Box(game, place) {
        _classCallCheck(this, Box);

        this.game = game;
        this.ctx = this.game.ctx;
        this.step = this.game.step;
        this.place = place;
        this.weight = 3;
        this.size = this.game.boxSize;
        this.color = nextColor();
        this.position = { x: this.place * this.size, y: 0 };
        this.positionOnDisplay = { x: this.position.x, y: -this.size };
        this.onStepChanged();
    }

    _createClass(Box, [{
        key: 'onStepChanged',
        value: function onStepChanged() {
            this.position.y = (this.game.step - this.step) * this.size + this.size;
        }
    }, {
        key: 'render',
        value: function render() {
            this.changes();
            this.draw();
        }
    }, {
        key: 'changes',
        value: function changes() {
            this.positionOnDisplay.y += (this.position.y - this.positionOnDisplay.y) / 10;
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.ctx.fillStyle = this.color;
            this.ctx.fillRect(this.positionOnDisplay.x, this.positionOnDisplay.y, this.size, this.size);
        }
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

var ballz = window.ballz = new _Game2.default('#playground');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmYwZTY5YWZiNWFjYWViOGJjZDYiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9HYW1lLmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9CYWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9GcmFtZXNGbG93LmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZyYW1lc2Zsb3cvc3JjL2NvbXBvbmVudHMvUmVuZGVyZXJBcnJheS5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwiZ2FtZSIsImJhY2tncm91bmQiLCJncmF2aXR5Iiwicm93Q291bnQiLCJncm91bmQiLCJoZWlnaHQiLCJjb2xvciIsImJhbGxzIiwicmFkaXVzIiwiR2FtZSIsInF1ZXJ5IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0eWxlIiwiaW5pdGFsaXplRHluYW1pY1ZhcmlhYmxlcyIsImJveGVzIiwid2lkdGgiLCJsb3dlc3RYIiwiaGlnaGVzdFgiLCJsb3dlc3RZIiwiaGlnaGVzdFkiLCJib3hTaXplIiwic3RlcCIsInJlbmRlcmVyIiwiZnJhbWVzRmxvdyIsInJlbmRlciIsImJpbmQiLCJwYXVzZSIsInBsYXkiLCJib3giLCJvblN0ZXBDaGFuZ2VkIiwiaW5zZXJ0Qm94Um93Iiwic3RhcnRYIiwiYW5nZWxWZWN0b3IiLCJwdXNoIiwid2hpY2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJjb3VudEluVGhpc1JvdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInVzZWRJbmRleGVzIiwiaSIsImNsZWFyIiwiZHJhd0JhbGxzQW5kQm94ZXMiLCJkcmF3R3JvdW5kIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiYWxsIiwiQmFsbCIsInZlbG9jaXR5VmVjdG9yIiwieCIsInkiLCJyZW1vdmVCYWxsIiwicmVmbGVjdFgiLCJyZWZsZWN0WSIsInJlbW92ZSIsImNoYW5nZXMiLCJkcmF3IiwiY29tcHV0ZUNvbGxpc2lvbnMiLCJjb21wdXRlR3Jhdml0eSIsImNoZWNrSWZTaG91bGREaWUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGwiLCJjb2xvcnMiLCJsYXN0Q2hvc2VuQ29sb3JJbmRleCIsIm5leHRDb2xvciIsImxlbmd0aCIsIkJveCIsInBsYWNlIiwid2VpZ2h0Iiwic2l6ZSIsInBvc2l0aW9uIiwicG9zaXRpb25PbkRpc3BsYXkiLCJiYWxseiIsIndpbmRvdyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVO0FBQ1pDLFVBQU07QUFDRkMsb0JBQVksTUFEVjtBQUVGQyxpQkFBUyxDQUFDLEtBRlI7QUFHRkMsa0JBQVU7QUFIUixLQURNO0FBTVpDLFlBQVE7QUFDSkMsZ0JB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUU7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFOzs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFIiwiZmlsZSI6Ii4vcHVibGljL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmYwZTY5YWZiNWFjYWViOGJjZDYiLCJpbXBvcnQgQm94IGZyb20gJy4vQm94J1xyXG5pbXBvcnQgQmFsbCBmcm9tICcuL0JhbGwnXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgZ2FtZToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMzMzJyxcclxuICAgICAgICBncmF2aXR5OiAtMC4wMDEsXHJcbiAgICAgICAgcm93Q291bnQ6IDZcclxuICAgIH0sXHJcbiAgICBncm91bmQ6IHtcclxuICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICAgIGNvbG9yOiAnIzY2NidcclxuICAgIH0sXHJcbiAgICBiYWxsczoge1xyXG4gICAgICAgIHJhZGl1czogNSxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIC8vIE9wdGlvbnMgc2V0dXBcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXHJcbiAgICAgICAgLy8gQ2FudmFzIHNldHVwXHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLm9wdGlvbnMuZ2FtZS5iYWNrZ3JvdW5kXHJcbiAgICAgICAgLy8gRHluYW1pYyB2YXJpYWJsZXMgc2V0dXBcclxuICAgICAgICB0aGlzLmluaXRhbGl6ZUR5bmFtaWNWYXJpYWJsZXMoKVxyXG4gICAgICAgIC8vIEJveGVzIGFuZCBCYWxscyBhcnJheXNcclxuICAgICAgICB0aGlzLmJveGVzID0gW11cclxuICAgICAgICB0aGlzLmJhbGxzID0gW11cclxuICAgIH1cclxuICAgIGluaXRhbGl6ZUR5bmFtaWNWYXJpYWJsZXMgKCkge1xyXG4gICAgICAgIC8vIEdhbWUgc2l6ZVxyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0XHJcbiAgICAgICAgLy8gQmFsbHogYXJlYSBzaXplXHJcbiAgICAgICAgdGhpcy5sb3dlc3RYID0gdGhpcy5vcHRpb25zLmJhbGxzLnJhZGl1c1xyXG4gICAgICAgIHRoaXMuaGlnaGVzdFggPSB0aGlzLndpZHRoIC0gdGhpcy5vcHRpb25zLmJhbGxzLnJhZGl1c1xyXG4gICAgICAgIHRoaXMubG93ZXN0WSA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5vcHRpb25zLmdyb3VuZC5oZWlnaHQgLSB0aGlzLm9wdGlvbnMuYmFsbHMucmFkaXVzXHJcbiAgICAgICAgdGhpcy5oaWdoZXN0WSA9IHRoaXMub3B0aW9ucy5iYWxscy5yYWRpdXNcclxuICAgICAgICAvLyBCb3ggRHluYW1pYyB2YXJzXHJcbiAgICAgICAgdGhpcy5ib3hTaXplID0gdGhpcy53aWR0aCAvIHRoaXMub3B0aW9ucy5nYW1lLnJvd0NvdW50XHJcbiAgICAgICAgLy8gU2V0dXAgbG9naWNcclxuICAgICAgICB0aGlzLnN0ZXAgPSAwXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEZsb3cgQ29udHJvbHNcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gZnJhbWVzRmxvdy5yZW5kZXIodGhpcy5yZW5kZXIuYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIHBhdXNlICgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnBhdXNlKClcclxuICAgIH1cclxuICAgIHBsYXkgKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucGxheSgpXHJcbiAgICB9XHJcbiAgICBnb05leHRTdGVwICgpIHtcclxuICAgICAgICB0aGlzLnN0ZXArK1xyXG4gICAgICAgIGZvciAobGV0IGJveCBvZiB0aGlzLmJveGVzKSBib3gub25TdGVwQ2hhbmdlZCgpXHJcbiAgICAgICAgdGhpcy5pbnNlcnRCb3hSb3coKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdhbWUgTWV0aG9kc1xyXG4gICAgc2hvb3RCYWxsIChzdGFydFgsIGFuZ2VsVmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5iYWxscy5wdXNoKG5ldyBCYWxsKHRoaXMsIHN0YXJ0WCwgYW5nZWxWZWN0b3IpKVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQmFsbCAod2hpY2gpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYmFsbHMuaW5kZXhPZih3aGljaClcclxuICAgICAgICB3aGljaCA9IG51bGwgLy8gVXNlIGdhcmJhZ2UgY29sbGVjdG9yIHRvIHJlbW92ZSB0aGlzIGJhbGwgZnJvbSBtZW1vcnlcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy5iYWxscy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICB9XHJcbiAgICBpbnNlcnRCb3hSb3cgKCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50SW5UaGlzUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMub3B0aW9ucy5nYW1lLnJvd0NvdW50IC0gMSkpICsgMVxyXG4gICAgICAgIGNvbnN0IHVzZWRJbmRleGVzID0gW11cclxuICAgICAgICBsZXQgaW5kZXhcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50SW5UaGlzUm93OyBpKyspIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm9wdGlvbnMuZ2FtZS5yb3dDb3VudClcclxuICAgICAgICAgICAgfSB3aGlsZSAodXNlZEluZGV4ZXMuaW5kZXhPZihpbmRleCkgIT09IC0xKVxyXG4gICAgICAgICAgICB1c2VkSW5kZXhlcy5wdXNoKGluZGV4KVxyXG4gICAgICAgICAgICB0aGlzLmJveGVzLnB1c2gobmV3IEJveCh0aGlzLCBpbmRleCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbmRlciBNZXRob2RzXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKVxyXG4gICAgICAgIHRoaXMuZHJhd0JhbGxzQW5kQm94ZXMoKVxyXG4gICAgICAgIHRoaXMuZHJhd0dyb3VuZCgpXHJcbiAgICB9XHJcbiAgICBjbGVhciAoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgZHJhd0dyb3VuZCAoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmdyb3VuZC5jb2xvclxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIHRoaXMuaGVpZ2h0IC0gdGhpcy5vcHRpb25zLmdyb3VuZC5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgZHJhd0JhbGxzQW5kQm94ZXMgKCkge1xyXG4gICAgICAgIGZvciAobGV0IGJveCBvZiB0aGlzLmJveGVzKSBib3gucmVuZGVyKClcclxuICAgICAgICBmb3IgKGxldCBiYWxsIG9mIHRoaXMuYmFsbHMpIGJhbGwucmVuZGVyKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zcmMvR2FtZS5qcyIsImltcG9ydCBGcmFtZXNGbG93IGZyb20gJy4vY29tcG9uZW50cy9GcmFtZXNGbG93J1xuXG4vLyBkZWZpbmluZyBmcmFtZXNGbG93IGFzIGEgZ2xvYmFsIG9iamVjdFxuaWYgKCEod2luZG93LmZyYW1lc0Zsb3cgaW5zdGFuY2VvZiBGcmFtZXNGbG93KSkgeyAvLyBpZiBpdCBkaWRuJ3QgZGVmaW5lIGJlZm9yZVxuICAgIHdpbmRvdy5mcmFtZXNGbG93ID0gbmV3IEZyYW1lc0Zsb3coKVxufVxuXG4vLyBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IHdpbmRvdy5mcmFtZXNGbG93XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZyYW1lc2Zsb3cvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIEJhbGwge1xyXG4gICAgY29uc3RydWN0b3IgKGdhbWUsIHN0YXJ0WCwgdmVsb2NpdHlWZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lXHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmdhbWUuY3R4XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eVZlY3RvciA9IHZlbG9jaXR5VmVjdG9yXHJcbiAgICAgICAgdGhpcy54ID0gc3RhcnRYXHJcbiAgICAgICAgdGhpcy55ID0gdGhpcy5nYW1lLmxvd2VzdFlcclxuICAgIH1cclxuICAgIHJlbW92ZSAoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnJlbW92ZUJhbGwodGhpcylcclxuICAgIH1cclxuICAgIHJlZmxlY3RYICgpIHtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5VmVjdG9yWzBdICo9IC0xXHJcbiAgICB9XHJcbiAgICByZWZsZWN0WSAoKSB7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eVZlY3RvclsxXSAqPSAtMVxyXG4gICAgfVxyXG4gICAgY29tcHV0ZUNvbGxpc2lvbnMgKCkge1xyXG4gICAgICAgIC8vIFdhbGxzIENvbGxpc2lvbnNcclxuICAgICAgICBpZiAodGhpcy54ID49IHRoaXMuZ2FtZS5oaWdoZXN0WCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUuaGlnaGVzdFhcclxuICAgICAgICAgICAgdGhpcy5yZWZsZWN0WCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnggPD0gdGhpcy5nYW1lLmxvd2VzdFgpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLmxvd2VzdFhcclxuICAgICAgICAgICAgdGhpcy5yZWZsZWN0WCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnkgPD0gdGhpcy5nYW1lLmhpZ2hlc3RZKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZ2FtZS5oaWdoZXN0WVxyXG4gICAgICAgICAgICB0aGlzLnJlZmxlY3RZKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wdXRlR3Jhdml0eSAoKSB7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eVZlY3RvclsxXSAtPSB0aGlzLmdhbWUub3B0aW9ucy5nYW1lLmdyYXZpdHlcclxuICAgIH1cclxuICAgIGNoZWNrSWZTaG91bGREaWUgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLmdhbWUubG93ZXN0WSkgdGhpcy5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vdmVzIGFuZCBBbmltYXRpb25cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VzKClcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlcyAoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlQ29sbGlzaW9ucygpXHJcbiAgICAgICAgdGhpcy5jb21wdXRlR3Jhdml0eSgpXHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHlWZWN0b3JbMF1cclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eVZlY3RvclsxXVxyXG4gICAgICAgIHRoaXMuY2hlY2tJZlNob3VsZERpZSgpXHJcbiAgICB9XHJcbiAgICBkcmF3ICgpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5nYW1lLm9wdGlvbnMuYmFsbHMucmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5nYW1lLm9wdGlvbnMuYmFsbHMuY29sb3JcclxuICAgICAgICB0aGlzLmN0eC5maWxsKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zcmMvQmFsbC5qcyIsImNvbnN0IGNvbG9ycyA9IFtcclxuICAgICdyZWQnLFxyXG4gICAgJ2JsdWUnLFxyXG4gICAgJ21hZ2VudGEnLFxyXG4gICAgJ3llbGxvdydcclxuXVxyXG5sZXQgbGFzdENob3NlbkNvbG9ySW5kZXggPSAtMVxyXG5jb25zdCBuZXh0Q29sb3IgPSAoKSA9PiB7XHJcbiAgICBsYXN0Q2hvc2VuQ29sb3JJbmRleCsrXHJcbiAgICBpZiAobGFzdENob3NlbkNvbG9ySW5kZXggPT09IGNvbG9ycy5sZW5ndGgpIGxhc3RDaG9zZW5Db2xvckluZGV4ID0gMFxyXG4gICAgcmV0dXJuIGNvbG9yc1tsYXN0Q2hvc2VuQ29sb3JJbmRleF1cclxufVxyXG5cclxuY2xhc3MgQm94IHtcclxuICAgIGNvbnN0cnVjdG9yIChnYW1lLCBwbGFjZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuZ2FtZS5jdHhcclxuICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLmdhbWUuc3RlcFxyXG4gICAgICAgIHRoaXMucGxhY2UgPSBwbGFjZVxyXG4gICAgICAgIHRoaXMud2VpZ2h0ID0gM1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZ2FtZS5ib3hTaXplXHJcbiAgICAgICAgdGhpcy5jb2xvciA9IG5leHRDb2xvcigpXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt4OiB0aGlzLnBsYWNlICogdGhpcy5zaXplLCB5OiAwfVxyXG4gICAgICAgIHRoaXMucG9zaXRpb25PbkRpc3BsYXkgPSB7eDogdGhpcy5wb3NpdGlvbi54LCB5OiAtdGhpcy5zaXplfVxyXG4gICAgICAgIHRoaXMub25TdGVwQ2hhbmdlZCgpXHJcbiAgICB9XHJcbiAgICBvblN0ZXBDaGFuZ2VkICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSAoKHRoaXMuZ2FtZS5zdGVwIC0gdGhpcy5zdGVwKSAqIHRoaXMuc2l6ZSkgKyB0aGlzLnNpemVcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VzKClcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlcyAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbk9uRGlzcGxheS55ICs9ICh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uT25EaXNwbGF5LnkpIC8gMTBcclxuICAgIH1cclxuICAgIGRyYXcgKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3JcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uT25EaXNwbGF5LngsIHRoaXMucG9zaXRpb25PbkRpc3BsYXkueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zcmMvQm94LmpzIiwiaW1wb3J0ICdmcmFtZXNmbG93J1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2FwcC9zcmMvR2FtZSdcclxuXHJcbmNvbnN0IGJhbGx6ID0gd2luZG93LmJhbGx6ID0gbmV3IEdhbWUoJyNwbGF5Z3JvdW5kJylcclxuXHJcbmJhbGx6LnN0YXJ0KClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImltcG9ydCBSZW5kZXJlckFycmF5IGZyb20gJy4vUmVuZGVyZXJBcnJheSdcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyJ1xuXG4vLyBDb21wYXRpYmlsaXR5IGZvciBhbGwgYnJvd3NlcnMgLSBQYXVsIElyaXNoIHZlcnNpb25cbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XG4gICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKXtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApXG4gICAgICAgICAgfVxufSkoKVxuXG4vLyBGcmFtZXNGbG93XG5jbGFzcyBGcmFtZXNGbG93IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZnJhbWVzID0gMFxuICAgICAgICB0aGlzLl9mcHMgPSAzMFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW5pbXVtQWNjZXB0YWJsZUZQUzogMzBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcmVycyA9IG5ldyBSZW5kZXJlckFycmF5XG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UgPSB7XG4gICAgICAgICAgICBsb2dzOiBuZXcgQXJyYXkoMTAwKSxcbiAgICAgICAgICAgIGxvZ3NQb2ludGVyOiAwLFxuICAgICAgICAgICAgbGFzdFRpbWVTdGFtcDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGFzdEZyYW1lRlBTOiAzMCxcbiAgICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICAgICAgYXZlcmFnZToge1xuICAgICAgICAgICAgICAgIGZwczogMzAsXG4gICAgICAgICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXF1ZXN0TG9vcCgpXG4gICAgfVxuICAgIGdldCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmdldChpZClcbiAgICB9XG4gICAgZ2V0QWxsICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzXG4gICAgfVxuICAgIGdldEFsbEJ5Q2xhc3MgKGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnMuZmlsdGVyKHJlbmRlcmVyID0+IHJlbmRlcmVyLmNsYXNzID09IGNsYXNzTmFtZSlcbiAgICB9XG4gICAgcmVtb3ZlUmVuZGVyZXJCeUlkIChpZCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVycy5yZW1vdmUoaWQpXG4gICAgfVxuICAgIGNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlIChyYXRlLCBpc0dsb2JhbENoZWNrID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGVycm9yID0gbnVsbFxuICAgICAgICBjb25zdCBwb2ludGVyID0gaXNHbG9iYWxDaGVjayA/ICdhbnknIDogJ3RoaXMnXG4gICAgICAgIGlmIChyYXRlIDwgMCkgZXJyb3IgPSAnRlBTIG11c3Qgbm90IGJlIGEgbmVnYXRpdmUgbnVtYmVyISdcbiAgICAgICAgZWxzZSBpZiAocmF0ZSA8IDMwICYmIHJhdGUgPiAwICYmICgzMCAvIHJhdGUpICUgMSAhPT0gMCkgZXJyb3IgPSAnaWYgRlBTIGlzIGxlc3MgdGhhbiAzMGZwcywgaXQgaGF2ZSB0byBiZSBsaWtlIHRoaXM6ICgzMCAvIEZQUykgc2hvdWxkIGJlIGludGVnZXInXG4gICAgICAgIGVsc2UgaWYgKHJhdGUgPiAzMCAmJiByYXRlICUgMzAgIT09IDApIGVycm9yID0gJ2lmIEZQUyBpcyBtb3JlIHRoYW4gMzBmcHMsIGl0IGhhdmUgdG8gYmUgbGlrZSB0aGlzOiAoRlBTICUgMzAgPT0gMCknXG4gICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkgdGhyb3cgYGNhbid0IHNldCAke3JhdGV9ZnBzIGZvciB0aGlzIHJlbmRlcmVyLiBSRUFTT046IDwke2Vycm9yfT5gXG4gICAgfVxuICAgIGdldCBmcHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnBzXG4gICAgfVxuICAgIHNldCBmcHMgKG5ld0ZQUykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShyYXRlLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGF5QWxsICgpIHtcbiAgICAgICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5nZXRBbGxSZW5kZXJlcnMoKSkgcmVuZGVyZXIucGxheSgpXG4gICAgfVxuICAgIHBhdXNlQWxsICgpIHtcbiAgICAgICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5nZXRBbGxSZW5kZXJlcnMoKSkgcmVuZGVyZXIucGF1c2UoKVxuICAgIH1cbiAgICByZW5kZXIgKGNsYXNzTmFtZSwgZnVuYykge1xuICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmdW5jID0gY2xhc3NOYW1lXG4gICAgICAgICAgICBjbGFzc05hbWUgPSAnJ1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMsIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnJlbmRlcmVycy5sZW5ndGgsXG4gICAgICAgICAgICBjbGFzczogY2xhc3NOYW1lXG4gICAgICAgIH0sIGZ1bmMpXG4gICAgICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpXG4gICAgICAgIHJldHVybiByZW5kZXJlclxuICAgIH1cbiAgICBvbkxhZyAobWluaW11bUZQUywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtaW5pbXVtRlBTID09ICdmdW5jdGlvbicpIGNhbGxiYWNrID0gbWluaW11bUZQU1xuICAgICAgICBlbHNlIHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUyA9IG1pbmltdW1GUFNcbiAgICAgICAgdGhpcy5vbkxhZ0NhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB9XG4gICAgcmVnaXN0ZXJQZXJmb3JtYW5jZUxvZyAocmVuZGVyVGltZSkge1xuICAgICAgICAvLyBDYWxjdWxhdGluZyBmcHNcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPSAxMDAwIC8gcmVuZGVyVGltZVxuICAgICAgICAvLyBDYWxjdWxhdGluZyBsYWdzXG4gICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyA8IHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUykgaWYgKHR5cGVvZiB0aGlzLm9uTGFnQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHRoaXMub25MYWdDYWxsYmFjayh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUylcbiAgICAgICAgLy8gbG9nZ2luZ1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NbdGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlcl0gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQU1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyID0gKHRoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXIgKyAxKSAlIDEwMFxuICAgICAgICAvLyBhbmFseXppbmcgbG9nc1xuICAgICAgICB0aGlzLmFuYWx5emVQZXJmb3JtYW5jZSgpXG4gICAgfVxuICAgIGFuYWx5emVQZXJmb3JtYW5jZSAoKSB7XG4gICAgICAgIGNvbnN0IGFsbERhdGEgPSB0aGlzLnBlcmZvcm1hbmNlLmxvZ3MuZmlsdGVyKGRhdGEgPT4gdHlwZW9mIGRhdGEgPT0gJ251bWJlcicpXG4gICAgICAgIC8vIENhbGN1bGF0aW5nIGF2ZXJhZ2Ugb2YgZGF0YVxuICAgICAgICBsZXQgRlBTU3VtID0gMFxuICAgICAgICBmb3IgKGxldCBkYXRhIG9mIGFsbERhdGEpIEZQU1N1bSArPSBkYXRhXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgPSBGUFNTdW0gLyBhbGxEYXRhLmxlbmd0aFxuICAgICAgICAvLyBDYWxjdWxhdGluZyBwZXJmb3JtYW5jZSBwZXJjZW50YWdlXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UucmF0aW8gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyAvIDMwXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5yYXRpbyA9IHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgLyAzMFxuICAgICAgICAvLyBkZWZpbmluZyBzdGF0dXNcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUylcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLnN0YXR1cyA9IHRoaXMuX2dldFN0YXR1c09mRlBTKHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMpXG4gICAgfVxuICAgIF9nZXRTdGF0dXNPZkZQUyAoZnBzKSB7XG4gICAgICAgIGNvbnN0IHJhdGlvID0gZnBzIC8gdGhpcy5mcHNcbiAgICAgICAgbGV0IHN0YXR1cyA9IC0zIC8vIFdPUlNUXG4gICAgICAgIGlmIChyYXRpbyA+IDAuMykgc3RhdHVzID0gLTIgLy8gQkFEXG4gICAgICAgIGlmIChyYXRpbyA+IDAuNikgc3RhdHVzID0gLTEgLy8gTk9UIEJBRFxuICAgICAgICBpZiAocmF0aW8gPiAwLjkpIHN0YXR1cyA9IDAgLy8gT0tcbiAgICAgICAgaWYgKHJhdGlvID4gMS4zKSBzdGF0dXMgPSAxIC8vIEdPT0RcbiAgICAgICAgaWYgKHJhdGlvID4gMS42KSBzdGF0dXMgPSAyIC8vIEVYQ0VMTEVOVFxuICAgICAgICBpZiAocmF0aW8gPiAyKSBzdGF0dXMgPSAzIC8vIEJFU1RcbiAgICAgICAgcmV0dXJuIHN0YXR1c1xuICAgIH1cbiAgICByZXF1ZXN0TG9vcCAoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy5yZXF1ZXN0TG9vcC5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLmZyYW1lcysrXG4gICAgICAgIHRoaXMucmVuZGVyZXJzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIucmVuZGVyKCkpXG4gICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgIT09IHVuZGVmaW5lZCkgdGhpcy5yZWdpc3RlclBlcmZvcm1hbmNlTG9nKERhdGUubm93KCkgLSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXApXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCA9IERhdGUubm93KClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lc0Zsb3dcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9GcmFtZXNGbG93LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZnJhbWVzRmxvdywgb3B0aW9ucywgZnVuYykge1xuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgICAgICB0aGlzLmNsYXNzID0gb3B0aW9ucy5jbGFzcyB8fCAnJ1xuICAgICAgICB0aGlzLnByb3BzID0ge1xuICAgICAgICAgICAgaXNEZWJ1Z2luZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZyYW1lc0Zsb3cgPSBmcmFtZXNGbG93XG4gICAgICAgIHRoaXMuX2ZwcyA9IHVuZGVmaW5lZFxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jXG4gICAgICAgIHRoaXMuZnJhbWVzID0gMFxuICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IGZhbHNlXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG4gICAgLy8gUmVuZGVyIG5leHQgZnJhbWVcbiAgICBuZXh0ICgpIHtcbiAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSB0cnVlXG4gICAgfVxuICAgIHJlbW92ZSAoKSB7XG4gICAgICAgIHRoaXMuZnJhbWVzRmxvdy5yZW1vdmVSZW5kZXJlckJ5SWQodGhpcy5pZClcbiAgICB9XG4gICAgcGF1c2UgKCkge1xuICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSB0cnVlXG4gICAgfVxuICAgIHBsYXkgKCkge1xuICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSBmYWxzZVxuICAgIH1cbiAgICBzZXQgZnBzIChuZXdGUFMpIHtcbiAgICAgICAgaWYgKG5ld0ZQUyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLl9mcHMgPSBuZXdGUFNcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShuZXdGUFMpXG4gICAgICAgICAgICB0aGlzLl9mcHMgPSBuZXdGUFNcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBmcHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnBzIHx8IHRoaXMuZnJhbWVzRmxvdy5mcHNcbiAgICB9XG4gICAgc2hvdWxkUmVuZGVyVGhpc0ZyYW1lICgpIHtcbiAgICAgICAgLy8gYWxsIGNvbmRpdGlvbnMgdG8gcGF1c2Ugb3IgcGxheSByZW5kZXJpbmdcbiAgICAgICAgY29uc3QgY29uZGl0aW9ucyA9IFtcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmlzRGVidWdpbmcsXG4gICAgICAgICAgICB0aGlzLmZyYW1lc0Zsb3cuZnJhbWVzICUgKDMwIC8gTWF0aC5taW4odGhpcy5mcHMsIDMwKSkgPT0gMCxcbiAgICAgICAgXVxuICAgICAgICBsZXQgcmV0ID0gdHJ1ZVxuICAgICAgICBmb3IgKGxldCBjb25kIG9mIGNvbmRpdGlvbnMpIHJldCA9IHJldCAmJiBjb25kXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG4gICAgZ2V0RnJhbWVPYmplY3RUb1JldHVybiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZW5kZXJlcjogdGhpcyxcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLmZyYW1lcyxcbiAgICAgICAgICAgIGZwczogdGhpcy5mcHMsXG4gICAgICAgICAgICBwZXJmb3JtYW5jZToge1xuICAgICAgICAgICAgICAgIGZwczogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyxcbiAgICAgICAgICAgICAgICByYXRpbzogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnJhdGlvLFxuICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBhdmVyYWdlOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UuYXZlcmFnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlclRoaXNGcmFtZSgpIHx8IHRoaXMuc2hvdWxkR29OZXh0KSB7XG4gICAgICAgICAgICBsZXQgaXRlcmF0aW9uID0gMFxuICAgICAgICAgICAgaWYgKHRoaXMuZnBzID4gMzApIGl0ZXJhdGlvbiA9IChNYXRoLm1heCh0aGlzLmZwcywgMzApIC8gMzApXG4gICAgICAgICAgICBlbHNlIGl0ZXJhdGlvbiA9IDMwIC8gdGhpcy5mcHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lcysrXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZnVuYyh0aGlzLmdldEZyYW1lT2JqZWN0VG9SZXR1cm4oKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9SZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBSZW5kZXJlckFycmF5IHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdhcnJheScpIHRoaXMuYXJyID0gYXJnc1swXVxyXG4gICAgICAgIGVsc2UgdGhpcy5hcnIgPSBuZXcgQXJyYXkoLi4uYXJncylcclxuICAgIH1cclxuICAgIGdldCAoaSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycltpXVxyXG4gICAgfVxyXG4gICAgc2V0IChpLCB2YWwpIHtcclxuICAgICAgICB0aGlzLmFycltpXSA9IHZhbFxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBwdXNoICh2YWwpIHtcclxuICAgICAgICB0aGlzLmFyci5wdXNoKHZhbClcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlIChpKSB7XHJcbiAgICAgICAgdGhpcy5hcnJbaV0gPSB1bmRlZmluZWRcclxuICAgICAgICB0aGlzLmFyci5zcGxpY2UoaSwgMSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgZmlsdGVyIChjb25kRnVuYykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVuZGVyZXJBcnJheSh0aGlzLmFyci5maWx0ZXIoY29uZEZ1bmMpKVxyXG4gICAgfVxyXG4gICAgZWFjaCAoY2IpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYXJyKSBjYihpdGVtKVxyXG4gICAgfVxyXG4gICAgZ2V0IGxlbmd0aCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aFxyXG4gICAgfVxyXG4gICAgdG9BcnJheSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyXHJcbiAgICB9XHJcbiAgICBzZXQgZnBzIChuZXdGUFMpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIuZnBzID0gbmV3RlBTKVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlICgpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIucmVtb3ZlKCkpXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIubmV4dCgpKVxyXG4gICAgfVxyXG4gICAgcGF1c2UgKCkge1xyXG4gICAgICAgIHRoaXMuZWFjaChyZW5kZXJlciA9PiByZW5kZXJlci5wYXVzZSgpKVxyXG4gICAgfVxyXG4gICAgcGxheSAoKSB7XHJcbiAgICAgICAgdGhpcy5lYWNoKHJlbmRlcmVyID0+IHJlbmRlcmVyLnBsYXkoKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXJBcnJheVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mcmFtZXNmbG93L3NyYy9jb21wb25lbnRzL1JlbmRlcmVyQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==