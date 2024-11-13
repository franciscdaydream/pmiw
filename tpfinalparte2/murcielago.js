class Murcielago{

    constructor(pX,pY) {
    this.pX = pX;
    this.pY = pY;
    this.vivo = true;
  }
  
  dibujar(){
    if(this.vivo){
      fill(255);
      ellipse(this.pX, this.pY, 40, 40);
      this.movimiento();
      this.moverAbajo();
      this.volver();
    }
  }
  
  movimiento(mX){
    if(this.pX < mX){
      this.pX += 0.4;
    } else if (this.pX > mX){
      this.pX -= 0.4;
    }
  }


  moverAbajo(){
    if(this.pY <= height+50 ){
      this.pY += 0.5;
      }
  }

 volver(){
  if(this.pY >= height+20){
    this.pX = int(random(width));
    this.pY = -10;
  }
 }

  matar(){
    this.vivo = false;
  }
  
  golpeLatigo(){
    if(dist(this.pX, this.pY, mouseX, mouseY) < 20){
      this.matar();
      console.log("COLISIONO");
    }
  }
}
