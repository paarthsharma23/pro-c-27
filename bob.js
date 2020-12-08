class Bob {
    constructor(x,y,radius){
        var options ={
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
    this.radius=radius;
    this.body = Bodies.circle(x,y,this.radius,options);
    World.add(world,this.body);
    }
    
    display(){
    push();
    var pos = this.body.position ; 
    ellipseMode(CENTER);
    fill("purple");
    ellipse(pos.x,pos.y,this.radius);
    pop();
    }
    
    };