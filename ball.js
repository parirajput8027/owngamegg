class Ball{
constructor(x,y)
{
  var options={
     density:0.5
  }
  this.body = Bodies.circle(x,y,40,options)
  World.add(world,this.body)
  this.radius=40

}

display()
{
    ellipseMode(RADIUS)
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
}

}