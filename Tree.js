class Tree {
    constructor(x,y,width,height){
        var options = {
            'restitution' :0, 'friction' : 1, 'density' : 1.2, 'isStatic' : true
        }
        
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/tree.png");

        this.body = Bodies.rectangle(x,y,width,height, options);
        
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
        image(this.image,0, 0,this.width, this.height);
        pop();
    }
}
