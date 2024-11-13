let juegoFunc, muMov, golLa
let imagen = [];

function preload(){
  for (let i=0; i<1; i++) {
    imagen[i] = loadImage("data/imagen"+i+".png");
  }
}

function setup() {
 createCanvas(640,480);
 juegoFunc = new Juego(15);
 muMov = new Murcielago();
 golLa = new Latigo();
 atraer = new Pj();
}


function draw() {
 background(100);
 image(imagen[0],0,0);
 juegoFunc.dibujar();
 muMov.movimiento( atraer );
}

function keyPressed(){
    juegoFunc.moverPj(keyCode);
  }

  function mousePressed(){
    muMov.golpeLatigo();
    golLa.latigoGolpea();
  }