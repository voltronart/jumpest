const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine, world;

var chao;

var bola;

var quad
var ret
function setup() {
  createCanvas(400,600);

  engine = Engine.create();
  world = engine.world;

  var chao_options = {
    isStatic: true
  }
 var bola_options = {
  restitution : 4
 }
 
 var quad_options = {
   restitution : 4
 }
 
 var ret_options = {
   restitution : 5
 }

  chao = Bodies.rectangle(200,590,400,20,chao_options);
  World.add(world,chao);

  console.log(chao);
 bola = Bodies.circle(200,100,30,bola_options)
  World.add(world,bola);
 
  quad = Bodies.rectangle(100,50,10,10,quad_options)
  World.add(world,quad);
 
 ret = Bodies.rectangle(350,60,10,10,ret_options);
 World.add(world,ret);



}




function draw() {
  background("skyblue");  
  
  rectMode(CENTER);
  fill("green");
  rect(chao.position.x,chao.position.y,400,20);
  fill('yellow');
  square(quad.position.x,quad.position.y,60,10);
  fill('brown');
  rect(ret.position.x,ret.position.y,90,50);
  
  ellipseMode(RADIUS);
  fill('white');
  ellipse(bola.position.x,bola.position.y,30);
 

  Engine.update(engine);
}
