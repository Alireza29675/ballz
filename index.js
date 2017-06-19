import 'framesflow'
import Game from './app/src/Game'

const ballz = new Game('#playground')

window.ballz = ballz

ballz.start()