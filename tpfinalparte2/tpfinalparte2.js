/* TP final etapa 2 
  Alumno: Franco D'Angelo 
  Legajo: 88224/2
  Link de youtube:
*/
let juegoFunc, sonam, sonlat, tnr
let imagen = [];


/////////////////////////////////////// PRELOAD

function preload(){
  soundFormats('mp3', 'ogg');
  guion = loadTable("/data/guion.csv", "csv", "header");
  for (let i=0; i<7; i++) {
    imagen[i] = loadImage("data/imagen"+i+".png");
  }
  sonam = loadSound('/data/sonam.mp3');
  sonlat = loadSound('/data/sonlat.mp3');
  tnr = loadFont('/data/tnrnormal.ttf');
}

/////////////////////////////// SETUP DRAW
function setup() {
 createCanvas(640,480);
 juegoFunc = new Juego(18);
 textFont(tnr);
 sonam.setVolume(0.1);
 sonam.play();
}


function draw() {
 background(0);
 imageMode(CORNER);
 juegoFunc.dibujar();
}

//////////////////////////////// INTERACTIVOS

function keyPressed(){
    juegoFunc.moverPj(keyCode);
  }
 
function mousePressed(){
    if (sonlat.isPlaying()) {
      sonlat.stop()
    } else {
      sonlat.play();
    }
   juegoFunc.golMur();
  
}
 