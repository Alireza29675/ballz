const colors = [
    'red',
    'blue',
    'magenta',
    'yellow'
]
let lastChosenColorIndex = -1
const nextColor = () => {
    lastChosenColorIndex++
    if (lastChosenColorIndex === colors.length) lastChosenColorIndex = 0
    return colors[lastChosenColorIndex]
}

class Box {
    constructor (game, place) {
        this.game = game
        this.ctx = this.game.ctx
        this.step = this.game.step
        this.place = place
        this.weight = (this.step + 1) * Math.floor(Math.random() * 2 + 1)
        this.size = this.game.boxSize
        this.color = nextColor()
        this.position = {x: this.place * this.size, y: 0}
        this.positionOnDisplay = {x: this.position.x, y: -this.size}
        this.onStepChanged()
    }
    remove () {
        this.position = null
        this.positionOnDisplay = null
        this.game.removeBox(this)
    }
    checkCollisionWith (ball) {
        const distX = Math.abs(ball.x - this.positionOnDisplay.x - this.size/2)
        const distY = Math.abs(ball.y - this.positionOnDisplay.y - this.size/2)
        // If no collision detected
        if (distX > (this.size/2 + ball.radius)) return [1, 1]
        if (distY > (this.size/2 + ball.radius)) return [1, 1]
        // If has collisions
        let ret = [-1, -1]
        if (distY < this.size/2) {
            if (ball.velocityVector[0] >= 0) ball.x = this.positionOnDisplay.x - ball.radius
            else ball.x = this.positionOnDisplay.x + this.size + ball.radius
            ret = [-1, 1]
        }
        else if (distX < this.size/2) {
            if (ball.velocityVector[1] >= 0) ball.y = this.positionOnDisplay.y - ball.radius
            else ball.y = this.positionOnDisplay.y + this.size + ball.radius
            ret = [1, -1]
        }
        this.onBallCollised(ball)
        // If it collised with a corner
        return ret
    }

    // Listeners
    onStepChanged () {
        this.position.y = ((this.game.step - this.step) * this.size) + this.size
    }
    onBallCollised (ball) {
        this.weight = Math.max(0, this.weight - ball.weight)
        if (this.weight === 0) this.remove()
    }

    // Moves and Animation
    render () {
        this.changes()
        this.draw()
    }
    changes () {
        this.positionOnDisplay.y += (this.position.y - this.positionOnDisplay.y) / 10
    }
    draw () {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.positionOnDisplay.x, this.positionOnDisplay.y, this.size, this.size)
        
        this.ctx.font="20px Arial";
        this.ctx.textAlign="center"; 
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#FFF";
        this.ctx.fillText(this.weight, this.positionOnDisplay.x + this.size/2, this.positionOnDisplay.y + this.size/2)
    }
}

export default Box