class boton {

    constructor(pX, pY, tX, tY, txt) {
      this.pX=pX;
      this.pY=pY;
      this.tX=tX;
      this.tY=tY;
      this.txt = txt;
    }
  
    dibujar() {
      push();
      rectMode(CENTER);
      stroke(224, 175, 94);
      strokeWeight(2);
      fill(82, 4, 1);
      rect(this.pX, this.pY, this.tX, this.tY);
      textAlign(CENTER);
      fill(255);
      textSize(40);
      text(this.txt, this.pX, this.pY+this.tY/5);
      pop();
    }
    actualizar() {
    }
  
    presionar() {
  
      if (mouseIsPressed && mouseX<this.pX+this.tX/2 && mouseX>this.pX-this.tX/2 && mouseY> this.pY-this.tY/2 && mouseY< this.pY+this.tY/2) {
        return true
      }  else {
        return false
      }
    }
  }
  
