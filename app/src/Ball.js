class Ball {
    constructor (game, startX, velocityVector) {
        this.game = game
        this.ctx = this.game.ctx
        this.velocityVector = velocityVector
        this.radius = this.game.options.balls.radius
        this.weight = 1
        this.x = startX
        this.y = this.game.lowestY
    }
    remove () {
        this.velocityVector = null
        this.game.removeBall(this)
    }
    reflect (reflectArr) {
        this.velocityVector[0] *= reflectArr[0]
        this.velocityVector[1] *= reflectArr[1]
    }
    computeCollisions () {
        // Walls Collisions
        if (this.x >= this.game.highestX) {
            this.x = this.game.highestX
            this.reflect([-1, 1])
        }
        if (this.x <= this.game.lowestX) {
            this.x = this.game.lowestX
            this.reflect([-1, 1])
        }
        if (this.y <= this.game.highestY) {
            this.y = this.game.highestY
            this.reflect([1, -1])
        }
        // Boxes Collisions
        for (let row of this.game.boxes) for (let box of row) {
            this.reflect(box.checkCollisionWith(this))
        }
    }
    computeGravity () {
        this.velocityVector[1] -= this.game.options.game.gravity
    }
    checkIfShouldDie () {
        if (this.y > this.game.lowestY) {
            if (this.game.onGroundBallX === -1) {
                this.game.onGroundBallX = this.x
            }
            else if (this.game.onGroundBallX !== -1 && this.game.nextOnGroundBallX === -1) {
                this.game.nextOnGroundBallX = this.x
            }
            this.remove()
            if (this.game.balls.length === 0) {
                this.game.nextOnGroundBallX = -1
                this.game.goNextStep()
                setTimeout(()=>{
                    this.game.isLocked = false
                }, 300)
            }
        }
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
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        this.ctx.fillStyle = this.game.options.balls.color
        this.ctx.fill()
    }
}

export default Ball