
var dataBase,gameState = 0,playerCount;
var game,form,player;

function setup(){
 createCanvas(400,400)

 dataBase = firebase.database();

 game = new Game();
 game.getState();
 game.start();

}
function draw(){
  background("white");
  
    
  
}

