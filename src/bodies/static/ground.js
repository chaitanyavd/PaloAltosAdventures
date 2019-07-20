import Matter from 'matter-js'; 
window.path = document.createElementNS("http://www.w3.org/2000/svg", "path");

export default class Ground {
    constructor(x, y, w, h, engine, world) {
        this.world = world; 
        this.engine = engine; 
        const svgpath = document.querySelector("#slope")
        const path = Matter.Svg.pathToVertices(svgpath)
        this.body = Matter.Bodies.fromVertices(x, y, path)
        this.body.isStatic = true 
        this.body.friction = 0
        this.body.frictionStatic = 0
        // debugger 
        Matter.World.add(this.world, this.body)
    }

    // getHeight(body) {
    //     return body.vertices[3].y - body.vertices[0].y
    // }
    // getWidth(body) {
    //     return body.vertices[2].x - body.vertices[0].x
    // }

    draw(ctx) {
        const pos = this.body.position; 




        this.body.parts.slice(1).forEach((part)=>{
            ctx.beginPath(); 
            const vertices = part.vertices
            // debugger 
            let lastVert = vertices[vertices.length - 1]; 


            vertices.forEach((vertex)=> {
                ctx.lineTo(vertex.x, vertex.y); 
            })
            ctx.closePath(); 
            ctx.fillStyle = "black"
            ctx.fill()
            // ctx.stroke()
            // debugger
        })
        // ctx.moveTo(this.body.position.x, this.body.position.y); 
        // ctx.lineTo(this.body.vertices[1].x, this.body.vertices[1].y); 
        // ctx.lineTo(this.body.vertices[2].x, this.body.vertices[2].y);
        // ctx.closePath();  
        // ctx.fill(); 
        

    }

    // svg() {
    //     const 
    // }
    
}