  let estado 
  let guion;
  let sonam;
  let steps;
  let botonI = false;
 
  function preload() {
  soundFormats('mp3', 'ogg');
  guion = loadTable("/data/guion.csv", "csv", "header");
  sonam = loadSound('/data/sonam.mp3');
  steps = loadSound('/data/steps.mp3');
  }
  
//////////////////////////////////////////funcion dialogos
  
  function Dialogo(posX, posY, _id) {
  push();
  translate(posX, posY);
  fill(255);
  text(GetTextCSV(_id, 'Nombre'), 20, 30);
  pop();
  }
  
////////////////////////////////////////boton de inicio
  
  function boton(botonx,botony, botonw, botonh) {
  fill(255);
  noStroke();
  quad(botonx, botony, botonx+botonw, botony, botonx+botonw, botony+botonh, botonx, botony+botonh);
  if ((mouseX > botonx) && (mouseX < botonx+botonw) && (mouseY > botony) && (mouseY < botony+botonh) && (estado="ini")){
  botonI = true;
  } else {
    botonI = false;
  }
  }
  
//////////////////////////////////////////SETUP

function setup() {
 createCanvas(640, 480);
 colorMode(HSB, 360, 100, 100);
 background(0);
// sonam.setVolume(0.5);
estado = "patat";
}

////////////////////////////////////////////DRAW


function draw() {
  fill(255);
  textSize(40);
  boton(200,300,200,100);
 print(botonI);
}
