var PLAY;
var END;
var gameState = PLAY;

var criminal, criminal_running;
var cop, running_cop;
var city, sunny_city;

var obstacle, obstacletraffic_cone;

var gameOver, restart;


function preload(){
    criminal = loadAnimation ("criminal_running.jpg");
    cop = loadAnimation ("running_cop.png");
    
    city = loadImage ("sunny_city.jpg");

    obstacle = loadImage ("obstacletraffic_cone");

    restart = loadImage ("restart_button.png");
    gameOver = loadImage ("game_over.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  criminal = createSprite(50,height-70,20,50);
  
  criminal.addAnimation("running", criminal_running);
  
  city = createSprite(width/2,height,width,2);
  city.addImage("city",sunny_city);

  gameOver = createSprite(width/2,height/2- 50);
  gameOver.addImage(game_over);
  
  restart = createSprite(width/2,height/2);
  restart.addImage(restart_button);
  


}

function draw() {
 
    drawSprites ();


}