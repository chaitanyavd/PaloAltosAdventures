import Matter from 'matter-js';
window.path = document.createElementNS("http://www.w3.org/2000/svg", "path");

export default class Player {
    constructor(x, y, w, h, engine, world) {
        this.world = world;
        this.engine = engine;
        this.body = Matter.Bodies.rectangle(x, y, w, h); 
        // debugger 
        Matter.World.add(this.world, this.body)
    }

    getHeight(body) {
        return body.vertices[3].y - body.vertices[0].y
    }
    getWidth(body) {
        return body.vertices[2].x - body.vertices[0].x
    }

    draw(ctx) {
        const pos = this.body.position;
// debugger
        ctx.fillStyle = "green"
        // ctx.fillRect(this.body.position.x, this.body.position.y, this.getHeight(this.body), this.getWidth(this.body))
        ctx.beginPath();
        const vertices = this.body.vertices
        // debugger 
        let lastVert = vertices[vertices.length - 1];


        vertices.forEach((vertex) => {
            ctx.lineTo(vertex.x, vertex.y);
        })
        ctx.closePath();
        ctx.stroke()
    }

    // svg() {
    //     const 
    // }

}