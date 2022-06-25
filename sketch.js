const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
function preload()
{
 dollimg = loadImage("./pictures/doll.jpeg")
}

function setup() {
	createCanvas(800, 600);

  engine = Engine.create();
	world = engine.world;

    ball = new Ball(600,260)
    ground = new Ground(400,580)
    doll = new Doll(200,460)
    // stand = new Stand(200,260)
    rope = new Rope(ball.body,{x:600,y:200})



  Engine.run(engine);
  
}

 
function draw()
 {
  drawSprites();

  background("lightblue");
  rectMode(CENTER);
 
 ground.display();
 ball.display();
 doll.display();
//  stand.display();
 rope.display();

}


 function mouseDragged()
   {
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
   }


   function mouseReleased()
   {
    rope.fly();
   }


   function keyPressed()
   {
    if(keyCode===32)
    {
  rope.attach(ball.body)
    }
   }



