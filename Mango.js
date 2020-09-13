class Mango {
    constructor(x,y,radius){
        var options = {
            'restitution' :0, 'friction' : 1,  'isStatic' : true
        }
        this.x = x;
        this.y = y;
        this.r = radius;
        this.image = loadImage("Plucking mangoes/mango.png");

        this.body = Bodies.circle(x,y,radius, options);
        
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
      //  var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
       // rotate(angle);
        imageMode(CENTER);
        //fill("purple");
        image(this.image,0, 0,this.r, this.r);
        pop();
    }
}
