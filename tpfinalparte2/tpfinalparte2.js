let juegoFunc
function setup() {
 createCanvas(640,480);
 juegoFunc = new Juego(10)
}


function draw() {
 background(0);
 juegoFunc.dibujar();
}

function keyPressed(){
    juegoFunc.moverPj(keyCode);
  }