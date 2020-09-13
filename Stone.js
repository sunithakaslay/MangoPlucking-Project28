class Stone {
    constructor(x,y,radius){
        var options = {
            'restitution' :0.3, 'friction' : 0, 'density' : 0.8, 'isStatic' : false
        }
        this.x = x;
        this.y = y;
        this.r = radius;
        this.image = loadImage("Plucking mangoes/stone.png");

        this.body = Bodies.circle(x,y,radius, options);
        
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        //fill("purple");
        image(this.image,0, 0,this.r, this.r);
        pop();
    }
}
