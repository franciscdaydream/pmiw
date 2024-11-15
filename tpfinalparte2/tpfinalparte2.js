let juegoFunc
let imagen = [];

function preload(){
  for (let i=0; i<2; i++) {
    imagen[i] = loadImage("data/imagen"+i+".png");
  }
}

function setup() {
 createCanvas(640,480);
 juegoFunc = new Juego(15);
}


function draw() {
 background(100);
 imageMode(CORNER);
 image(imagen[0],0,0);
 juegoFunc.dibujar();
}

function keyPressed(){
    juegoFunc.moverPj(keyCode);
  }

  function mousePressed(){
   juegoFunc.golMur();
  }