class Rope {
    constructor(body1,body2,offsetX,offsetY){
      this.offsetX=offsetX;
      this.offsetY=offsetY;
        var options ={
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offsetX,y:this.offsetY}
      }
      this.rope = Constraint.create(options);
      World.add(world,this.rope);
    }

    display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;

    strokeWeight(4);

    var anchor1X = pointB.x ;
    var anchor1Y = pointB.y ;

    var anchor2X = pointA.x+this.offsetX ;
    var anchor2Y = pointA.y+this.offsetY;

    line(anchor1X,anchor1Y,anchor2X,anchor2Y);
    }
    
}