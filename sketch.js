var canvas;
var database, gameState;
var form, player, playerCount;
var friends=[]
function preload() {
  function preload(){
    correcaminos_running = loadAnimation("ca5.png","ca4.png","ca3.png","ca2.png","ca1.png");
    ground = loadImage("Fondo_des.png");
    coyote_running = loadAnimation("coyote 1.png","coyote 2.png");
    dinamita = loadImage("dinamita.png");
    tronco = loadImage("tronco.png");
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background();
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


