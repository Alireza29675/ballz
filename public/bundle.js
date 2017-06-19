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
                    var row = _step.value;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = row[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var box = _step2.value;
                            box.onStepChanged();
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
            var row = [];
            var index = void 0;
            for (var i = 0; i < countInThisRow; i++) {
                do {
                    index = Math.floor(Math.random() * this.options.game.rowCount);
                } while (usedIndexes.indexOf(index) !== -1);
                usedIndexes.push(index);
                row.push(new _Box2.default(this, index));
            }
            this.boxes.push(row);
        }
    }, {
        key: 'removeBox',
        value: function removeBox(which) {
            var rowIndex = which.step - 1;
            var index = this.boxes[rowIndex].indexOf(which);
            which = null; // Use garbage collector to remove this ball from memory
            if (index > -1) this.boxes[rowIndex].splice(index, 1);
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
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.boxes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var row = _step3.value;
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = row[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var box = _step5.value;
                            box.render();
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }
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

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.balls[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var ball = _step4.value;
                    ball.render();
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
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
        this.radius = this.game.options.balls.radius;
        this.weight = 1;
        this.x = startX;
        this.y = this.game.lowestY;
    }

    _createClass(Ball, [{
        key: "remove",
        value: function remove() {
            this.game.removeBall(this);
        }
    }, {
        key: "reflect",
        value: function reflect(reflectArr) {
            this.velocityVector[0] *= reflectArr[0];
            this.velocityVector[1] *= reflectArr[1];
        }
    }, {
        key: "computeCollisions",
        value: function computeCollisions() {
            // Walls Collisions
            if (this.x >= this.game.highestX) {
                this.x = this.game.highestX;
                this.reflect([-1, 1]);
            }
            if (this.x <= this.game.lowestX) {
                this.x = this.game.lowestX;
                this.reflect([-1, 1]);
            }
            if (this.y <= this.game.highestY) {
                this.y = this.game.highestY;
                this.reflect([1, -1]);
            }
            // Boxes Collisions
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.game.boxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var row = _step.value;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = row[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var box = _step2.value;

                            this.reflect(box.checkCollisionWith(this));
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
            this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
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
        key: 'remove',
        value: function remove() {
            this.game.removeBox(this);
        }
    }, {
        key: 'checkCollisionWith',
        value: function checkCollisionWith(ball) {
            var distX = Math.abs(ball.x - this.positionOnDisplay.x - this.size / 2);
            var distY = Math.abs(ball.y - this.positionOnDisplay.y - this.size / 2
            // If no collision detected
            );if (distX > this.size / 2 + ball.radius) return [1, 1];
            if (distY > this.size / 2 + ball.radius) return [1, 1];
            // If has collisions
            this.onBallCollised(ball);
            if (distY < this.size / 2) return [-1, 1];
            if (distX < this.size / 2) return [1, -1];
            // If it collised with a corner
            return [-1, -1];
        }

        // Listeners

    }, {
        key: 'onStepChanged',
        value: function onStepChanged() {
            this.position.y = (this.game.step - this.step) * this.size + this.size;
        }
    }, {
        key: 'onBallCollised',
        value: function onBallCollised(ball) {
            this.weight = Math.max(0, this.weight - ball.weight);
            if (this.weight === 0) this.remove();
        }

        // Moves and Animation

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjk0MGZkZmZhYTc3YzE5YjUzODUiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9HYW1lLmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9CYWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9GcmFtZXNGbG93LmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZyYW1lc2Zsb3cvc3JjL2NvbXBvbmVudHMvUmVuZGVyZXJBcnJheS5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwiZ2FtZSIsImJhY2tncm91bmQiLCJncmF2aXR5Iiwicm93Q291bnQiLCJncm91bmQiLCJoZWlnaHQiLCJjb2xvciIsImJhbGxzIiwicmFkaXVzIiwiR2FtZSIsInF1ZXJ5IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0eWxlIiwiaW5pdGFsaXplRHluYW1pY1ZhcmlhYmxlcyIsImJveGVzIiwid2lkdGgiLCJsb3dlc3RYIiwiaGlnaGVzdFgiLCJsb3dlc3RZIiwiaGlnaGVzdFkiLCJib3hTaXplIiwic3RlcCIsInJlbmRlcmVyIiwiZnJhbWVzRmxvdyIsInJlbmRlciIsImJpbmQiLCJwYXVzZSIsInBsYXkiLCJyb3ciLCJib3giLCJvblN0ZXBDaGFuZ2VkIiwiaW5zZXJ0Qm94Um93Iiwic3RhcnRYIiwiYW5nZWxWZWN0b3IiLCJwdXNoIiwid2hpY2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJjb3VudEluVGhpc1JvdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInVzZWRJbmRleGVzIiwiaSIsInJvd0luZGV4IiwiY2xlYXIiLCJkcmF3QmFsbHNBbmRCb3hlcyIsImRyYXdHcm91bmQiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJhbGwiLCJCYWxsIiwidmVsb2NpdHlWZWN0b3IiLCJ3ZWlnaHQiLCJ4IiwieSIsInJlbW92ZUJhbGwiLCJyZWZsZWN0QXJyIiwicmVmbGVjdCIsImNoZWNrQ29sbGlzaW9uV2l0aCIsInJlbW92ZSIsImNoYW5nZXMiLCJkcmF3IiwiY29tcHV0ZUNvbGxpc2lvbnMiLCJjb21wdXRlR3Jhdml0eSIsImNoZWNrSWZTaG91bGREaWUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGwiLCJjb2xvcnMiLCJsYXN0Q2hvc2VuQ29sb3JJbmRleCIsIm5leHRDb2xvciIsImxlbmd0aCIsIkJveCIsInBsYWNlIiwic2l6ZSIsInBvc2l0aW9uIiwicG9zaXRpb25PbkRpc3BsYXkiLCJyZW1vdmVCb3giLCJkaXN0WCIsImFicyIsImRpc3RZIiwib25CYWxsQ29sbGlzZWQiLCJtYXgiLCJiYWxseiIsIndpbmRvdyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVO0FBQ1pDLFVBQU07QUFDRkMsb0JBQVksTUFEVjtBQUVGQyxpQkFBUyxDQUFDLEtBRlI7QUFHRkMsa0JBQVU7QUFIUixLQURNO0FBTVpDLFlBQVE7QUFDSkMsZ0JBQVEsRUFESjtBQUVKQyxlQUFPO0FBRkgsS0FOSTtBQVVaQyxXQUFPO0FBQ0hDLGdCQUFRLENBREw7QUFFSEYsZUFBTztBQUZKO0FBVkssQ0FBaEI7O0lBZ0JNRyxJO0FBQ0Ysa0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFDaEI7QUFDQSxhQUFLWCxPQUFMLEdBQWVBLE9BQWY7QUFDQTtBQUNBLGFBQUtZLE1BQUwsR0FBY0MsU0FBU0MsYUFBVCxDQUF1QkgsS0FBdkIsQ0FBZDtBQUNBLGFBQUtJLEdBQUwsR0FBVyxLQUFLSCxNQUFMLENBQVlJLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLGFBQUtKLE1BQUwsQ0FBWUssS0FBWixDQUFrQmYsVUFBbEIsR0FBK0IsS0FBS0YsT0FBTCxDQUFhQyxJQUFiLENBQWtCQyxVQUFqRDtBQUNBO0FBQ0EsYUFBS2dCO0FBQ0w7QUFEQSxXQUVBLEtBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBS1gsS0FBTCxHQUFhLEVBQWI7QUFDSDs7OztvREFDNEI7QUFDekI7QUFDQSxpQkFBS1ksS0FBTCxHQUFhLEtBQUtSLE1BQUwsQ0FBWVEsS0FBekI7QUFDQSxpQkFBS2QsTUFBTCxHQUFjLEtBQUtNLE1BQUwsQ0FBWU4sTUFBMUI7QUFDQTtBQUNBLGlCQUFLZSxPQUFMLEdBQWUsS0FBS3JCLE9BQUwsQ0FBYVEsS0FBYixDQUFtQkMsTUFBbEM7QUFDQSxpQkFBS2EsUUFBTCxHQUFnQixLQUFLRixLQUFMLEdBQWEsS0FBS3BCLE9BQUwsQ0FBYVEsS0FBYixDQUFtQkMsTUFBaEQ7QUFDQSxpQkFBS2MsT0FBTCxHQUFlLEtBQUtqQixNQUFMLEdBQWMsS0FBS04sT0FBTCxDQUFhSyxNQUFiLENBQW9CQyxNQUFsQyxHQUEyQyxLQUFLTixPQUFMLENBQWFRLEtBQWIsQ0FBbUJDLE1BQTdFO0FBQ0EsaUJBQUtlLFFBQUwsR0FBZ0IsS0FBS3hCLE9BQUwsQ0FBYVEsS0FBYixDQUFtQkMsTUFBbkM7QUFDQTtBQUNBLGlCQUFLZ0IsT0FBTCxHQUFlLEtBQUtMLEtBQUwsR0FBYSxLQUFLcEIsT0FBTCxDQUFhQyxJQUFiLENBQWtCRyxRQUE5QztBQUNBO0FBQ0EsaUJBQUtzQixJQUFMLEdBQVksQ0FBWjtBQUNIOztBQUVEOzs7O2dDQUNTO0FBQ0wsaUJBQUtDLFFBQUwsR0FBZ0JDLFdBQVdDLE1BQVgsQ0FBa0IsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWxCLENBQWhCO0FBQ0g7OztnQ0FDUTtBQUNMLGlCQUFLSCxRQUFMLENBQWNJLEtBQWQ7QUFDSDs7OytCQUNPO0FBQ0osaUJBQUtKLFFBQUwsQ0FBY0ssSUFBZDtBQUNIOzs7cUNBQ2E7QUFDVixpQkFBS04sSUFBTDtBQURVO0FBQUE7QUFBQTs7QUFBQTtBQUVWLHFDQUFnQixLQUFLUCxLQUFyQjtBQUFBLHdCQUFTYyxHQUFUO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQTRCLDhDQUFnQkEsR0FBaEI7QUFBQSxnQ0FBU0MsR0FBVDtBQUFxQkEsZ0NBQUlDLGFBQUo7QUFBckI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHVixpQkFBS0MsWUFBTDtBQUNIOztBQUVEOzs7O2tDQUNXQyxNLEVBQVFDLFcsRUFBYTtBQUM1QixpQkFBSzlCLEtBQUwsQ0FBVytCLElBQVgsQ0FBZ0IsbUJBQVMsSUFBVCxFQUFlRixNQUFmLEVBQXVCQyxXQUF2QixDQUFoQjtBQUNIOzs7bUNBQ1dFLEssRUFBTztBQUNmLGdCQUFNQyxRQUFRLEtBQUtqQyxLQUFMLENBQVdrQyxPQUFYLENBQW1CRixLQUFuQixDQUFkO0FBQ0FBLG9CQUFRLElBQVIsQ0FGZSxDQUVGO0FBQ2IsZ0JBQUlDLFFBQVEsQ0FBQyxDQUFiLEVBQWdCLEtBQUtqQyxLQUFMLENBQVdtQyxNQUFYLENBQWtCRixLQUFsQixFQUF5QixDQUF6QjtBQUNuQjs7O3VDQUNlO0FBQ1osZ0JBQU1HLGlCQUFpQkMsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLE1BQWlCLEtBQUsvQyxPQUFMLENBQWFDLElBQWIsQ0FBa0JHLFFBQWxCLEdBQTZCLENBQTlDLENBQVgsSUFBK0QsQ0FBdEY7QUFDQSxnQkFBTTRDLGNBQWMsRUFBcEI7QUFDQSxnQkFBTWYsTUFBTSxFQUFaO0FBQ0EsZ0JBQUlRLGNBQUo7QUFDQSxpQkFBSyxJQUFJUSxJQUFJLENBQWIsRUFBZ0JBLElBQUlMLGNBQXBCLEVBQW9DSyxHQUFwQyxFQUF5QztBQUNyQyxtQkFBRztBQUNDUiw0QkFBUUksS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLEtBQUsvQyxPQUFMLENBQWFDLElBQWIsQ0FBa0JHLFFBQTdDLENBQVI7QUFDSCxpQkFGRCxRQUVTNEMsWUFBWU4sT0FBWixDQUFvQkQsS0FBcEIsTUFBK0IsQ0FBQyxDQUZ6QztBQUdBTyw0QkFBWVQsSUFBWixDQUFpQkUsS0FBakI7QUFDQVIsb0JBQUlNLElBQUosQ0FBUyxrQkFBUSxJQUFSLEVBQWNFLEtBQWQsQ0FBVDtBQUNIO0FBQ0QsaUJBQUt0QixLQUFMLENBQVdvQixJQUFYLENBQWdCTixHQUFoQjtBQUNIOzs7a0NBQ1VPLEssRUFBTztBQUNkLGdCQUFNVSxXQUFXVixNQUFNZCxJQUFOLEdBQWEsQ0FBOUI7QUFDQSxnQkFBTWUsUUFBUSxLQUFLdEIsS0FBTCxDQUFXK0IsUUFBWCxFQUFxQlIsT0FBckIsQ0FBNkJGLEtBQTdCLENBQWQ7QUFDQUEsb0JBQVEsSUFBUixDQUhjLENBR0Q7QUFDYixnQkFBSUMsUUFBUSxDQUFDLENBQWIsRUFBZ0IsS0FBS3RCLEtBQUwsQ0FBVytCLFFBQVgsRUFBcUJQLE1BQXJCLENBQTRCRixLQUE1QixFQUFtQyxDQUFuQztBQUNuQjs7QUFFRDs7OztpQ0FDVTtBQUNOLGlCQUFLVSxLQUFMO0FBQ0EsaUJBQUtDLGlCQUFMO0FBQ0EsaUJBQUtDLFVBQUw7QUFDSDs7O2dDQUNRO0FBQ0wsaUJBQUt0QyxHQUFMLENBQVN1QyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUtsQyxLQUE5QixFQUFxQyxLQUFLZCxNQUExQztBQUNIOzs7cUNBQ2E7QUFDVixpQkFBS1MsR0FBTCxDQUFTd0MsU0FBVCxHQUFxQixLQUFLdkQsT0FBTCxDQUFhSyxNQUFiLENBQW9CRSxLQUF6QztBQUNBLGlCQUFLUSxHQUFMLENBQVN5QyxRQUFULENBQWtCLENBQWxCLEVBQXFCLEtBQUtsRCxNQUFMLEdBQWMsS0FBS04sT0FBTCxDQUFhSyxNQUFiLENBQW9CQyxNQUF2RCxFQUErRCxLQUFLYyxLQUFwRSxFQUEyRSxLQUFLZCxNQUFoRjtBQUNIOzs7NENBQ29CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2pCLHNDQUFnQixLQUFLYSxLQUFyQjtBQUFBLHdCQUFTYyxHQUFUO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQTRCLDhDQUFnQkEsR0FBaEI7QUFBQSxnQ0FBU0MsR0FBVDtBQUFxQkEsZ0NBQUlMLE1BQUo7QUFBckI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRWpCLHNDQUFpQixLQUFLckIsS0FBdEI7QUFBQSx3QkFBU2lELElBQVQ7QUFBNkJBLHlCQUFLNUIsTUFBTDtBQUE3QjtBQUZpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR3BCOzs7Ozs7a0JBR1VuQixJOzs7Ozs7Ozs7QUNqSGY7O0FBRUE7QUFDQSw4R0FBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozs7OztJQ1JNZ0QsSTtBQUNGLGtCQUFhekQsSUFBYixFQUFtQm9DLE1BQW5CLEVBQTJCc0IsY0FBM0IsRUFBMkM7QUFBQTs7QUFDdkMsYUFBSzFELElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtjLEdBQUwsR0FBVyxLQUFLZCxJQUFMLENBQVVjLEdBQXJCO0FBQ0EsYUFBSzRDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsYUFBS2xELE1BQUwsR0FBYyxLQUFLUixJQUFMLENBQVVELE9BQVYsQ0FBa0JRLEtBQWxCLENBQXdCQyxNQUF0QztBQUNBLGFBQUttRCxNQUFMLEdBQWMsQ0FBZDtBQUNBLGFBQUtDLENBQUwsR0FBU3hCLE1BQVQ7QUFDQSxhQUFLeUIsQ0FBTCxHQUFTLEtBQUs3RCxJQUFMLENBQVVzQixPQUFuQjtBQUNIOzs7O2lDQUNTO0FBQ04saUJBQUt0QixJQUFMLENBQVU4RCxVQUFWLENBQXFCLElBQXJCO0FBQ0g7OztnQ0FDUUMsVSxFQUFZO0FBQ2pCLGlCQUFLTCxjQUFMLENBQW9CLENBQXBCLEtBQTBCSyxXQUFXLENBQVgsQ0FBMUI7QUFDQSxpQkFBS0wsY0FBTCxDQUFvQixDQUFwQixLQUEwQkssV0FBVyxDQUFYLENBQTFCO0FBQ0g7Ozs0Q0FDb0I7QUFDakI7QUFDQSxnQkFBSSxLQUFLSCxDQUFMLElBQVUsS0FBSzVELElBQUwsQ0FBVXFCLFFBQXhCLEVBQWtDO0FBQzlCLHFCQUFLdUMsQ0FBTCxHQUFTLEtBQUs1RCxJQUFMLENBQVVxQixRQUFuQjtBQUNBLHFCQUFLMkMsT0FBTCxDQUFhLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUFiO0FBQ0g7QUFDRCxnQkFBSSxLQUFLSixDQUFMLElBQVUsS0FBSzVELElBQUwsQ0FBVW9CLE9BQXhCLEVBQWlDO0FBQzdCLHFCQUFLd0MsQ0FBTCxHQUFTLEtBQUs1RCxJQUFMLENBQVVvQixPQUFuQjtBQUNBLHFCQUFLNEMsT0FBTCxDQUFhLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUFiO0FBQ0g7QUFDRCxnQkFBSSxLQUFLSCxDQUFMLElBQVUsS0FBSzdELElBQUwsQ0FBVXVCLFFBQXhCLEVBQWtDO0FBQzlCLHFCQUFLc0MsQ0FBTCxHQUFTLEtBQUs3RCxJQUFMLENBQVV1QixRQUFuQjtBQUNBLHFCQUFLeUMsT0FBTCxDQUFhLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBTCxDQUFiO0FBQ0g7QUFDRDtBQWRpQjtBQUFBO0FBQUE7O0FBQUE7QUFlakIscUNBQWdCLEtBQUtoRSxJQUFMLENBQVVrQixLQUExQjtBQUFBLHdCQUFTYyxHQUFUO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQWlDLDhDQUFnQkEsR0FBaEIsbUlBQXFCO0FBQUEsZ0NBQVpDLEdBQVk7O0FBQ2xELGlDQUFLK0IsT0FBTCxDQUFhL0IsSUFBSWdDLGtCQUFKLENBQXVCLElBQXZCLENBQWI7QUFDSDtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JwQjs7O3lDQUNpQjtBQUNkLGlCQUFLUCxjQUFMLENBQW9CLENBQXBCLEtBQTBCLEtBQUsxRCxJQUFMLENBQVVELE9BQVYsQ0FBa0JDLElBQWxCLENBQXVCRSxPQUFqRDtBQUNIOzs7MkNBQ21CO0FBQ2hCLGdCQUFJLEtBQUsyRCxDQUFMLEdBQVMsS0FBSzdELElBQUwsQ0FBVXNCLE9BQXZCLEVBQWdDLEtBQUs0QyxNQUFMO0FBQ25DOztBQUVEOzs7O2lDQUNVO0FBQ04saUJBQUtDLE9BQUw7QUFDQSxpQkFBS0MsSUFBTDtBQUNIOzs7a0NBQ1U7QUFDUCxpQkFBS0MsaUJBQUw7QUFDQSxpQkFBS0MsY0FBTDtBQUNBLGlCQUFLVixDQUFMLElBQVUsS0FBS0YsY0FBTCxDQUFvQixDQUFwQixDQUFWO0FBQ0EsaUJBQUtHLENBQUwsSUFBVSxLQUFLSCxjQUFMLENBQW9CLENBQXBCLENBQVY7QUFDQSxpQkFBS2EsZ0JBQUw7QUFDSDs7OytCQUNPO0FBQ0osaUJBQUt6RCxHQUFMLENBQVMwRCxTQUFUO0FBQ0EsaUJBQUsxRCxHQUFMLENBQVMyRCxHQUFULENBQWEsS0FBS2IsQ0FBbEIsRUFBcUIsS0FBS0MsQ0FBMUIsRUFBNkIsS0FBS3JELE1BQWxDLEVBQTBDLENBQTFDLEVBQTZDLElBQUlvQyxLQUFLOEIsRUFBdEQsRUFBMEQsS0FBMUQ7QUFDQSxpQkFBSzVELEdBQUwsQ0FBU3dDLFNBQVQsR0FBcUIsS0FBS3RELElBQUwsQ0FBVUQsT0FBVixDQUFrQlEsS0FBbEIsQ0FBd0JELEtBQTdDO0FBQ0EsaUJBQUtRLEdBQUwsQ0FBUzZELElBQVQ7QUFDSDs7Ozs7O2tCQUdVbEIsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRGYsSUFBTW1CLFNBQVMsQ0FDWCxLQURXLEVBRVgsTUFGVyxFQUdYLFNBSFcsRUFJWCxRQUpXLENBQWY7QUFNQSxJQUFJQyx1QkFBdUIsQ0FBQyxDQUE1QjtBQUNBLElBQU1DLFlBQVksU0FBWkEsU0FBWSxHQUFNO0FBQ3BCRDtBQUNBLFFBQUlBLHlCQUF5QkQsT0FBT0csTUFBcEMsRUFBNENGLHVCQUF1QixDQUF2QjtBQUM1QyxXQUFPRCxPQUFPQyxvQkFBUCxDQUFQO0FBQ0gsQ0FKRDs7SUFNTUcsRztBQUNGLGlCQUFhaEYsSUFBYixFQUFtQmlGLEtBQW5CLEVBQTBCO0FBQUE7O0FBQ3RCLGFBQUtqRixJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFLYyxHQUFMLEdBQVcsS0FBS2QsSUFBTCxDQUFVYyxHQUFyQjtBQUNBLGFBQUtXLElBQUwsR0FBWSxLQUFLekIsSUFBTCxDQUFVeUIsSUFBdEI7QUFDQSxhQUFLd0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsYUFBS3RCLE1BQUwsR0FBYyxDQUFkO0FBQ0EsYUFBS3VCLElBQUwsR0FBWSxLQUFLbEYsSUFBTCxDQUFVd0IsT0FBdEI7QUFDQSxhQUFLbEIsS0FBTCxHQUFhd0UsV0FBYjtBQUNBLGFBQUtLLFFBQUwsR0FBZ0IsRUFBQ3ZCLEdBQUcsS0FBS3FCLEtBQUwsR0FBYSxLQUFLQyxJQUF0QixFQUE0QnJCLEdBQUcsQ0FBL0IsRUFBaEI7QUFDQSxhQUFLdUIsaUJBQUwsR0FBeUIsRUFBQ3hCLEdBQUcsS0FBS3VCLFFBQUwsQ0FBY3ZCLENBQWxCLEVBQXFCQyxHQUFHLENBQUMsS0FBS3FCLElBQTlCLEVBQXpCO0FBQ0EsYUFBS2hELGFBQUw7QUFDSDs7OztpQ0FDUztBQUNOLGlCQUFLbEMsSUFBTCxDQUFVcUYsU0FBVixDQUFvQixJQUFwQjtBQUNIOzs7MkNBQ21CN0IsSSxFQUFNO0FBQ3RCLGdCQUFNOEIsUUFBUTFDLEtBQUsyQyxHQUFMLENBQVMvQixLQUFLSSxDQUFMLEdBQVMsS0FBS3dCLGlCQUFMLENBQXVCeEIsQ0FBaEMsR0FBb0MsS0FBS3NCLElBQUwsR0FBVSxDQUF2RCxDQUFkO0FBQ0EsZ0JBQU1NLFFBQVE1QyxLQUFLMkMsR0FBTCxDQUFTL0IsS0FBS0ssQ0FBTCxHQUFTLEtBQUt1QixpQkFBTCxDQUF1QnZCLENBQWhDLEdBQW9DLEtBQUtxQixJQUFMLEdBQVU7QUFDckU7QUFEYyxhQUFkLENBRUEsSUFBSUksUUFBUyxLQUFLSixJQUFMLEdBQVUsQ0FBVixHQUFjMUIsS0FBS2hELE1BQWhDLEVBQXlDLE9BQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFQO0FBQ3pDLGdCQUFJZ0YsUUFBUyxLQUFLTixJQUFMLEdBQVUsQ0FBVixHQUFjMUIsS0FBS2hELE1BQWhDLEVBQXlDLE9BQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFQO0FBQ3pDO0FBQ0EsaUJBQUtpRixjQUFMLENBQW9CakMsSUFBcEI7QUFDQSxnQkFBSWdDLFFBQVEsS0FBS04sSUFBTCxHQUFVLENBQXRCLEVBQXlCLE9BQU8sQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLENBQVA7QUFDekIsZ0JBQUlJLFFBQVEsS0FBS0osSUFBTCxHQUFVLENBQXRCLEVBQXlCLE9BQU8sQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFMLENBQVA7QUFDekI7QUFDQSxtQkFBTyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUMsQ0FBTixDQUFQO0FBQ0g7O0FBRUQ7Ozs7d0NBQ2lCO0FBQ2IsaUJBQUtDLFFBQUwsQ0FBY3RCLENBQWQsR0FBbUIsQ0FBQyxLQUFLN0QsSUFBTCxDQUFVeUIsSUFBVixHQUFpQixLQUFLQSxJQUF2QixJQUErQixLQUFLeUQsSUFBckMsR0FBNkMsS0FBS0EsSUFBcEU7QUFDSDs7O3VDQUNlMUIsSSxFQUFNO0FBQ2xCLGlCQUFLRyxNQUFMLEdBQWNmLEtBQUs4QyxHQUFMLENBQVMsQ0FBVCxFQUFZLEtBQUsvQixNQUFMLEdBQWNILEtBQUtHLE1BQS9CLENBQWQ7QUFDQSxnQkFBSSxLQUFLQSxNQUFMLEtBQWdCLENBQXBCLEVBQXVCLEtBQUtPLE1BQUw7QUFDMUI7O0FBRUQ7Ozs7aUNBQ1U7QUFDTixpQkFBS0MsT0FBTDtBQUNBLGlCQUFLQyxJQUFMO0FBQ0g7OztrQ0FDVTtBQUNQLGlCQUFLZ0IsaUJBQUwsQ0FBdUJ2QixDQUF2QixJQUE0QixDQUFDLEtBQUtzQixRQUFMLENBQWN0QixDQUFkLEdBQWtCLEtBQUt1QixpQkFBTCxDQUF1QnZCLENBQTFDLElBQStDLEVBQTNFO0FBQ0g7OzsrQkFDTztBQUNKLGlCQUFLL0MsR0FBTCxDQUFTd0MsU0FBVCxHQUFxQixLQUFLaEQsS0FBMUI7QUFDQSxpQkFBS1EsR0FBTCxDQUFTeUMsUUFBVCxDQUFrQixLQUFLNkIsaUJBQUwsQ0FBdUJ4QixDQUF6QyxFQUE0QyxLQUFLd0IsaUJBQUwsQ0FBdUJ2QixDQUFuRSxFQUFzRSxLQUFLcUIsSUFBM0UsRUFBaUYsS0FBS0EsSUFBdEY7QUFFSDs7Ozs7O2tCQUdVRixHOzs7Ozs7Ozs7QUNuRWY7O0FBQ0E7Ozs7OztBQUVBLElBQU1XLFFBQVFDLE9BQU9ELEtBQVAsR0FBZSxtQkFBUyxhQUFULENBQTdCOztBQUVBQSxNQUFNRSxLQUFOLEc7Ozs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLEtBQUssa0NBQWtDLE1BQU07QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtRTs7Ozs7OztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUU7Ozs7Ozs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0UiLCJmaWxlIjoiLi9wdWJsaWMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiOTQwZmRmZmFhNzdjMTliNTM4NSIsImltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXHJcbmltcG9ydCBCYWxsIGZyb20gJy4vQmFsbCdcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBnYW1lOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJyMzMzMnLFxyXG4gICAgICAgIGdyYXZpdHk6IC0wLjAwMSxcclxuICAgICAgICByb3dDb3VudDogNlxyXG4gICAgfSxcclxuICAgIGdyb3VuZDoge1xyXG4gICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgY29sb3I6ICcjNjY2J1xyXG4gICAgfSxcclxuICAgIGJhbGxzOiB7XHJcbiAgICAgICAgcmFkaXVzOiA1LFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgLy8gT3B0aW9ucyBzZXR1cFxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcclxuICAgICAgICAvLyBDYW52YXMgc2V0dXBcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMub3B0aW9ucy5nYW1lLmJhY2tncm91bmRcclxuICAgICAgICAvLyBEeW5hbWljIHZhcmlhYmxlcyBzZXR1cFxyXG4gICAgICAgIHRoaXMuaW5pdGFsaXplRHluYW1pY1ZhcmlhYmxlcygpXHJcbiAgICAgICAgLy8gQm94ZXMgYW5kIEJhbGxzIGFycmF5c1xyXG4gICAgICAgIHRoaXMuYm94ZXMgPSBbXVxyXG4gICAgICAgIHRoaXMuYmFsbHMgPSBbXVxyXG4gICAgfVxyXG4gICAgaW5pdGFsaXplRHluYW1pY1ZhcmlhYmxlcyAoKSB7XHJcbiAgICAgICAgLy8gR2FtZSBzaXplXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHRcclxuICAgICAgICAvLyBCYWxseiBhcmVhIHNpemVcclxuICAgICAgICB0aGlzLmxvd2VzdFggPSB0aGlzLm9wdGlvbnMuYmFsbHMucmFkaXVzXHJcbiAgICAgICAgdGhpcy5oaWdoZXN0WCA9IHRoaXMud2lkdGggLSB0aGlzLm9wdGlvbnMuYmFsbHMucmFkaXVzXHJcbiAgICAgICAgdGhpcy5sb3dlc3RZID0gdGhpcy5oZWlnaHQgLSB0aGlzLm9wdGlvbnMuZ3JvdW5kLmhlaWdodCAtIHRoaXMub3B0aW9ucy5iYWxscy5yYWRpdXNcclxuICAgICAgICB0aGlzLmhpZ2hlc3RZID0gdGhpcy5vcHRpb25zLmJhbGxzLnJhZGl1c1xyXG4gICAgICAgIC8vIEJveCBEeW5hbWljIHZhcnNcclxuICAgICAgICB0aGlzLmJveFNpemUgPSB0aGlzLndpZHRoIC8gdGhpcy5vcHRpb25zLmdhbWUucm93Q291bnRcclxuICAgICAgICAvLyBTZXR1cCBsb2dpY1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IDBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRmxvdyBDb250cm9sc1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBmcmFtZXNGbG93LnJlbmRlcih0aGlzLnJlbmRlci5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgcGF1c2UgKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucGF1c2UoKVxyXG4gICAgfVxyXG4gICAgcGxheSAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5wbGF5KClcclxuICAgIH1cclxuICAgIGdvTmV4dFN0ZXAgKCkge1xyXG4gICAgICAgIHRoaXMuc3RlcCsrXHJcbiAgICAgICAgZm9yIChsZXQgcm93IG9mIHRoaXMuYm94ZXMpIGZvciAobGV0IGJveCBvZiByb3cpIGJveC5vblN0ZXBDaGFuZ2VkKClcclxuICAgICAgICB0aGlzLmluc2VydEJveFJvdygpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2FtZSBNZXRob2RzXHJcbiAgICBzaG9vdEJhbGwgKHN0YXJ0WCwgYW5nZWxWZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmJhbGxzLnB1c2gobmV3IEJhbGwodGhpcywgc3RhcnRYLCBhbmdlbFZlY3RvcikpXHJcbiAgICB9XHJcbiAgICByZW1vdmVCYWxsICh3aGljaCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5iYWxscy5pbmRleE9mKHdoaWNoKVxyXG4gICAgICAgIHdoaWNoID0gbnVsbCAvLyBVc2UgZ2FyYmFnZSBjb2xsZWN0b3IgdG8gcmVtb3ZlIHRoaXMgYmFsbCBmcm9tIG1lbW9yeVxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB0aGlzLmJhbGxzLnNwbGljZShpbmRleCwgMSlcclxuICAgIH1cclxuICAgIGluc2VydEJveFJvdyAoKSB7XHJcbiAgICAgICAgY29uc3QgY291bnRJblRoaXNSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5vcHRpb25zLmdhbWUucm93Q291bnQgLSAxKSkgKyAxXHJcbiAgICAgICAgY29uc3QgdXNlZEluZGV4ZXMgPSBbXVxyXG4gICAgICAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgICAgICAgbGV0IGluZGV4XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudEluVGhpc1JvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5vcHRpb25zLmdhbWUucm93Q291bnQpXHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHVzZWRJbmRleGVzLmluZGV4T2YoaW5kZXgpICE9PSAtMSlcclxuICAgICAgICAgICAgdXNlZEluZGV4ZXMucHVzaChpbmRleClcclxuICAgICAgICAgICAgcm93LnB1c2gobmV3IEJveCh0aGlzLCBpbmRleCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm94ZXMucHVzaChyb3cpXHJcbiAgICB9XHJcbiAgICByZW1vdmVCb3ggKHdoaWNoKSB7XHJcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSB3aGljaC5zdGVwIC0gMVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ib3hlc1tyb3dJbmRleF0uaW5kZXhPZih3aGljaClcclxuICAgICAgICB3aGljaCA9IG51bGwgLy8gVXNlIGdhcmJhZ2UgY29sbGVjdG9yIHRvIHJlbW92ZSB0aGlzIGJhbGwgZnJvbSBtZW1vcnlcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy5ib3hlc1tyb3dJbmRleF0uc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbmRlciBNZXRob2RzXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKVxyXG4gICAgICAgIHRoaXMuZHJhd0JhbGxzQW5kQm94ZXMoKVxyXG4gICAgICAgIHRoaXMuZHJhd0dyb3VuZCgpXHJcbiAgICB9XHJcbiAgICBjbGVhciAoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgZHJhd0dyb3VuZCAoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmdyb3VuZC5jb2xvclxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIHRoaXMuaGVpZ2h0IC0gdGhpcy5vcHRpb25zLmdyb3VuZC5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgZHJhd0JhbGxzQW5kQm94ZXMgKCkge1xyXG4gICAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmJveGVzKSBmb3IgKGxldCBib3ggb2Ygcm93KSBib3gucmVuZGVyKClcclxuICAgICAgICBmb3IgKGxldCBiYWxsIG9mIHRoaXMuYmFsbHMpIGJhbGwucmVuZGVyKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zcmMvR2FtZS5qcyIsImltcG9ydCBGcmFtZXNGbG93IGZyb20gJy4vY29tcG9uZW50cy9GcmFtZXNGbG93J1xuXG4vLyBkZWZpbmluZyBmcmFtZXNGbG93IGFzIGEgZ2xvYmFsIG9iamVjdFxuaWYgKCEod2luZG93LmZyYW1lc0Zsb3cgaW5zdGFuY2VvZiBGcmFtZXNGbG93KSkgeyAvLyBpZiBpdCBkaWRuJ3QgZGVmaW5lIGJlZm9yZVxuICAgIHdpbmRvdy5mcmFtZXNGbG93ID0gbmV3IEZyYW1lc0Zsb3coKVxufVxuXG4vLyBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IHdpbmRvdy5mcmFtZXNGbG93XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZyYW1lc2Zsb3cvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIEJhbGwge1xyXG4gICAgY29uc3RydWN0b3IgKGdhbWUsIHN0YXJ0WCwgdmVsb2NpdHlWZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lXHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmdhbWUuY3R4XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eVZlY3RvciA9IHZlbG9jaXR5VmVjdG9yXHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSB0aGlzLmdhbWUub3B0aW9ucy5iYWxscy5yYWRpdXNcclxuICAgICAgICB0aGlzLndlaWdodCA9IDFcclxuICAgICAgICB0aGlzLnggPSBzdGFydFhcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLmdhbWUubG93ZXN0WVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlICgpIHtcclxuICAgICAgICB0aGlzLmdhbWUucmVtb3ZlQmFsbCh0aGlzKVxyXG4gICAgfVxyXG4gICAgcmVmbGVjdCAocmVmbGVjdEFycikge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHlWZWN0b3JbMF0gKj0gcmVmbGVjdEFyclswXVxyXG4gICAgICAgIHRoaXMudmVsb2NpdHlWZWN0b3JbMV0gKj0gcmVmbGVjdEFyclsxXVxyXG4gICAgfVxyXG4gICAgY29tcHV0ZUNvbGxpc2lvbnMgKCkge1xyXG4gICAgICAgIC8vIFdhbGxzIENvbGxpc2lvbnNcclxuICAgICAgICBpZiAodGhpcy54ID49IHRoaXMuZ2FtZS5oaWdoZXN0WCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUuaGlnaGVzdFhcclxuICAgICAgICAgICAgdGhpcy5yZWZsZWN0KFstMSwgMV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnggPD0gdGhpcy5nYW1lLmxvd2VzdFgpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLmxvd2VzdFhcclxuICAgICAgICAgICAgdGhpcy5yZWZsZWN0KFstMSwgMV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnkgPD0gdGhpcy5nYW1lLmhpZ2hlc3RZKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZ2FtZS5oaWdoZXN0WVxyXG4gICAgICAgICAgICB0aGlzLnJlZmxlY3QoWzEsIC0xXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQm94ZXMgQ29sbGlzaW9uc1xyXG4gICAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmdhbWUuYm94ZXMpIGZvciAobGV0IGJveCBvZiByb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZsZWN0KGJveC5jaGVja0NvbGxpc2lvbldpdGgodGhpcykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcHV0ZUdyYXZpdHkgKCkge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHlWZWN0b3JbMV0gLT0gdGhpcy5nYW1lLm9wdGlvbnMuZ2FtZS5ncmF2aXR5XHJcbiAgICB9XHJcbiAgICBjaGVja0lmU2hvdWxkRGllICgpIHtcclxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5nYW1lLmxvd2VzdFkpIHRoaXMucmVtb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBNb3ZlcyBhbmQgQW5pbWF0aW9uXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlcygpXHJcbiAgICAgICAgdGhpcy5kcmF3KClcclxuICAgIH1cclxuICAgIGNoYW5nZXMgKCkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZUNvbGxpc2lvbnMoKVxyXG4gICAgICAgIHRoaXMuY29tcHV0ZUdyYXZpdHkoKVxyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZlbG9jaXR5VmVjdG9yWzBdXHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudmVsb2NpdHlWZWN0b3JbMV1cclxuICAgICAgICB0aGlzLmNoZWNrSWZTaG91bGREaWUoKVxyXG4gICAgfVxyXG4gICAgZHJhdyAoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKClcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5nYW1lLm9wdGlvbnMuYmFsbHMuY29sb3JcclxuICAgICAgICB0aGlzLmN0eC5maWxsKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zcmMvQmFsbC5qcyIsImNvbnN0IGNvbG9ycyA9IFtcclxuICAgICdyZWQnLFxyXG4gICAgJ2JsdWUnLFxyXG4gICAgJ21hZ2VudGEnLFxyXG4gICAgJ3llbGxvdydcclxuXVxyXG5sZXQgbGFzdENob3NlbkNvbG9ySW5kZXggPSAtMVxyXG5jb25zdCBuZXh0Q29sb3IgPSAoKSA9PiB7XHJcbiAgICBsYXN0Q2hvc2VuQ29sb3JJbmRleCsrXHJcbiAgICBpZiAobGFzdENob3NlbkNvbG9ySW5kZXggPT09IGNvbG9ycy5sZW5ndGgpIGxhc3RDaG9zZW5Db2xvckluZGV4ID0gMFxyXG4gICAgcmV0dXJuIGNvbG9yc1tsYXN0Q2hvc2VuQ29sb3JJbmRleF1cclxufVxyXG5cclxuY2xhc3MgQm94IHtcclxuICAgIGNvbnN0cnVjdG9yIChnYW1lLCBwbGFjZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuZ2FtZS5jdHhcclxuICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLmdhbWUuc3RlcFxyXG4gICAgICAgIHRoaXMucGxhY2UgPSBwbGFjZVxyXG4gICAgICAgIHRoaXMud2VpZ2h0ID0gM1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZ2FtZS5ib3hTaXplXHJcbiAgICAgICAgdGhpcy5jb2xvciA9IG5leHRDb2xvcigpXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt4OiB0aGlzLnBsYWNlICogdGhpcy5zaXplLCB5OiAwfVxyXG4gICAgICAgIHRoaXMucG9zaXRpb25PbkRpc3BsYXkgPSB7eDogdGhpcy5wb3NpdGlvbi54LCB5OiAtdGhpcy5zaXplfVxyXG4gICAgICAgIHRoaXMub25TdGVwQ2hhbmdlZCgpXHJcbiAgICB9XHJcbiAgICByZW1vdmUgKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5yZW1vdmVCb3godGhpcylcclxuICAgIH1cclxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aCAoYmFsbCkge1xyXG4gICAgICAgIGNvbnN0IGRpc3RYID0gTWF0aC5hYnMoYmFsbC54IC0gdGhpcy5wb3NpdGlvbk9uRGlzcGxheS54IC0gdGhpcy5zaXplLzIpXHJcbiAgICAgICAgY29uc3QgZGlzdFkgPSBNYXRoLmFicyhiYWxsLnkgLSB0aGlzLnBvc2l0aW9uT25EaXNwbGF5LnkgLSB0aGlzLnNpemUvMilcclxuICAgICAgICAvLyBJZiBubyBjb2xsaXNpb24gZGV0ZWN0ZWRcclxuICAgICAgICBpZiAoZGlzdFggPiAodGhpcy5zaXplLzIgKyBiYWxsLnJhZGl1cykpIHJldHVybiBbMSwgMV1cclxuICAgICAgICBpZiAoZGlzdFkgPiAodGhpcy5zaXplLzIgKyBiYWxsLnJhZGl1cykpIHJldHVybiBbMSwgMV1cclxuICAgICAgICAvLyBJZiBoYXMgY29sbGlzaW9uc1xyXG4gICAgICAgIHRoaXMub25CYWxsQ29sbGlzZWQoYmFsbClcclxuICAgICAgICBpZiAoZGlzdFkgPCB0aGlzLnNpemUvMikgcmV0dXJuIFstMSwgMV1cclxuICAgICAgICBpZiAoZGlzdFggPCB0aGlzLnNpemUvMikgcmV0dXJuIFsxLCAtMV1cclxuICAgICAgICAvLyBJZiBpdCBjb2xsaXNlZCB3aXRoIGEgY29ybmVyXHJcbiAgICAgICAgcmV0dXJuIFstMSwgLTFdXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTGlzdGVuZXJzXHJcbiAgICBvblN0ZXBDaGFuZ2VkICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSAoKHRoaXMuZ2FtZS5zdGVwIC0gdGhpcy5zdGVwKSAqIHRoaXMuc2l6ZSkgKyB0aGlzLnNpemVcclxuICAgIH1cclxuICAgIG9uQmFsbENvbGxpc2VkIChiYWxsKSB7XHJcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBNYXRoLm1heCgwLCB0aGlzLndlaWdodCAtIGJhbGwud2VpZ2h0KVxyXG4gICAgICAgIGlmICh0aGlzLndlaWdodCA9PT0gMCkgdGhpcy5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vdmVzIGFuZCBBbmltYXRpb25cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VzKClcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlcyAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbk9uRGlzcGxheS55ICs9ICh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uT25EaXNwbGF5LnkpIC8gMTBcclxuICAgIH1cclxuICAgIGRyYXcgKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3JcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uT25EaXNwbGF5LngsIHRoaXMucG9zaXRpb25PbkRpc3BsYXkueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zcmMvQm94LmpzIiwiaW1wb3J0ICdmcmFtZXNmbG93J1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2FwcC9zcmMvR2FtZSdcclxuXHJcbmNvbnN0IGJhbGx6ID0gd2luZG93LmJhbGx6ID0gbmV3IEdhbWUoJyNwbGF5Z3JvdW5kJylcclxuXHJcbmJhbGx6LnN0YXJ0KClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImltcG9ydCBSZW5kZXJlckFycmF5IGZyb20gJy4vUmVuZGVyZXJBcnJheSdcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyJ1xuXG4vLyBDb21wYXRpYmlsaXR5IGZvciBhbGwgYnJvd3NlcnMgLSBQYXVsIElyaXNoIHZlcnNpb25cbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XG4gICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKXtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApXG4gICAgICAgICAgfVxufSkoKVxuXG4vLyBGcmFtZXNGbG93XG5jbGFzcyBGcmFtZXNGbG93IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZnJhbWVzID0gMFxuICAgICAgICB0aGlzLl9mcHMgPSAzMFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW5pbXVtQWNjZXB0YWJsZUZQUzogMzBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcmVycyA9IG5ldyBSZW5kZXJlckFycmF5XG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UgPSB7XG4gICAgICAgICAgICBsb2dzOiBuZXcgQXJyYXkoMTAwKSxcbiAgICAgICAgICAgIGxvZ3NQb2ludGVyOiAwLFxuICAgICAgICAgICAgbGFzdFRpbWVTdGFtcDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGFzdEZyYW1lRlBTOiAzMCxcbiAgICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICAgICAgYXZlcmFnZToge1xuICAgICAgICAgICAgICAgIGZwczogMzAsXG4gICAgICAgICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXF1ZXN0TG9vcCgpXG4gICAgfVxuICAgIGdldCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmdldChpZClcbiAgICB9XG4gICAgZ2V0QWxsICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzXG4gICAgfVxuICAgIGdldEFsbEJ5Q2xhc3MgKGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnMuZmlsdGVyKHJlbmRlcmVyID0+IHJlbmRlcmVyLmNsYXNzID09IGNsYXNzTmFtZSlcbiAgICB9XG4gICAgcmVtb3ZlUmVuZGVyZXJCeUlkIChpZCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVycy5yZW1vdmUoaWQpXG4gICAgfVxuICAgIGNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlIChyYXRlLCBpc0dsb2JhbENoZWNrID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGVycm9yID0gbnVsbFxuICAgICAgICBjb25zdCBwb2ludGVyID0gaXNHbG9iYWxDaGVjayA/ICdhbnknIDogJ3RoaXMnXG4gICAgICAgIGlmIChyYXRlIDwgMCkgZXJyb3IgPSAnRlBTIG11c3Qgbm90IGJlIGEgbmVnYXRpdmUgbnVtYmVyISdcbiAgICAgICAgZWxzZSBpZiAocmF0ZSA8IDMwICYmIHJhdGUgPiAwICYmICgzMCAvIHJhdGUpICUgMSAhPT0gMCkgZXJyb3IgPSAnaWYgRlBTIGlzIGxlc3MgdGhhbiAzMGZwcywgaXQgaGF2ZSB0byBiZSBsaWtlIHRoaXM6ICgzMCAvIEZQUykgc2hvdWxkIGJlIGludGVnZXInXG4gICAgICAgIGVsc2UgaWYgKHJhdGUgPiAzMCAmJiByYXRlICUgMzAgIT09IDApIGVycm9yID0gJ2lmIEZQUyBpcyBtb3JlIHRoYW4gMzBmcHMsIGl0IGhhdmUgdG8gYmUgbGlrZSB0aGlzOiAoRlBTICUgMzAgPT0gMCknXG4gICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkgdGhyb3cgYGNhbid0IHNldCAke3JhdGV9ZnBzIGZvciB0aGlzIHJlbmRlcmVyLiBSRUFTT046IDwke2Vycm9yfT5gXG4gICAgfVxuICAgIGdldCBmcHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnBzXG4gICAgfVxuICAgIHNldCBmcHMgKG5ld0ZQUykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShyYXRlLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGF5QWxsICgpIHtcbiAgICAgICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5nZXRBbGxSZW5kZXJlcnMoKSkgcmVuZGVyZXIucGxheSgpXG4gICAgfVxuICAgIHBhdXNlQWxsICgpIHtcbiAgICAgICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5nZXRBbGxSZW5kZXJlcnMoKSkgcmVuZGVyZXIucGF1c2UoKVxuICAgIH1cbiAgICByZW5kZXIgKGNsYXNzTmFtZSwgZnVuYykge1xuICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmdW5jID0gY2xhc3NOYW1lXG4gICAgICAgICAgICBjbGFzc05hbWUgPSAnJ1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMsIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnJlbmRlcmVycy5sZW5ndGgsXG4gICAgICAgICAgICBjbGFzczogY2xhc3NOYW1lXG4gICAgICAgIH0sIGZ1bmMpXG4gICAgICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpXG4gICAgICAgIHJldHVybiByZW5kZXJlclxuICAgIH1cbiAgICBvbkxhZyAobWluaW11bUZQUywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtaW5pbXVtRlBTID09ICdmdW5jdGlvbicpIGNhbGxiYWNrID0gbWluaW11bUZQU1xuICAgICAgICBlbHNlIHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUyA9IG1pbmltdW1GUFNcbiAgICAgICAgdGhpcy5vbkxhZ0NhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB9XG4gICAgcmVnaXN0ZXJQZXJmb3JtYW5jZUxvZyAocmVuZGVyVGltZSkge1xuICAgICAgICAvLyBDYWxjdWxhdGluZyBmcHNcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPSAxMDAwIC8gcmVuZGVyVGltZVxuICAgICAgICAvLyBDYWxjdWxhdGluZyBsYWdzXG4gICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyA8IHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUykgaWYgKHR5cGVvZiB0aGlzLm9uTGFnQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHRoaXMub25MYWdDYWxsYmFjayh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUylcbiAgICAgICAgLy8gbG9nZ2luZ1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NbdGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlcl0gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQU1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyID0gKHRoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXIgKyAxKSAlIDEwMFxuICAgICAgICAvLyBhbmFseXppbmcgbG9nc1xuICAgICAgICB0aGlzLmFuYWx5emVQZXJmb3JtYW5jZSgpXG4gICAgfVxuICAgIGFuYWx5emVQZXJmb3JtYW5jZSAoKSB7XG4gICAgICAgIGNvbnN0IGFsbERhdGEgPSB0aGlzLnBlcmZvcm1hbmNlLmxvZ3MuZmlsdGVyKGRhdGEgPT4gdHlwZW9mIGRhdGEgPT0gJ251bWJlcicpXG4gICAgICAgIC8vIENhbGN1bGF0aW5nIGF2ZXJhZ2Ugb2YgZGF0YVxuICAgICAgICBsZXQgRlBTU3VtID0gMFxuICAgICAgICBmb3IgKGxldCBkYXRhIG9mIGFsbERhdGEpIEZQU1N1bSArPSBkYXRhXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgPSBGUFNTdW0gLyBhbGxEYXRhLmxlbmd0aFxuICAgICAgICAvLyBDYWxjdWxhdGluZyBwZXJmb3JtYW5jZSBwZXJjZW50YWdlXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UucmF0aW8gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyAvIDMwXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5yYXRpbyA9IHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgLyAzMFxuICAgICAgICAvLyBkZWZpbmluZyBzdGF0dXNcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUylcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLnN0YXR1cyA9IHRoaXMuX2dldFN0YXR1c09mRlBTKHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMpXG4gICAgfVxuICAgIF9nZXRTdGF0dXNPZkZQUyAoZnBzKSB7XG4gICAgICAgIGNvbnN0IHJhdGlvID0gZnBzIC8gdGhpcy5mcHNcbiAgICAgICAgbGV0IHN0YXR1cyA9IC0zIC8vIFdPUlNUXG4gICAgICAgIGlmIChyYXRpbyA+IDAuMykgc3RhdHVzID0gLTIgLy8gQkFEXG4gICAgICAgIGlmIChyYXRpbyA+IDAuNikgc3RhdHVzID0gLTEgLy8gTk9UIEJBRFxuICAgICAgICBpZiAocmF0aW8gPiAwLjkpIHN0YXR1cyA9IDAgLy8gT0tcbiAgICAgICAgaWYgKHJhdGlvID4gMS4zKSBzdGF0dXMgPSAxIC8vIEdPT0RcbiAgICAgICAgaWYgKHJhdGlvID4gMS42KSBzdGF0dXMgPSAyIC8vIEVYQ0VMTEVOVFxuICAgICAgICBpZiAocmF0aW8gPiAyKSBzdGF0dXMgPSAzIC8vIEJFU1RcbiAgICAgICAgcmV0dXJuIHN0YXR1c1xuICAgIH1cbiAgICByZXF1ZXN0TG9vcCAoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy5yZXF1ZXN0TG9vcC5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLmZyYW1lcysrXG4gICAgICAgIHRoaXMucmVuZGVyZXJzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIucmVuZGVyKCkpXG4gICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgIT09IHVuZGVmaW5lZCkgdGhpcy5yZWdpc3RlclBlcmZvcm1hbmNlTG9nKERhdGUubm93KCkgLSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXApXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCA9IERhdGUubm93KClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lc0Zsb3dcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9GcmFtZXNGbG93LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZnJhbWVzRmxvdywgb3B0aW9ucywgZnVuYykge1xuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgICAgICB0aGlzLmNsYXNzID0gb3B0aW9ucy5jbGFzcyB8fCAnJ1xuICAgICAgICB0aGlzLnByb3BzID0ge1xuICAgICAgICAgICAgaXNEZWJ1Z2luZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZyYW1lc0Zsb3cgPSBmcmFtZXNGbG93XG4gICAgICAgIHRoaXMuX2ZwcyA9IHVuZGVmaW5lZFxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jXG4gICAgICAgIHRoaXMuZnJhbWVzID0gMFxuICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IGZhbHNlXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG4gICAgLy8gUmVuZGVyIG5leHQgZnJhbWVcbiAgICBuZXh0ICgpIHtcbiAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSB0cnVlXG4gICAgfVxuICAgIHJlbW92ZSAoKSB7XG4gICAgICAgIHRoaXMuZnJhbWVzRmxvdy5yZW1vdmVSZW5kZXJlckJ5SWQodGhpcy5pZClcbiAgICB9XG4gICAgcGF1c2UgKCkge1xuICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSB0cnVlXG4gICAgfVxuICAgIHBsYXkgKCkge1xuICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSBmYWxzZVxuICAgIH1cbiAgICBzZXQgZnBzIChuZXdGUFMpIHtcbiAgICAgICAgaWYgKG5ld0ZQUyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLl9mcHMgPSBuZXdGUFNcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShuZXdGUFMpXG4gICAgICAgICAgICB0aGlzLl9mcHMgPSBuZXdGUFNcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBmcHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnBzIHx8IHRoaXMuZnJhbWVzRmxvdy5mcHNcbiAgICB9XG4gICAgc2hvdWxkUmVuZGVyVGhpc0ZyYW1lICgpIHtcbiAgICAgICAgLy8gYWxsIGNvbmRpdGlvbnMgdG8gcGF1c2Ugb3IgcGxheSByZW5kZXJpbmdcbiAgICAgICAgY29uc3QgY29uZGl0aW9ucyA9IFtcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmlzRGVidWdpbmcsXG4gICAgICAgICAgICB0aGlzLmZyYW1lc0Zsb3cuZnJhbWVzICUgKDMwIC8gTWF0aC5taW4odGhpcy5mcHMsIDMwKSkgPT0gMCxcbiAgICAgICAgXVxuICAgICAgICBsZXQgcmV0ID0gdHJ1ZVxuICAgICAgICBmb3IgKGxldCBjb25kIG9mIGNvbmRpdGlvbnMpIHJldCA9IHJldCAmJiBjb25kXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG4gICAgZ2V0RnJhbWVPYmplY3RUb1JldHVybiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZW5kZXJlcjogdGhpcyxcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLmZyYW1lcyxcbiAgICAgICAgICAgIGZwczogdGhpcy5mcHMsXG4gICAgICAgICAgICBwZXJmb3JtYW5jZToge1xuICAgICAgICAgICAgICAgIGZwczogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyxcbiAgICAgICAgICAgICAgICByYXRpbzogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnJhdGlvLFxuICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBhdmVyYWdlOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UuYXZlcmFnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlclRoaXNGcmFtZSgpIHx8IHRoaXMuc2hvdWxkR29OZXh0KSB7XG4gICAgICAgICAgICBsZXQgaXRlcmF0aW9uID0gMFxuICAgICAgICAgICAgaWYgKHRoaXMuZnBzID4gMzApIGl0ZXJhdGlvbiA9IChNYXRoLm1heCh0aGlzLmZwcywgMzApIC8gMzApXG4gICAgICAgICAgICBlbHNlIGl0ZXJhdGlvbiA9IDMwIC8gdGhpcy5mcHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lcysrXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZnVuYyh0aGlzLmdldEZyYW1lT2JqZWN0VG9SZXR1cm4oKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9SZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBSZW5kZXJlckFycmF5IHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdhcnJheScpIHRoaXMuYXJyID0gYXJnc1swXVxyXG4gICAgICAgIGVsc2UgdGhpcy5hcnIgPSBuZXcgQXJyYXkoLi4uYXJncylcclxuICAgIH1cclxuICAgIGdldCAoaSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycltpXVxyXG4gICAgfVxyXG4gICAgc2V0IChpLCB2YWwpIHtcclxuICAgICAgICB0aGlzLmFycltpXSA9IHZhbFxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBwdXNoICh2YWwpIHtcclxuICAgICAgICB0aGlzLmFyci5wdXNoKHZhbClcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlIChpKSB7XHJcbiAgICAgICAgdGhpcy5hcnJbaV0gPSB1bmRlZmluZWRcclxuICAgICAgICB0aGlzLmFyci5zcGxpY2UoaSwgMSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgZmlsdGVyIChjb25kRnVuYykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVuZGVyZXJBcnJheSh0aGlzLmFyci5maWx0ZXIoY29uZEZ1bmMpKVxyXG4gICAgfVxyXG4gICAgZWFjaCAoY2IpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYXJyKSBjYihpdGVtKVxyXG4gICAgfVxyXG4gICAgZ2V0IGxlbmd0aCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aFxyXG4gICAgfVxyXG4gICAgdG9BcnJheSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyXHJcbiAgICB9XHJcbiAgICBzZXQgZnBzIChuZXdGUFMpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIuZnBzID0gbmV3RlBTKVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlICgpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIucmVtb3ZlKCkpXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIubmV4dCgpKVxyXG4gICAgfVxyXG4gICAgcGF1c2UgKCkge1xyXG4gICAgICAgIHRoaXMuZWFjaChyZW5kZXJlciA9PiByZW5kZXJlci5wYXVzZSgpKVxyXG4gICAgfVxyXG4gICAgcGxheSAoKSB7XHJcbiAgICAgICAgdGhpcy5lYWNoKHJlbmRlcmVyID0+IHJlbmRlcmVyLnBsYXkoKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXJBcnJheVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mcmFtZXNmbG93L3NyYy9jb21wb25lbnRzL1JlbmRlcmVyQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==