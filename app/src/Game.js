import Box from './Box'
import Ball from './Ball'

const options = {
    game: {
        background: '#333',
        gravity: -0.001,
        rowCount: 6,
        triggerBallsCount: 10
    },
    ground: {
        height: 50,
        color: '#666'
    },
    balls: {
        radius: 5,
        color: 'white',
        moveSpeed: 8,
        generateSpeed: 5
    }
}

class Game {
    constructor (query) {
        // Options setup
        this.options = options
        // Canvas setup
        this.canvas = document.querySelector(query)
        this.ctx = this.canvas.getContext('2d')
        this.canvas.style.background = this.options.game.background
        // Dynamic variables setup
        this.initalizeDynamicVariables()
        // Trigger Listeners
        this.canvas.addEventListener('mousedown', this.onDragStarted.bind(this))
        this.canvas.addEventListener('mousemove', this.onPointerMove.bind(this))
        this.canvas.addEventListener('mouseup', this.onDragEnded.bind(this))
        // Boxes and Balls arrays
        this.boxes = []
        this.balls = []
        // Let's play
        this.goNextStep()
    }
    initalizeDynamicVariables () {
        // Game size
        this.width = this.canvas.width
        this.height = this.canvas.height
        // Ballz area size
        this.lowestX = this.options.balls.radius
        this.highestX = this.width - this.options.balls.radius
        this.lowestY = this.height - this.options.ground.height - this.options.balls.radius
        this.highestY = this.options.balls.radius
        // Box Dynamic vars
        this.boxSize = this.width / this.options.game.rowCount
        // Logic setup
        this.step = 0
        this.isLocked = false
        this.ballzCount = 1
        this.onGroundBallX = this.width/2
        this.nextOnGroundBallX = -1
        this.howManyShouldShoot = 0
        this.shootAngle = [1, 1]
        // Trigger Setup
        this.trigger = {
            start: [0, 0],
            end: [0, 0]
        }
    }
    
    // Flow Controls
    start () {
        this.renderer = framesFlow.render(this.render.bind(this))
    }
    pause () {
        this.renderer.pause()
    }
    play () {
        this.renderer.play()
    }
    goNextStep () {
        this.step++
        for (let row of this.boxes) for (let box of row) box.onStepChanged()
        this.insertBoxRow()
    }

    // Game Methods
    throwBall (angleVector) {
        this.balls.push(new Ball(this, this.onGroundBallX, angleVector))
    }
    shoot (angleVector) {
        if (!this.isLocked) {
            this.isLocked = true
            this.shootAngle = angleVector
            this.howManyShouldShoot = this.step
        }
    }
    removeBall (which) {
        const index = this.balls.indexOf(which)
        which = null // Use garbage collector to remove this ball from memory
        if (index > -1) this.balls.splice(index, 1)
    }
    insertBoxRow () {
        const countInThisRow = Math.floor(Math.random() * (this.options.game.rowCount - 1)) + 1
        const usedIndexes = []
        const row = []
        let index
        for (let i = 0; i < countInThisRow; i++) {
            do {
                index = Math.floor(Math.random() * this.options.game.rowCount)
            } while (usedIndexes.indexOf(index) !== -1)
            usedIndexes.push(index)
            row.push(new Box(this, index))
        }
        this.boxes.push(row)
    }
    removeBox (which) {
        const rowIndex = which.step - 1
        const index = this.boxes[rowIndex].indexOf(which)
        which = null // Use garbage collector to remove this ball from memory
        if (index > -1) this.boxes[rowIndex].splice(index, 1)
    }
    shootIfNeeded () {
        this.throwBall(this.shootAngle.slice(0))
        this.howManyShouldShoot--
        if (this.howManyShouldShoot === 0) {
            if (this.nextOnGroundBallX !== -1) {
                this.onGroundBallX = this.nextOnGroundBallX
                this.nextOnGroundBallX = -1
            }
            else {
                this.onGroundBallX = -1
            }
        }
    }
    drawAFakeBall (x, y, sizeRatio) {
        this.ctx.beginPath()
        this.ctx.arc(x, y, this.options.balls.radius * sizeRatio, 0, 2 * Math.PI, false)
        this.ctx.fillStyle = this.options.balls.color
        this.ctx.fill()
    }

    // Trigger Handle
    triggerIsValid () {
        const deltaX = this.trigger.start[0] - this.trigger.end[0]
        const deltaY = this.trigger.start[1] - this.trigger.end[1]
        const dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
        const angleRate = deltaY / Math.abs(deltaX)
        return dist > 50 && angleRate < -0.1
    }
    onDragStarted (e) {
        if (!this.isLocked) {
            this.mouseIsDown = true
            this.trigger.start = this.trigger.end = [e.offsetX, e.offsetY]
        }
    }
    onPointerMove (e) {
        if (this.mouseIsDown) {
            this.trigger.end = [e.offsetX, e.offsetY]
        }
    }
    onDragEnded (e) {
        this.mouseIsDown = false
        if (!this.isLocked && this.triggerIsValid()) {
            const deltaX = this.trigger.start[0] - this.trigger.end[0]
            const deltaY = this.trigger.start[1] - this.trigger.end[1]
            let angle = Math.atan(deltaY / Math.abs(deltaX))
            this.shoot([Math.cos(angle) * Math.sign(deltaX) * this.options.balls.moveSpeed, Math.sin(angle) * this.options.balls.moveSpeed])
        }
        this.trigger.end = this.trigger.start
    }


    // Render Methods
    render (frames) {
        this.clear()
        if (frames.index % this.options.balls.generateSpeed === 0 && this.howManyShouldShoot > 0) this.shootIfNeeded()
        this.drawBallsAndBoxes()
        this.drawGround()
        this.drawTrigger()
    }
    clear () {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }
    drawGround () {
        // Drawing onGround Ball
        if (this.onGroundBallX !== -1) {
            this.drawAFakeBall(this.onGroundBallX, this.lowestY, 1)
        }
        if (this.nextOnGroundBallX !== -1) {
            this.drawAFakeBall(this.nextOnGroundBallX, this.lowestY, 1)
        }
        // Drawing Ground
        this.ctx.fillStyle = this.options.ground.color
        this.ctx.fillRect(0, this.height - this.options.ground.height, this.width, this.height)
    }
    drawBallsAndBoxes () {
        for (let row of this.boxes) for (let box of row) box.render()
        for (let ball of this.balls) ball.render()
    }
    drawTrigger () {
        if (this.triggerIsValid()) {
            const deltaX = this.trigger.start[0] - this.trigger.end[0]
            const deltaY = this.trigger.start[1] - this.trigger.end[1]
            for (let i = 0; i < this.options.game.triggerBallsCount; i++)
                this.drawAFakeBall(
                    this.trigger.start[0] - (deltaX * i / this.options.game.triggerBallsCount),
                    this.trigger.start[1] - (deltaY * i / this.options.game.triggerBallsCount),
                    1 / Math.sqrt(i + 1))
        }
    }
}

export default Game