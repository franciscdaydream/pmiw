let juegoFunc, estado, sonam, sonlat, tnr
let Vivo = true;
let imagen = [];

function preload(){
  soundFormats('mp3', 'ogg');
  guion = loadTable("/data/guion.csv", "csv", "header");
  for (let i=0; i<7; i++) {
    imagen[i] = loadImage("data/imagen"+i+".png");
  }
  sonam = loadSound('/data/sonam.mp3');
  tnr = loadFont('/data/tnrnormal.ttf');
}
//--------------------- Dialogos y cuadros

function dialogo(posX, posY, _id) {
  push();
  translate(posX, posY);
  stroke(224, 175, 94);
  strokeWeight(2);
  fill(255);
  textSize(22);
  text(GetTextCSV(_id, 'Nombre'), 20, 30);
  pop();
}
function GetTextCSV(_id, _columna) {
  let IDColumna = guion.getColumn('ID');

  for (let fila=0; fila < IDColumna.length; fila++) {
    if (IDColumna[fila] === _id) {
      return guion.getColumn(_columna)[fila];
    }
  }
  return "ID no encontrado: " + _id;
}

function cuadro(pX, pY, tX, tY, txt){
  stroke(224, 175, 94);
  strokeWeight(2);
  fill(82, 4, 1);
  rectMode(CORNER);
  rect(pX, pY, tX, tY);
  fill(255);
  textSize(40);
  text(txt, pX+80, pY+55);
}

//----------------------Base
function setup() {
 createCanvas(640,480);
 juegoFunc = new Juego(12);
 textFont(tnr);
 estado = "menu";
 sonam.setVolume(0.1);
 sonam.play();
}


function draw() {
 background(0);
 imageMode(CORNER);
 
 if ( estado == "menu") {
  Vivo === true;
  image(imagen[0],0,0);
  cuadro(160, 300, 300, 80, "Comenzar");
  dialogo(50, 100, 't1');
  dialogo(50, 130, 't2');
  dialogo(50, 160, 't3');
  dialogo(50, 190, 't4');
  dialogo(50, 220, 't5');
  } else if ( estado == "juEm") {
 image(imagen[0],0,0);
 juegoFunc.dibujar();

} else if ( estado == "creditos") {
  fill(255);
  textSize(55);
  text("Gracias por jugar", 110, 100);
  textSize(40);
  text("Alumno", 210, 150);
  textSize(25);
  text("Franco D'angelo - 88224/2", 80, 200);
  textSize(20);
  text("Creacion  Warren Ellis - Basado en  Castlevania de Konami", 55, 270);
 cuadro(160,300,300,80, "Reiniciar")
 // --------------------------------FINALES
  }  else if ( estado == "fb1") {
    image(imagen[6],0,0);
    push();
    fill(255);
    textSize(55);
    text("Final bueno 1", 120, 100);
    dialogo(50, 150, 'fb1');
    dialogo(50, 180, 'fb1a');
    dialogo(50, 210, 'fb1b');
    dialogo(50, 240, 'fb1c');
    cuadro(160, 350, 300, 80, "Creditos");
    pop();
  } else if ( estado == "fm1") {
    image(imagen[5],0,0);
    push();
    fill(255);
    textSize(55);
    text("Final malo 1", 120, 100);
    dialogo(50, 150, 'fm1');
    dialogo(50, 180, 'fm1a');
    dialogo(50, 210, 'fm1b');
    cuadro(160, 350, 300, 80, "Creditos");
    pop();
  }
}

// --------------------------------------INTERACTIVOS

function keyPressed(){
    juegoFunc.moverPj(keyCode);
  }

  function mousePressed(){
   juegoFunc.golMur();
   if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="menu") {
    estado = "juEm";
  } else if(mouseX > 160 && mouseX < 160+300 && mouseY > 350 && mouseY < 350+80 && estado=="fb1"){
    estado = "menu";
  } else if(mouseX > 160 && mouseX < 160+300 && mouseY > 280 && mouseY < 280+60 && estado=="fm1"){
     estado = "creditos";
  } else if(mouseX > 160 && mouseX < 160+300 && mouseY > 380 && mouseY < 380+60 && estado=="fm1"){
    estado = "creditos";
  }  else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="creditos") {
    estado = "menu";
  }
  }
 