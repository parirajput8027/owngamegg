class Rope{
    constructor(bodyA,pointB)
    {

        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:20,
          }
          this.pointB= this.pointB
          this.rope=Constraint.create(options) 
          World.add(world,this.rope)
          
    }

    attach(body)
    {
    this.rope.bodyA=body;
    }

    fly()
    {
     this.rope.bodyA=null;
    }


 display()
{
    if(this.rope.bodyA)
    {
     var pointA = this.rope.bodyA.position;
          var pointB = this.pointB;
          push()

          strokeWeight(4);
         // fill("red")
          line(pointA.position.x, pointA.position.y, pointB.position.x, pointB.position.y);
          
          pop()
    }

}
}