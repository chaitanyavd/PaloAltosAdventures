import Matter from 'matter-js';
window.path = document.createElementNS("http://www.w3.org/2000/svg", "path");

export default class Player {

    constructor(x, y, r, engine, world) {
        this.world = world;
        this.engine = engine;
        this.body = Matter.Bodies.circle(x, y, r, {friction: 0, frictionStatic: 0, mass: 1, restitution: 0.5 });
        // debugger 
        Matter.World.add(this.world, this.body)
    }
 
    draw(ctx) {
        const pos = this.body.position;


        ctx.beginPath();
        const vertices = this.body.vertices
        let lastVert = vertices[vertices.length - 1];
        vertices.forEach((vertex) => {
            ctx.lineTo(vertex.x, vertex.y);
        })
        ctx.closePath();
        ctx.stroke()

        // ctx.fill();
    }


}