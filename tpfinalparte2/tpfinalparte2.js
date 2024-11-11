let juegoFunc
function setup() {
 createCanvas(640,480);
 juegoFunc = new Juego(15)
}


function draw() {
 background(100);
 juegoFunc.dibujar();
}

function keyPressed(){
    juegoFunc.moverPj(keyCode);
  }