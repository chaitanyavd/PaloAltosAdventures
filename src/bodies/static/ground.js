import Matter from 'matter-js'; 
window.path = document.createElementNS("http://www.w3.org/2000/svg", "path");

export default class Ground {
    constructor(x, y, engine, world) {
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

        })



    }


}


