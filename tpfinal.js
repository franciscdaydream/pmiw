let estado, guion, steps, sonam, tnr, logo;
let imagenes = [];

function preload() {
  soundFormats('mp3', 'ogg');
  guion = loadTable("/data/guion.csv", "csv", "header");
  sonam = loadSound('/data/sonam.mp3');
  steps = loadSound('/data/steps.mp3');
  tnr = loadFont('/data/tnrnormal.ttf');
  logo = loadImage("data/logo.png");
  ///////////////////////////////////////////IMAGENES

 for (let i=0; i<10; i++) {
    iamgenes[i] = loadImage("data/imagen"+i+".png");
  }
}


//////////////////////////////////////////DIALOGOS

function dialogo(posX, posY, _id) {
  push();
  translate(posX, posY);
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
    return "ID no encontrado: " + _id;
  }
}

////////////////////////////////////////botones

function mouseClicked() {

  if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="menu") {
    estado = "nar0";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar0") {
    estado = "nar1";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar1") {
    estado = "nar2";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar1") {
    estado = "creditos";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar2") {
    estado = "nar3";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar3") {
    estado = "nar4a";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar2") {
    estado = "juego";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar4a") {
    estado = "nar5a";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar5a") {
    estado = "nar6a";
    } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar4a") {
    estado = "op2";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar3") {
    estado = "op2";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="op2") {
    estado = "nar4b";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar4b") {
    estado = "nar5a";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="juego") {
    estado = "fb1";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="juego") {
    estado = "fm1";
    
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar5a") {
    estado = "fm2";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar6a") {
    estado = "fm2";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar4b") {
    estado = "fm2";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="op2") {
    estado = "fb3";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar6a") {
    estado = "fb2";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fb1") {
    estado = "creditos";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fb2") {
    estado = "creditos";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fb3") {
    estado = "creditos";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fm1") {
    estado = "creditos";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fm2") {
    estado = "creditos";
    } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="creditos") {
    estado = "menu";
  }
}
//////////////////////////////////////////SETUP

function setup() {
  createCanvas(640, 480);
  colorMode(HSB, 360, 100, 100);
  textFont(tnr);
  // sonam.setVolume(0.5);
  estado = "menu";
}

////////////////////////////////////////////DRAW


function draw() {
  background(0);
  print(estado);
  stroke(37,58,88);
  strokeWeight(2);
  
  
  if ( estado == "menu") {
    fill(255);
    textSize(55);
    image(logo,130,0,350,150);
    textSize(40);
    text("El capitulo olvidado", 160, 150);
    fill(352,78,40);
    rect(160, 300, 300, 80);
    fill(255);
    text("Comenzar", 220, 355);
  } else if ( estado == "nar0") {

    
    fill(352,78,40);
    rect(70, height/2, 510, 170);
    rect(340, 420, 250, 50);
    textSize(20);
    fill(255);
    dialogo(75, height/2+10, 'na1');
    text("continuar...", 370, 455);
  } else if ( estado == "nar1") {
    fill(352,78,40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'op1');
    text("continuar...", 370, 455);
    text("arrepentirse", 80, 455);
  } else if ( estado == "nar2") {
    fill(352,78,40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na2');
    text("Adentrarse", 370, 455);
    text("Pelear", 80, 455);
  } else if ( estado == "nar3") {
    fill(352,78,40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  } else if ( estado == "nar4a") {
    fill(352,78,40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  } else if ( estado == "nar5a") {
    fill(352,78,40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  } else if ( estado == "nar6a") {
    fill(352,78,40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  } else if ( estado == "fb2") {
    fill(352,78,40);
    textSize(55);
    text("Final bueno 2", 120, 100);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Creditos", 240, 355);
  } else if ( estado == "fm2") {
    fill(352,78,40);
    textSize(55);
    text("Final malo 2", 120, 100);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Creditos", 240, 355);
  } else if ( estado == "op2") {
    fill(352,78,40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na4');
    text("Avanzar en soledad", 370, 455);
    text("Ser acomapañado", 80, 455);
  } else if ( estado == "nar4b") {
    fill(352,78,40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  } else if ( estado == "fb3") {
    fill(255);
    textSize(55);
    text("Final bueno 3", 120, 100);
    fill(352,78,40);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Creditos", 240, 355);
  } else if ( estado == "fb1") {
    fill(255);
    textSize(55);
    text("Final bueno 1", 120, 100);
    fill(352,78,40);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Creditos", 240, 355);
  } else if ( estado == "fm1") {
    fill(255);
    textSize(55);
    text("Final malo 1", 120, 100);
    fill(352,78,40);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Creditos", 240, 355);
  } else if ( estado == "creditos") {
    fill(255);
    textSize(55);
    text("Gracias por jugar", 110, 100);
    textSize(40);
    text("Alumnos", 210, 150);
    textSize(25);
    text("Franco D'angelo - 88224/2", 80, 200);
    text("Iara Vilte - 94714/4", 80, 230);
    textSize(20);
    text("Creacion  Warren Ellis - Basado en  Castlevania de Konami", 55, 270);
    fill(352,78,40);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Reiniciar", 240, 355);
  }

  ///////////////////////PENDIENTE

  if ( estado == "juego") {
    fill(352,78,40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    fill(255);
    textSize(20);
    noStroke();
    text("esta parte esta incompleta, al menos por ahora", 50, 50)
    stroke(37,58,88);
    text("perder", 370, 455);
    text("ganar", 80, 455);
  }
}
