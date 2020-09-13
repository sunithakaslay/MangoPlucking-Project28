class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.004
            
        }
        this.pointB = pointB;
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }

    attach(bodyA){
        this.Sling.bodyA = bodyA;
    }

    fly() {
        this.Sling.bodyA = null;
    }

    display(){
        if(this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
    }
    
}