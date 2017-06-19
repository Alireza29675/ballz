class Ball {
    constructor (game, startX, velocityVector) {
        this.game = game
        this.ctx = this.game.ctx
        this.velocityVector = velocityVector
        this.x = startX
        this.y = this.game.lowestY
    }
    remove () {
        this.game.removeBall(this)
    }
    reflectX () {
        this.velocityVector[0] *= -1
    }
    reflectY () {
        this.velocityVector[1] *= -1
    }
    computeCollisions () {
        // Walls Collisions
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
    computeGravity () {
        this.velocityVector[1] -= this.game.options.game.gravity
    }
    checkIfShouldDie () {
        if (this.y > this.game.lowestY) this.remove()
    }

    // Moves and Animation
    render () {
        this.changes()
        this.draw()
    }
    changes () {
        this.computeCollisions()
        this.computeGravity()
        this.x += this.velocityVector[0]
        this.y += this.velocityVector[1]
        this.checkIfShouldDie()
    }
    draw () {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.game.options.balls.radius, 0, 2 * Math.PI, false)
        this.ctx.fillStyle = this.game.options.balls.color
        this.ctx.fill()
    }
}

export default Ball