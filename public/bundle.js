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
        // Let's play
        this.goNextStep();
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
            // Logic setup
            this.step = 0;
            this.isLocked = false;
            this.ballzCount = 1;
            this.onGroundBallX = this.width / 2;
            this.nextOnGroundBallX = -1;
            this.howManyShouldShoot = 0;
            this.shootAngle = [1, 1];
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
        key: 'throwBall',
        value: function throwBall(angleVector) {
            this.balls.push(new _Ball2.default(this, this.onGroundBallX, angleVector));
        }
    }, {
        key: 'shoot',
        value: function shoot(angleVector) {
            if (!this.isLocked) {
                this.isLocked = true;
                this.shootAngle = angleVector;
                this.howManyShouldShoot = this.step;
            }
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
        value: function render(frames) {
            this.clear();
            if (frames.index % 5 === 0 && this.howManyShouldShoot > 0) this.shootIfNeeded();
            this.drawBallsAndBoxes();
            this.drawGround();
        }
    }, {
        key: 'shootIfNeeded',
        value: function shootIfNeeded() {
            this.throwBall(this.shootAngle.slice(0));
            this.howManyShouldShoot--;
            if (this.howManyShouldShoot === 0) {
                if (this.nextOnGroundBallX !== -1) {
                    this.onGroundBallX = this.nextOnGroundBallX;
                    this.nextOnGroundBallX = -1;
                } else {
                    this.onGroundBallX = -1;
                }
            }
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
    }, {
        key: 'drawGround',
        value: function drawGround() {
            // Drawing onGround Ball
            if (this.onGroundBallX !== -1) {
                this.ctx.beginPath();
                this.ctx.arc(this.onGroundBallX, this.lowestY, this.options.balls.radius, 0, 2 * Math.PI, false);
                this.ctx.fillStyle = this.options.balls.color;
                this.ctx.fill();
            }
            if (this.nextOnGroundBallX !== -1) {
                this.ctx.beginPath();
                this.ctx.arc(this.nextOnGroundBallX, this.lowestY, this.options.balls.radius, 0, 2 * Math.PI, false);
                this.ctx.fillStyle = this.options.balls.color;
                this.ctx.fill();
            }
            // Drawing Ground
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
            this.velocityVector = null;
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
            var _this = this;

            if (this.y > this.game.lowestY) {
                if (this.game.onGroundBallX === -1) {
                    this.game.onGroundBallX = this.x;
                } else if (this.game.onGroundBallX !== -1 && this.game.nextOnGroundBallX === -1) {
                    this.game.nextOnGroundBallX = this.x;
                }
                this.remove();
                if (this.game.balls.length === 0) {
                    this.game.nextOnGroundBallX = -1;
                    this.game.goNextStep();
                    setTimeout(function () {
                        _this.game.isLocked = false;
                    }, 500);
                }
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
            this.position = null;
            this.positionOnDisplay = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjFkNzRmZjczNGJmYjg4MGViN2UiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9HYW1lLmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9CYWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9GcmFtZXNGbG93LmpzIiwid2VicGFjazovLy8uL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZyYW1lc2Zsb3cvc3JjL2NvbXBvbmVudHMvUmVuZGVyZXJBcnJheS5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwiZ2FtZSIsImJhY2tncm91bmQiLCJncmF2aXR5Iiwicm93Q291bnQiLCJncm91bmQiLCJoZWlnaHQiLCJjb2xvciIsImJhbGxzIiwicmFkaXVzIiwiR2FtZSIsInF1ZXJ5IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0eWxlIiwiaW5pdGFsaXplRHluYW1pY1ZhcmlhYmxlcyIsImJveGVzIiwiZ29OZXh0U3RlcCIsIndpZHRoIiwibG93ZXN0WCIsImhpZ2hlc3RYIiwibG93ZXN0WSIsImhpZ2hlc3RZIiwiYm94U2l6ZSIsInN0ZXAiLCJpc0xvY2tlZCIsImJhbGx6Q291bnQiLCJvbkdyb3VuZEJhbGxYIiwibmV4dE9uR3JvdW5kQmFsbFgiLCJob3dNYW55U2hvdWxkU2hvb3QiLCJzaG9vdEFuZ2xlIiwicmVuZGVyZXIiLCJmcmFtZXNGbG93IiwicmVuZGVyIiwiYmluZCIsInBhdXNlIiwicGxheSIsInJvdyIsImJveCIsIm9uU3RlcENoYW5nZWQiLCJpbnNlcnRCb3hSb3ciLCJhbmdsZVZlY3RvciIsInB1c2giLCJ3aGljaCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImNvdW50SW5UaGlzUm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidXNlZEluZGV4ZXMiLCJpIiwicm93SW5kZXgiLCJmcmFtZXMiLCJjbGVhciIsInNob290SWZOZWVkZWQiLCJkcmF3QmFsbHNBbmRCb3hlcyIsImRyYXdHcm91bmQiLCJ0aHJvd0JhbGwiLCJzbGljZSIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImZpbGxSZWN0IiwiYmFsbCIsIkJhbGwiLCJzdGFydFgiLCJ2ZWxvY2l0eVZlY3RvciIsIndlaWdodCIsIngiLCJ5IiwicmVtb3ZlQmFsbCIsInJlZmxlY3RBcnIiLCJyZWZsZWN0IiwiY2hlY2tDb2xsaXNpb25XaXRoIiwicmVtb3ZlIiwibGVuZ3RoIiwic2V0VGltZW91dCIsImNoYW5nZXMiLCJkcmF3IiwiY29tcHV0ZUNvbGxpc2lvbnMiLCJjb21wdXRlR3Jhdml0eSIsImNoZWNrSWZTaG91bGREaWUiLCJjb2xvcnMiLCJsYXN0Q2hvc2VuQ29sb3JJbmRleCIsIm5leHRDb2xvciIsIkJveCIsInBsYWNlIiwic2l6ZSIsInBvc2l0aW9uIiwicG9zaXRpb25PbkRpc3BsYXkiLCJyZW1vdmVCb3giLCJkaXN0WCIsImFicyIsImRpc3RZIiwib25CYWxsQ29sbGlzZWQiLCJtYXgiLCJiYWxseiIsIndpbmRvdyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVB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LFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUU7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFOzs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFIiwiZmlsZSI6Ii4vcHVibGljL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjFkNzRmZjczNGJmYjg4MGViN2UiLCJpbXBvcnQgQm94IGZyb20gJy4vQm94J1xyXG5pbXBvcnQgQmFsbCBmcm9tICcuL0JhbGwnXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgZ2FtZToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMzMzJyxcclxuICAgICAgICBncmF2aXR5OiAtMC4wMDEsXHJcbiAgICAgICAgcm93Q291bnQ6IDZcclxuICAgIH0sXHJcbiAgICBncm91bmQ6IHtcclxuICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICAgIGNvbG9yOiAnIzY2NidcclxuICAgIH0sXHJcbiAgICBiYWxsczoge1xyXG4gICAgICAgIHJhZGl1czogNSxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIC8vIE9wdGlvbnMgc2V0dXBcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXHJcbiAgICAgICAgLy8gQ2FudmFzIHNldHVwXHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLm9wdGlvbnMuZ2FtZS5iYWNrZ3JvdW5kXHJcbiAgICAgICAgLy8gRHluYW1pYyB2YXJpYWJsZXMgc2V0dXBcclxuICAgICAgICB0aGlzLmluaXRhbGl6ZUR5bmFtaWNWYXJpYWJsZXMoKVxyXG4gICAgICAgIC8vIEJveGVzIGFuZCBCYWxscyBhcnJheXNcclxuICAgICAgICB0aGlzLmJveGVzID0gW11cclxuICAgICAgICB0aGlzLmJhbGxzID0gW11cclxuICAgICAgICAvLyBMZXQncyBwbGF5XHJcbiAgICAgICAgdGhpcy5nb05leHRTdGVwKClcclxuICAgIH1cclxuICAgIGluaXRhbGl6ZUR5bmFtaWNWYXJpYWJsZXMgKCkge1xyXG4gICAgICAgIC8vIEdhbWUgc2l6ZVxyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0XHJcbiAgICAgICAgLy8gQmFsbHogYXJlYSBzaXplXHJcbiAgICAgICAgdGhpcy5sb3dlc3RYID0gdGhpcy5vcHRpb25zLmJhbGxzLnJhZGl1c1xyXG4gICAgICAgIHRoaXMuaGlnaGVzdFggPSB0aGlzLndpZHRoIC0gdGhpcy5vcHRpb25zLmJhbGxzLnJhZGl1c1xyXG4gICAgICAgIHRoaXMubG93ZXN0WSA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5vcHRpb25zLmdyb3VuZC5oZWlnaHQgLSB0aGlzLm9wdGlvbnMuYmFsbHMucmFkaXVzXHJcbiAgICAgICAgdGhpcy5oaWdoZXN0WSA9IHRoaXMub3B0aW9ucy5iYWxscy5yYWRpdXNcclxuICAgICAgICAvLyBCb3ggRHluYW1pYyB2YXJzXHJcbiAgICAgICAgdGhpcy5ib3hTaXplID0gdGhpcy53aWR0aCAvIHRoaXMub3B0aW9ucy5nYW1lLnJvd0NvdW50XHJcbiAgICAgICAgLy8gTG9naWMgc2V0dXBcclxuICAgICAgICB0aGlzLnN0ZXAgPSAwXHJcbiAgICAgICAgdGhpcy5pc0xvY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5iYWxsekNvdW50ID0gMVxyXG4gICAgICAgIHRoaXMub25Hcm91bmRCYWxsWCA9IHRoaXMud2lkdGgvMlxyXG4gICAgICAgIHRoaXMubmV4dE9uR3JvdW5kQmFsbFggPSAtMVxyXG4gICAgICAgIHRoaXMuaG93TWFueVNob3VsZFNob290ID0gMFxyXG4gICAgICAgIHRoaXMuc2hvb3RBbmdsZSA9IFsxLCAxXVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBGbG93IENvbnRyb2xzXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IGZyYW1lc0Zsb3cucmVuZGVyKHRoaXMucmVuZGVyLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICBwYXVzZSAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5wYXVzZSgpXHJcbiAgICB9XHJcbiAgICBwbGF5ICgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnBsYXkoKVxyXG4gICAgfVxyXG4gICAgZ29OZXh0U3RlcCAoKSB7XHJcbiAgICAgICAgdGhpcy5zdGVwKytcclxuICAgICAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5ib3hlcykgZm9yIChsZXQgYm94IG9mIHJvdykgYm94Lm9uU3RlcENoYW5nZWQoKVxyXG4gICAgICAgIHRoaXMuaW5zZXJ0Qm94Um93KClcclxuICAgIH1cclxuXHJcbiAgICAvLyBHYW1lIE1ldGhvZHNcclxuICAgIHRocm93QmFsbCAoYW5nbGVWZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmJhbGxzLnB1c2gobmV3IEJhbGwodGhpcywgdGhpcy5vbkdyb3VuZEJhbGxYLCBhbmdsZVZlY3RvcikpXHJcbiAgICB9XHJcbiAgICBzaG9vdCAoYW5nbGVWZWN0b3IpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMb2NrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvY2tlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zaG9vdEFuZ2xlID0gYW5nbGVWZWN0b3JcclxuICAgICAgICAgICAgdGhpcy5ob3dNYW55U2hvdWxkU2hvb3QgPSB0aGlzLnN0ZXBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCYWxsICh3aGljaCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5iYWxscy5pbmRleE9mKHdoaWNoKVxyXG4gICAgICAgIHdoaWNoID0gbnVsbCAvLyBVc2UgZ2FyYmFnZSBjb2xsZWN0b3IgdG8gcmVtb3ZlIHRoaXMgYmFsbCBmcm9tIG1lbW9yeVxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB0aGlzLmJhbGxzLnNwbGljZShpbmRleCwgMSlcclxuICAgIH1cclxuICAgIGluc2VydEJveFJvdyAoKSB7XHJcbiAgICAgICAgY29uc3QgY291bnRJblRoaXNSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5vcHRpb25zLmdhbWUucm93Q291bnQgLSAxKSkgKyAxXHJcbiAgICAgICAgY29uc3QgdXNlZEluZGV4ZXMgPSBbXVxyXG4gICAgICAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgICAgICAgbGV0IGluZGV4XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudEluVGhpc1JvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5vcHRpb25zLmdhbWUucm93Q291bnQpXHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHVzZWRJbmRleGVzLmluZGV4T2YoaW5kZXgpICE9PSAtMSlcclxuICAgICAgICAgICAgdXNlZEluZGV4ZXMucHVzaChpbmRleClcclxuICAgICAgICAgICAgcm93LnB1c2gobmV3IEJveCh0aGlzLCBpbmRleCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm94ZXMucHVzaChyb3cpXHJcbiAgICB9XHJcbiAgICByZW1vdmVCb3ggKHdoaWNoKSB7XHJcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSB3aGljaC5zdGVwIC0gMVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ib3hlc1tyb3dJbmRleF0uaW5kZXhPZih3aGljaClcclxuICAgICAgICB3aGljaCA9IG51bGwgLy8gVXNlIGdhcmJhZ2UgY29sbGVjdG9yIHRvIHJlbW92ZSB0aGlzIGJhbGwgZnJvbSBtZW1vcnlcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy5ib3hlc1tyb3dJbmRleF0uc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbmRlciBNZXRob2RzXHJcbiAgICByZW5kZXIgKGZyYW1lcykge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKVxyXG4gICAgICAgIGlmIChmcmFtZXMuaW5kZXggJSA1ID09PSAwICYmIHRoaXMuaG93TWFueVNob3VsZFNob290ID4gMCkgdGhpcy5zaG9vdElmTmVlZGVkKClcclxuICAgICAgICB0aGlzLmRyYXdCYWxsc0FuZEJveGVzKClcclxuICAgICAgICB0aGlzLmRyYXdHcm91bmQoKVxyXG4gICAgfVxyXG4gICAgc2hvb3RJZk5lZWRlZCAoKSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0JhbGwodGhpcy5zaG9vdEFuZ2xlLnNsaWNlKDApKVxyXG4gICAgICAgIHRoaXMuaG93TWFueVNob3VsZFNob290LS1cclxuICAgICAgICBpZiAodGhpcy5ob3dNYW55U2hvdWxkU2hvb3QgPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmV4dE9uR3JvdW5kQmFsbFggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR3JvdW5kQmFsbFggPSB0aGlzLm5leHRPbkdyb3VuZEJhbGxYXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRPbkdyb3VuZEJhbGxYID0gLTFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Hcm91bmRCYWxsWCA9IC0xXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhciAoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgZHJhd0dyb3VuZCAoKSB7XHJcbiAgICAgICAgLy8gRHJhd2luZyBvbkdyb3VuZCBCYWxsXHJcbiAgICAgICAgaWYgKHRoaXMub25Hcm91bmRCYWxsWCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKClcclxuICAgICAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMub25Hcm91bmRCYWxsWCwgdGhpcy5sb3dlc3RZLCB0aGlzLm9wdGlvbnMuYmFsbHMucmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5iYWxscy5jb2xvclxyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dE9uR3JvdW5kQmFsbFggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLm5leHRPbkdyb3VuZEJhbGxYLCB0aGlzLmxvd2VzdFksIHRoaXMub3B0aW9ucy5iYWxscy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmJhbGxzLmNvbG9yXHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEcmF3aW5nIEdyb3VuZFxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5ncm91bmQuY29sb3JcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCB0aGlzLmhlaWdodCAtIHRoaXMub3B0aW9ucy5ncm91bmQuaGVpZ2h0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgIH1cclxuICAgIGRyYXdCYWxsc0FuZEJveGVzICgpIHtcclxuICAgICAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5ib3hlcykgZm9yIChsZXQgYm94IG9mIHJvdykgYm94LnJlbmRlcigpXHJcbiAgICAgICAgZm9yIChsZXQgYmFsbCBvZiB0aGlzLmJhbGxzKSBiYWxsLnJlbmRlcigpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc3JjL0dhbWUuanMiLCJpbXBvcnQgRnJhbWVzRmxvdyBmcm9tICcuL2NvbXBvbmVudHMvRnJhbWVzRmxvdydcblxuLy8gZGVmaW5pbmcgZnJhbWVzRmxvdyBhcyBhIGdsb2JhbCBvYmplY3RcbmlmICghKHdpbmRvdy5mcmFtZXNGbG93IGluc3RhbmNlb2YgRnJhbWVzRmxvdykpIHsgLy8gaWYgaXQgZGlkbid0IGRlZmluZSBiZWZvcmVcbiAgICB3aW5kb3cuZnJhbWVzRmxvdyA9IG5ldyBGcmFtZXNGbG93KClcbn1cblxuLy8gZXhwb3J0XG5leHBvcnQgZGVmYXVsdCB3aW5kb3cuZnJhbWVzRmxvd1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mcmFtZXNmbG93L3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBCYWxsIHtcclxuICAgIGNvbnN0cnVjdG9yIChnYW1lLCBzdGFydFgsIHZlbG9jaXR5VmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5nYW1lLmN0eFxyXG4gICAgICAgIHRoaXMudmVsb2NpdHlWZWN0b3IgPSB2ZWxvY2l0eVZlY3RvclxyXG4gICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5nYW1lLm9wdGlvbnMuYmFsbHMucmFkaXVzXHJcbiAgICAgICAgdGhpcy53ZWlnaHQgPSAxXHJcbiAgICAgICAgdGhpcy54ID0gc3RhcnRYXHJcbiAgICAgICAgdGhpcy55ID0gdGhpcy5nYW1lLmxvd2VzdFlcclxuICAgIH1cclxuICAgIHJlbW92ZSAoKSB7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eVZlY3RvciA9IG51bGxcclxuICAgICAgICB0aGlzLmdhbWUucmVtb3ZlQmFsbCh0aGlzKVxyXG4gICAgfVxyXG4gICAgcmVmbGVjdCAocmVmbGVjdEFycikge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHlWZWN0b3JbMF0gKj0gcmVmbGVjdEFyclswXVxyXG4gICAgICAgIHRoaXMudmVsb2NpdHlWZWN0b3JbMV0gKj0gcmVmbGVjdEFyclsxXVxyXG4gICAgfVxyXG4gICAgY29tcHV0ZUNvbGxpc2lvbnMgKCkge1xyXG4gICAgICAgIC8vIFdhbGxzIENvbGxpc2lvbnNcclxuICAgICAgICBpZiAodGhpcy54ID49IHRoaXMuZ2FtZS5oaWdoZXN0WCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUuaGlnaGVzdFhcclxuICAgICAgICAgICAgdGhpcy5yZWZsZWN0KFstMSwgMV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnggPD0gdGhpcy5nYW1lLmxvd2VzdFgpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLmxvd2VzdFhcclxuICAgICAgICAgICAgdGhpcy5yZWZsZWN0KFstMSwgMV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnkgPD0gdGhpcy5nYW1lLmhpZ2hlc3RZKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZ2FtZS5oaWdoZXN0WVxyXG4gICAgICAgICAgICB0aGlzLnJlZmxlY3QoWzEsIC0xXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQm94ZXMgQ29sbGlzaW9uc1xyXG4gICAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmdhbWUuYm94ZXMpIGZvciAobGV0IGJveCBvZiByb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZsZWN0KGJveC5jaGVja0NvbGxpc2lvbldpdGgodGhpcykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcHV0ZUdyYXZpdHkgKCkge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHlWZWN0b3JbMV0gLT0gdGhpcy5nYW1lLm9wdGlvbnMuZ2FtZS5ncmF2aXR5XHJcbiAgICB9XHJcbiAgICBjaGVja0lmU2hvdWxkRGllICgpIHtcclxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5nYW1lLmxvd2VzdFkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5vbkdyb3VuZEJhbGxYID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm9uR3JvdW5kQmFsbFggPSB0aGlzLnhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmdhbWUub25Hcm91bmRCYWxsWCAhPT0gLTEgJiYgdGhpcy5nYW1lLm5leHRPbkdyb3VuZEJhbGxYID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm5leHRPbkdyb3VuZEJhbGxYID0gdGhpcy54XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmJhbGxzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm5leHRPbkdyb3VuZEJhbGxYID0gLTFcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5nb05leHRTdGVwKClcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuaXNMb2NrZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vdmVzIGFuZCBBbmltYXRpb25cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VzKClcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlcyAoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlQ29sbGlzaW9ucygpXHJcbiAgICAgICAgdGhpcy5jb21wdXRlR3Jhdml0eSgpXHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHlWZWN0b3JbMF1cclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eVZlY3RvclsxXVxyXG4gICAgICAgIHRoaXMuY2hlY2tJZlNob3VsZERpZSgpXHJcbiAgICB9XHJcbiAgICBkcmF3ICgpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSlcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmdhbWUub3B0aW9ucy5iYWxscy5jb2xvclxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWxsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NyYy9CYWxsLmpzIiwiY29uc3QgY29sb3JzID0gW1xyXG4gICAgJ3JlZCcsXHJcbiAgICAnYmx1ZScsXHJcbiAgICAnbWFnZW50YScsXHJcbiAgICAneWVsbG93J1xyXG5dXHJcbmxldCBsYXN0Q2hvc2VuQ29sb3JJbmRleCA9IC0xXHJcbmNvbnN0IG5leHRDb2xvciA9ICgpID0+IHtcclxuICAgIGxhc3RDaG9zZW5Db2xvckluZGV4KytcclxuICAgIGlmIChsYXN0Q2hvc2VuQ29sb3JJbmRleCA9PT0gY29sb3JzLmxlbmd0aCkgbGFzdENob3NlbkNvbG9ySW5kZXggPSAwXHJcbiAgICByZXR1cm4gY29sb3JzW2xhc3RDaG9zZW5Db2xvckluZGV4XVxyXG59XHJcblxyXG5jbGFzcyBCb3gge1xyXG4gICAgY29uc3RydWN0b3IgKGdhbWUsIHBsYWNlKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5nYW1lLmN0eFxyXG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMuZ2FtZS5zdGVwXHJcbiAgICAgICAgdGhpcy5wbGFjZSA9IHBsYWNlXHJcbiAgICAgICAgdGhpcy53ZWlnaHQgPSAzXHJcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5nYW1lLmJveFNpemVcclxuICAgICAgICB0aGlzLmNvbG9yID0gbmV4dENvbG9yKClcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge3g6IHRoaXMucGxhY2UgKiB0aGlzLnNpemUsIHk6IDB9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbk9uRGlzcGxheSA9IHt4OiB0aGlzLnBvc2l0aW9uLngsIHk6IC10aGlzLnNpemV9XHJcbiAgICAgICAgdGhpcy5vblN0ZXBDaGFuZ2VkKClcclxuICAgIH1cclxuICAgIHJlbW92ZSAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG51bGxcclxuICAgICAgICB0aGlzLnBvc2l0aW9uT25EaXNwbGF5ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuZ2FtZS5yZW1vdmVCb3godGhpcylcclxuICAgIH1cclxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aCAoYmFsbCkge1xyXG4gICAgICAgIGNvbnN0IGRpc3RYID0gTWF0aC5hYnMoYmFsbC54IC0gdGhpcy5wb3NpdGlvbk9uRGlzcGxheS54IC0gdGhpcy5zaXplLzIpXHJcbiAgICAgICAgY29uc3QgZGlzdFkgPSBNYXRoLmFicyhiYWxsLnkgLSB0aGlzLnBvc2l0aW9uT25EaXNwbGF5LnkgLSB0aGlzLnNpemUvMilcclxuICAgICAgICAvLyBJZiBubyBjb2xsaXNpb24gZGV0ZWN0ZWRcclxuICAgICAgICBpZiAoZGlzdFggPiAodGhpcy5zaXplLzIgKyBiYWxsLnJhZGl1cykpIHJldHVybiBbMSwgMV1cclxuICAgICAgICBpZiAoZGlzdFkgPiAodGhpcy5zaXplLzIgKyBiYWxsLnJhZGl1cykpIHJldHVybiBbMSwgMV1cclxuICAgICAgICAvLyBJZiBoYXMgY29sbGlzaW9uc1xyXG4gICAgICAgIHRoaXMub25CYWxsQ29sbGlzZWQoYmFsbClcclxuICAgICAgICBpZiAoZGlzdFkgPCB0aGlzLnNpemUvMikgcmV0dXJuIFstMSwgMV1cclxuICAgICAgICBpZiAoZGlzdFggPCB0aGlzLnNpemUvMikgcmV0dXJuIFsxLCAtMV1cclxuICAgICAgICAvLyBJZiBpdCBjb2xsaXNlZCB3aXRoIGEgY29ybmVyXHJcbiAgICAgICAgcmV0dXJuIFstMSwgLTFdXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTGlzdGVuZXJzXHJcbiAgICBvblN0ZXBDaGFuZ2VkICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSAoKHRoaXMuZ2FtZS5zdGVwIC0gdGhpcy5zdGVwKSAqIHRoaXMuc2l6ZSkgKyB0aGlzLnNpemVcclxuICAgIH1cclxuICAgIG9uQmFsbENvbGxpc2VkIChiYWxsKSB7XHJcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBNYXRoLm1heCgwLCB0aGlzLndlaWdodCAtIGJhbGwud2VpZ2h0KVxyXG4gICAgICAgIGlmICh0aGlzLndlaWdodCA9PT0gMCkgdGhpcy5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vdmVzIGFuZCBBbmltYXRpb25cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VzKClcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlcyAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbk9uRGlzcGxheS55ICs9ICh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uT25EaXNwbGF5LnkpIC8gMTBcclxuICAgIH1cclxuICAgIGRyYXcgKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3JcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uT25EaXNwbGF5LngsIHRoaXMucG9zaXRpb25PbkRpc3BsYXkueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zcmMvQm94LmpzIiwiaW1wb3J0ICdmcmFtZXNmbG93J1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2FwcC9zcmMvR2FtZSdcclxuXHJcbmNvbnN0IGJhbGx6ID0gd2luZG93LmJhbGx6ID0gbmV3IEdhbWUoJyNwbGF5Z3JvdW5kJylcclxuXHJcbmJhbGx6LnN0YXJ0KClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImltcG9ydCBSZW5kZXJlckFycmF5IGZyb20gJy4vUmVuZGVyZXJBcnJheSdcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyJ1xuXG4vLyBDb21wYXRpYmlsaXR5IGZvciBhbGwgYnJvd3NlcnMgLSBQYXVsIElyaXNoIHZlcnNpb25cbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XG4gICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKXtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApXG4gICAgICAgICAgfVxufSkoKVxuXG4vLyBGcmFtZXNGbG93XG5jbGFzcyBGcmFtZXNGbG93IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZnJhbWVzID0gMFxuICAgICAgICB0aGlzLl9mcHMgPSAzMFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW5pbXVtQWNjZXB0YWJsZUZQUzogMzBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcmVycyA9IG5ldyBSZW5kZXJlckFycmF5XG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UgPSB7XG4gICAgICAgICAgICBsb2dzOiBuZXcgQXJyYXkoMTAwKSxcbiAgICAgICAgICAgIGxvZ3NQb2ludGVyOiAwLFxuICAgICAgICAgICAgbGFzdFRpbWVTdGFtcDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGFzdEZyYW1lRlBTOiAzMCxcbiAgICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICAgICAgYXZlcmFnZToge1xuICAgICAgICAgICAgICAgIGZwczogMzAsXG4gICAgICAgICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXF1ZXN0TG9vcCgpXG4gICAgfVxuICAgIGdldCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmdldChpZClcbiAgICB9XG4gICAgZ2V0QWxsICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzXG4gICAgfVxuICAgIGdldEFsbEJ5Q2xhc3MgKGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnMuZmlsdGVyKHJlbmRlcmVyID0+IHJlbmRlcmVyLmNsYXNzID09IGNsYXNzTmFtZSlcbiAgICB9XG4gICAgcmVtb3ZlUmVuZGVyZXJCeUlkIChpZCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVycy5yZW1vdmUoaWQpXG4gICAgfVxuICAgIGNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlIChyYXRlLCBpc0dsb2JhbENoZWNrID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGVycm9yID0gbnVsbFxuICAgICAgICBjb25zdCBwb2ludGVyID0gaXNHbG9iYWxDaGVjayA/ICdhbnknIDogJ3RoaXMnXG4gICAgICAgIGlmIChyYXRlIDwgMCkgZXJyb3IgPSAnRlBTIG11c3Qgbm90IGJlIGEgbmVnYXRpdmUgbnVtYmVyISdcbiAgICAgICAgZWxzZSBpZiAocmF0ZSA8IDMwICYmIHJhdGUgPiAwICYmICgzMCAvIHJhdGUpICUgMSAhPT0gMCkgZXJyb3IgPSAnaWYgRlBTIGlzIGxlc3MgdGhhbiAzMGZwcywgaXQgaGF2ZSB0byBiZSBsaWtlIHRoaXM6ICgzMCAvIEZQUykgc2hvdWxkIGJlIGludGVnZXInXG4gICAgICAgIGVsc2UgaWYgKHJhdGUgPiAzMCAmJiByYXRlICUgMzAgIT09IDApIGVycm9yID0gJ2lmIEZQUyBpcyBtb3JlIHRoYW4gMzBmcHMsIGl0IGhhdmUgdG8gYmUgbGlrZSB0aGlzOiAoRlBTICUgMzAgPT0gMCknXG4gICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkgdGhyb3cgYGNhbid0IHNldCAke3JhdGV9ZnBzIGZvciB0aGlzIHJlbmRlcmVyLiBSRUFTT046IDwke2Vycm9yfT5gXG4gICAgfVxuICAgIGdldCBmcHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnBzXG4gICAgfVxuICAgIHNldCBmcHMgKG5ld0ZQUykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShyYXRlLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGF5QWxsICgpIHtcbiAgICAgICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5nZXRBbGxSZW5kZXJlcnMoKSkgcmVuZGVyZXIucGxheSgpXG4gICAgfVxuICAgIHBhdXNlQWxsICgpIHtcbiAgICAgICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5nZXRBbGxSZW5kZXJlcnMoKSkgcmVuZGVyZXIucGF1c2UoKVxuICAgIH1cbiAgICByZW5kZXIgKGNsYXNzTmFtZSwgZnVuYykge1xuICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmdW5jID0gY2xhc3NOYW1lXG4gICAgICAgICAgICBjbGFzc05hbWUgPSAnJ1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMsIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnJlbmRlcmVycy5sZW5ndGgsXG4gICAgICAgICAgICBjbGFzczogY2xhc3NOYW1lXG4gICAgICAgIH0sIGZ1bmMpXG4gICAgICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpXG4gICAgICAgIHJldHVybiByZW5kZXJlclxuICAgIH1cbiAgICBvbkxhZyAobWluaW11bUZQUywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtaW5pbXVtRlBTID09ICdmdW5jdGlvbicpIGNhbGxiYWNrID0gbWluaW11bUZQU1xuICAgICAgICBlbHNlIHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUyA9IG1pbmltdW1GUFNcbiAgICAgICAgdGhpcy5vbkxhZ0NhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB9XG4gICAgcmVnaXN0ZXJQZXJmb3JtYW5jZUxvZyAocmVuZGVyVGltZSkge1xuICAgICAgICAvLyBDYWxjdWxhdGluZyBmcHNcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPSAxMDAwIC8gcmVuZGVyVGltZVxuICAgICAgICAvLyBDYWxjdWxhdGluZyBsYWdzXG4gICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyA8IHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUykgaWYgKHR5cGVvZiB0aGlzLm9uTGFnQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHRoaXMub25MYWdDYWxsYmFjayh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUylcbiAgICAgICAgLy8gbG9nZ2luZ1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NbdGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlcl0gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQU1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyID0gKHRoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXIgKyAxKSAlIDEwMFxuICAgICAgICAvLyBhbmFseXppbmcgbG9nc1xuICAgICAgICB0aGlzLmFuYWx5emVQZXJmb3JtYW5jZSgpXG4gICAgfVxuICAgIGFuYWx5emVQZXJmb3JtYW5jZSAoKSB7XG4gICAgICAgIGNvbnN0IGFsbERhdGEgPSB0aGlzLnBlcmZvcm1hbmNlLmxvZ3MuZmlsdGVyKGRhdGEgPT4gdHlwZW9mIGRhdGEgPT0gJ251bWJlcicpXG4gICAgICAgIC8vIENhbGN1bGF0aW5nIGF2ZXJhZ2Ugb2YgZGF0YVxuICAgICAgICBsZXQgRlBTU3VtID0gMFxuICAgICAgICBmb3IgKGxldCBkYXRhIG9mIGFsbERhdGEpIEZQU1N1bSArPSBkYXRhXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgPSBGUFNTdW0gLyBhbGxEYXRhLmxlbmd0aFxuICAgICAgICAvLyBDYWxjdWxhdGluZyBwZXJmb3JtYW5jZSBwZXJjZW50YWdlXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UucmF0aW8gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyAvIDMwXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5yYXRpbyA9IHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgLyAzMFxuICAgICAgICAvLyBkZWZpbmluZyBzdGF0dXNcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUylcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLnN0YXR1cyA9IHRoaXMuX2dldFN0YXR1c09mRlBTKHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMpXG4gICAgfVxuICAgIF9nZXRTdGF0dXNPZkZQUyAoZnBzKSB7XG4gICAgICAgIGNvbnN0IHJhdGlvID0gZnBzIC8gdGhpcy5mcHNcbiAgICAgICAgbGV0IHN0YXR1cyA9IC0zIC8vIFdPUlNUXG4gICAgICAgIGlmIChyYXRpbyA+IDAuMykgc3RhdHVzID0gLTIgLy8gQkFEXG4gICAgICAgIGlmIChyYXRpbyA+IDAuNikgc3RhdHVzID0gLTEgLy8gTk9UIEJBRFxuICAgICAgICBpZiAocmF0aW8gPiAwLjkpIHN0YXR1cyA9IDAgLy8gT0tcbiAgICAgICAgaWYgKHJhdGlvID4gMS4zKSBzdGF0dXMgPSAxIC8vIEdPT0RcbiAgICAgICAgaWYgKHJhdGlvID4gMS42KSBzdGF0dXMgPSAyIC8vIEVYQ0VMTEVOVFxuICAgICAgICBpZiAocmF0aW8gPiAyKSBzdGF0dXMgPSAzIC8vIEJFU1RcbiAgICAgICAgcmV0dXJuIHN0YXR1c1xuICAgIH1cbiAgICByZXF1ZXN0TG9vcCAoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy5yZXF1ZXN0TG9vcC5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLmZyYW1lcysrXG4gICAgICAgIHRoaXMucmVuZGVyZXJzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIucmVuZGVyKCkpXG4gICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgIT09IHVuZGVmaW5lZCkgdGhpcy5yZWdpc3RlclBlcmZvcm1hbmNlTG9nKERhdGUubm93KCkgLSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXApXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCA9IERhdGUubm93KClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lc0Zsb3dcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9GcmFtZXNGbG93LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZnJhbWVzRmxvdywgb3B0aW9ucywgZnVuYykge1xuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgICAgICB0aGlzLmNsYXNzID0gb3B0aW9ucy5jbGFzcyB8fCAnJ1xuICAgICAgICB0aGlzLnByb3BzID0ge1xuICAgICAgICAgICAgaXNEZWJ1Z2luZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZyYW1lc0Zsb3cgPSBmcmFtZXNGbG93XG4gICAgICAgIHRoaXMuX2ZwcyA9IHVuZGVmaW5lZFxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jXG4gICAgICAgIHRoaXMuZnJhbWVzID0gMFxuICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IGZhbHNlXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG4gICAgLy8gUmVuZGVyIG5leHQgZnJhbWVcbiAgICBuZXh0ICgpIHtcbiAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSB0cnVlXG4gICAgfVxuICAgIHJlbW92ZSAoKSB7XG4gICAgICAgIHRoaXMuZnJhbWVzRmxvdy5yZW1vdmVSZW5kZXJlckJ5SWQodGhpcy5pZClcbiAgICB9XG4gICAgcGF1c2UgKCkge1xuICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSB0cnVlXG4gICAgfVxuICAgIHBsYXkgKCkge1xuICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSBmYWxzZVxuICAgIH1cbiAgICBzZXQgZnBzIChuZXdGUFMpIHtcbiAgICAgICAgaWYgKG5ld0ZQUyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLl9mcHMgPSBuZXdGUFNcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShuZXdGUFMpXG4gICAgICAgICAgICB0aGlzLl9mcHMgPSBuZXdGUFNcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBmcHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnBzIHx8IHRoaXMuZnJhbWVzRmxvdy5mcHNcbiAgICB9XG4gICAgc2hvdWxkUmVuZGVyVGhpc0ZyYW1lICgpIHtcbiAgICAgICAgLy8gYWxsIGNvbmRpdGlvbnMgdG8gcGF1c2Ugb3IgcGxheSByZW5kZXJpbmdcbiAgICAgICAgY29uc3QgY29uZGl0aW9ucyA9IFtcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmlzRGVidWdpbmcsXG4gICAgICAgICAgICB0aGlzLmZyYW1lc0Zsb3cuZnJhbWVzICUgKDMwIC8gTWF0aC5taW4odGhpcy5mcHMsIDMwKSkgPT0gMCxcbiAgICAgICAgXVxuICAgICAgICBsZXQgcmV0ID0gdHJ1ZVxuICAgICAgICBmb3IgKGxldCBjb25kIG9mIGNvbmRpdGlvbnMpIHJldCA9IHJldCAmJiBjb25kXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG4gICAgZ2V0RnJhbWVPYmplY3RUb1JldHVybiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZW5kZXJlcjogdGhpcyxcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLmZyYW1lcyxcbiAgICAgICAgICAgIGZwczogdGhpcy5mcHMsXG4gICAgICAgICAgICBwZXJmb3JtYW5jZToge1xuICAgICAgICAgICAgICAgIGZwczogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyxcbiAgICAgICAgICAgICAgICByYXRpbzogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnJhdGlvLFxuICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBhdmVyYWdlOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UuYXZlcmFnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlclRoaXNGcmFtZSgpIHx8IHRoaXMuc2hvdWxkR29OZXh0KSB7XG4gICAgICAgICAgICBsZXQgaXRlcmF0aW9uID0gMFxuICAgICAgICAgICAgaWYgKHRoaXMuZnBzID4gMzApIGl0ZXJhdGlvbiA9IChNYXRoLm1heCh0aGlzLmZwcywgMzApIC8gMzApXG4gICAgICAgICAgICBlbHNlIGl0ZXJhdGlvbiA9IDMwIC8gdGhpcy5mcHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lcysrXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZnVuYyh0aGlzLmdldEZyYW1lT2JqZWN0VG9SZXR1cm4oKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnJhbWVzZmxvdy9zcmMvY29tcG9uZW50cy9SZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBSZW5kZXJlckFycmF5IHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdhcnJheScpIHRoaXMuYXJyID0gYXJnc1swXVxyXG4gICAgICAgIGVsc2UgdGhpcy5hcnIgPSBuZXcgQXJyYXkoLi4uYXJncylcclxuICAgIH1cclxuICAgIGdldCAoaSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycltpXVxyXG4gICAgfVxyXG4gICAgc2V0IChpLCB2YWwpIHtcclxuICAgICAgICB0aGlzLmFycltpXSA9IHZhbFxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBwdXNoICh2YWwpIHtcclxuICAgICAgICB0aGlzLmFyci5wdXNoKHZhbClcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlIChpKSB7XHJcbiAgICAgICAgdGhpcy5hcnJbaV0gPSB1bmRlZmluZWRcclxuICAgICAgICB0aGlzLmFyci5zcGxpY2UoaSwgMSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgZmlsdGVyIChjb25kRnVuYykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVuZGVyZXJBcnJheSh0aGlzLmFyci5maWx0ZXIoY29uZEZ1bmMpKVxyXG4gICAgfVxyXG4gICAgZWFjaCAoY2IpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYXJyKSBjYihpdGVtKVxyXG4gICAgfVxyXG4gICAgZ2V0IGxlbmd0aCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aFxyXG4gICAgfVxyXG4gICAgdG9BcnJheSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyXHJcbiAgICB9XHJcbiAgICBzZXQgZnBzIChuZXdGUFMpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIuZnBzID0gbmV3RlBTKVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlICgpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIucmVtb3ZlKCkpXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICB0aGlzLmVhY2gocmVuZGVyZXIgPT4gcmVuZGVyZXIubmV4dCgpKVxyXG4gICAgfVxyXG4gICAgcGF1c2UgKCkge1xyXG4gICAgICAgIHRoaXMuZWFjaChyZW5kZXJlciA9PiByZW5kZXJlci5wYXVzZSgpKVxyXG4gICAgfVxyXG4gICAgcGxheSAoKSB7XHJcbiAgICAgICAgdGhpcy5lYWNoKHJlbmRlcmVyID0+IHJlbmRlcmVyLnBsYXkoKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXJBcnJheVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mcmFtZXNmbG93L3NyYy9jb21wb25lbnRzL1JlbmRlcmVyQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==