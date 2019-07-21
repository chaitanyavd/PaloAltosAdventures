import Matter from 'matter-js'; 
import Ground from '../bodies/static/ground.js'; 
import Player from '../bodies/dynamic/player.js'; 



export default class Game {
    constructor(ctx) {
        this.ctx = ctx; 
        this.engine = Matter.Engine.create(); 
        this.world = this.engine.world
        this.animate = this.animate.bind(this)
        this.ground = new Ground(9000, 6000, this.engine, this.world)

        this.player = new Player(330, 0, 45, this.engine, this.world)
        window.stopAnimation = this.stopAnimation.bind(this); 
        this.animate(); 

    }
    
    draw() {
        Matter.Engine.update(this.engine) 
        this.ctx.save()
        const {x,y} = this.player.body.position
        this.ctx.translate(-x + Game.WIDTH / 2, -y + Game.HEIGHT / 2)
        this.ctx.fillStyle = "red"
        // this.ctx.fillRect(x - Game.WIDTH / 2, y - Game.HEIGHT / 2, Game.WIDTH, Game.HEIGHT)
        this.ctx.fillRect(x - Game.WIDTH / 2, y - Game.HEIGHT / 2, Game.WIDTH, Game.HEIGHT)
        this.ground.draw(this.ctx)
        this.player.draw(this.ctx)
        this.ctx.restore()
    
    }

    animate() {
        this.frame = requestAnimationFrame(this.animate); 
        this.draw(); 
    }

    stopAnimation() {
        cancelAnimationFrame(this.frame)
    }

}

Game.WIDTH = 1200; 
Game.HEIGHT = 900; 