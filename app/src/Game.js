import Box from './Box'
import Ball from './Ball'

const options = {
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
}

class Game {
    constructor (query) {
        // Options setup
        this.options = options
        // Canvas setup
        this.canvas = document.querySelector(query)
        this.ctx = this.canvas.getContext('2d')
        this.canvas.style.background = this.options.canvas.background
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

    // Game Methods
    shootBall (startX, angelVector) {
        this.balls.push(new Ball(this, startX, angelVector))
    }

    // Render Methods
    render () {
        this.clear()
        this.drawGround()
        this.drawBallsAndBoxes()
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