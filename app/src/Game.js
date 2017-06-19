import Box from './Box'
import Ball from './Ball'

const options = {
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

    // Render Methods
    render (frames) {
        this.clear()
        if (frames.index % 5 === 0 && this.howManyShouldShoot > 0) this.shootIfNeeded()
        this.drawBallsAndBoxes()
        this.drawGround()
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
    clear () {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }
    drawGround () {
        // Drawing onGround Ball
        if (this.onGroundBallX !== -1) {
            this.ctx.beginPath()
            this.ctx.arc(this.onGroundBallX, this.lowestY, this.options.balls.radius, 0, 2 * Math.PI, false)
            this.ctx.fillStyle = this.options.balls.color
            this.ctx.fill()
        }
        if (this.nextOnGroundBallX !== -1) {
            this.ctx.beginPath()
            this.ctx.arc(this.nextOnGroundBallX, this.lowestY, this.options.balls.radius, 0, 2 * Math.PI, false)
            this.ctx.fillStyle = this.options.balls.color
            this.ctx.fill()
        }
        // Drawing Ground
        this.ctx.fillStyle = this.options.ground.color
        this.ctx.fillRect(0, this.height - this.options.ground.height, this.width, this.height)
    }
    drawBallsAndBoxes () {
        for (let row of this.boxes) for (let box of row) box.render()
        for (let ball of this.balls) ball.render()
    }
}

export default Game