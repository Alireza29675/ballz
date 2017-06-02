let W, H

class Game {
    constructor (query) {
        this.canvas = document.querySelector(query)
        this.ctx = this.canvas.getContext('2d')
        this.groundHeight = 50
        W = this.canvas.width, H = this.canvas.height
        this.rects = []
        this.balls = []
    }
    
    start () {
        this.renderer = framesFlow.render(this.render.bind(this))
    }
    pause () {
        this.renderer.pause()
    }
    play () {
        this.renderer.play()
    }

    render () {
        this.clear()
        this.drawGround()
    }
    clear () {
        this.ctx.clearRect(0, 0, W, H)
    }
    drawGround () {
        this.ctx.fillStyle = "#666"
        this.ctx.fillRect(0, H - this.groundHeight, W, H)
    }
}

export default Game