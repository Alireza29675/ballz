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
        // Setup logic
        this.step = 0
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
        for (let box of this.boxes) box.onStepChanged()
        this.insertBoxRow()
    }

    // Game Methods
    shootBall (startX, angelVector) {
        this.balls.push(new Ball(this, startX, angelVector))
    }
    removeBall (which) {
        const index = this.balls.indexOf(which)
        which = null // Use garbage collector to remove this ball from memory
        if (index > -1) this.balls.splice(index, 1)
    }
    insertBoxRow () {
        const countInThisRow = Math.floor(Math.random() * (this.options.game.rowCount - 1)) + 1
        const usedIndexes = []
        let index
        for (let i = 0; i < countInThisRow; i++) {
            do {
                index = Math.floor(Math.random() * this.options.game.rowCount)
            } while (usedIndexes.indexOf(index) !== -1)
            usedIndexes.push(index)
            this.boxes.push(new Box(this, index))
        }
    }

    // Render Methods
    render () {
        this.clear()
        this.drawBallsAndBoxes()
        this.drawGround()
    }
    clear () {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }
    drawGround () {
        this.ctx.fillStyle = this.options.ground.color
        this.ctx.fillRect(0, this.height - this.options.ground.height, this.width, this.height)
    }
    drawBallsAndBoxes () {
        for (let box of this.boxes) box.render()
        for (let ball of this.balls) ball.render()
    }
}

export default Game