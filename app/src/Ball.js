class Ball {
    constructor (game, startX, velocityVector) {
        this.game = game
        this.ctx = this.game.ctx
        this.velocityVector = velocityVector
        this.x = startX
        this.y = this.game.lowestY
    }
    reflectX () {
        this.velocityVector[0] *= -1
    }
    reflectY () {
        this.velocityVector[1] *= -1
    }
    computeCollisions () {
        if (this.x >= this.game.highestX) {
            this.x = this.game.highestX
            this.reflectX()
        }
        if (this.x <= this.game.lowestX) {
            this.x = this.game.lowestX
            this.reflectX()
        }
        if (this.y <= this.game.highestY) {
            this.y = this.game.highestY
            this.reflectY()
        }
    }

    // Moves and Animation
    render () {
        this.changes()
        this.draw()
    }
    changes () {
        this.computeCollisions()
        this.x += this.velocityVector[0]
        this.y += this.velocityVector[1]
    }
    draw () {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.game.options.balls.radius, 0, 2 * Math.PI, false)
        this.ctx.fillStyle = this.game.options.balls.color
        this.ctx.fill()
    }
}

export default Ball