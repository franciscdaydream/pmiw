 let estado, guion, steps, sonam, tnr;

function preload() {
  soundFormats('mp3', 'ogg');
  guion = loadTable("/data/guion.csv", "csv", "header");
  sonam = loadSound('/data/sonam.mp3');
  steps = loadSound('/data/steps.mp3');
  tnr = loadFont('/data/tnrnormal.ttf');
}

//////////////////////////////////////////funcion dialogos

function dialogo(posX, posY, _id) {
  push();
  translate(posX, posY);
  fill(0);
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
    return "NO SE ENCONTRO EL ID: " + _id;
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
    estado = "menu";
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
    estado = "menu";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fb2") {
    estado = "menu";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fb3") {
    estado = "menu";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fm1") {
    estado = "menu";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fm2") {
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

  if ( estado == "menu") {
    fill(255);
    textSize(55);
    text("Castlevania", 180, 100);
    textSize(40);
    text("El capitulo olvidado", 160, 150);
    rect(160, 300, 300, 80);
    fill(0);
    text("Comenzar", 220, 345);
  }

  if ( estado == "nar0") {

    fill(255);
    rect(70, height/2, 510, 170);
    rect(340, 420, 250, 50);
    textSize(20);
    fill(0);
    dialogo(75, height/2+10, 'na1');
    text("continuar...", 370, 455);
  }

  if ( estado == "nar1") {
    fill(255);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(0);
    textSize(20);
    dialogo(75, height/2+10, 'op1');
    text("continuar...", 370, 455);
    text("arrepentirse", 80, 455);
  }
  if ( estado == "nar2") {
    fill(255);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(0);
    textSize(20);
    dialogo(75, height/2+10, 'na2');
    text("Adentrarse", 370, 455);
    text("Pelear", 80, 455);
  }
  if ( estado == "nar3") {
    fill(255);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(0);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  }
  if ( estado == "nar4a") {
    fill(255);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(0);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  }
  if ( estado == "nar5a") {
    fill(255);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(0);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  }
  if ( estado == "nar6a") {
    fill(255);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(0);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  }
  if ( estado == "fb2") {
    fill(255);
    rect(160, 300, 300, 80);
    fill(0);
    textSize(40);
    text("Volver", 250, 355);
  }
  if ( estado == "fm2") {
    fill(255);
    rect(160, 300, 300, 80);
    fill(0);
    textSize(40);
    text("Volver", 250, 355);
  }
  if ( estado == "op2") {
    fill(255);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(0);
    textSize(20);
    dialogo(75, height/2+10, 'na4');
    text("Avanzar en soledad", 370, 455);
    text("Ser acomapañado", 80, 455);
  }
  if ( estado == "nar4b") {
    fill(255);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(0);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  }
  if ( estado == "fb3") {
    fill(255);
    rect(160, 300, 300, 80);
    fill(0);
    textSize(40);
    text("Volver", 250, 355);
  }

  if ( estado == "fb1") {
    fill(255);
    rect(160, 300, 300, 80);
    fill(0);
    textSize(40);
    text("Volver", 250, 355);
  }

  if ( estado == "fm1") {
    fill(255);
    rect(160, 300, 300, 80);
    fill(0);
    textSize(40);
    text("Volver", 250, 355);
  }

  ///////////////////////PENDIENTE

  if ( estado == "juego") {
    fill(255);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    fill(0);
    textSize(20);
    text("perder", 370, 455);
    text("ganar", 80, 455);
  }
}
