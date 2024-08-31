/*TP1 PMIW -  OpArt con Funciones y Ciclo For en p5-js
Alumno: Franco D'Angelo
Legajo: 8824/2
Link a youtube: https://youtu.be/8mXHUHrZ2qs
CAMBIAR COLOR CON ENTER, REINICIAR CON ESPACIO
Saludos profe, buenas noches y saludos a toda su familia, incluidas mascotas posibles
*/
let ref
  let bl = 0
  function preload() {
  ref = loadImage('data/ref.png');
}

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 360, 100, 100);
}

//Lineas del ciclo for (funciones que no retornan parametros)

function lineasH(col1, bla, posY, tamW) {
  push();
  translate(400, 0);
  fill(col1, 90, bla);
  noStroke();
  rectMode(CENTER);
  rect(200, posY, tamW, 5);
  pop();
}

function lineasV(col2, bla, posY1, posX, posX1) {
  push();
  translate(600, 0);
  fill(col2, 90, bla);
  rectMode(CORNER);
  noStroke();
  rect(posX-1, 0, 1.2, posY1+2);
  rect(posX1, 0, 1.2, posY1+2);
  pop();
}


//Booleanas (funciones que retornan paramatros)

function  tPress(tecla) {
  if ( keyCode === tecla) {
    return true;
  } else {
    return false;
  }
}


//Comienzo del draw

function draw() {
  background(360, 0, 100);
  fill(0);

  //ciclos for anidados

  for (let a=2; a < mouseY; a+=5) {
    for (let b=mouseY; b > 0; b-=5) {

      let col1 = map (a, 0, height, 0, 360);
      let col2 = map (b, 0, 196, 0, 360);
      let posY = a * 1.7;
      let tamW = a *1.7;
      let posX = b * -1;
      let posY1 = b * 2;

      lineasH( col1, bl, posY, tamW);
      lineasV( col2, bl, posY1, posX, b);
    }
  }

  image(ref, 0, 0, 400, 400);

  let aColor = tPress(13) ;
    if (aColor) {
      bl = 100;
    } else {
      bl = 0;
    }
  }
  let reinicio = tPress(32) ;
    if (reinicio) {
      mouseY = 400;
      bl = 0;
    }
  
