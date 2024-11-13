class Murcielago{

    constructor(pX,pY) {
    this.pX = pX;
    this.pY = pY;
    this.vivo = true;
    this.mX = mouseX;
    this.mY = mouseY;
  }
  
  dibujar(){
    if(this.vivo){
      fill(255);
      ellipse(this.pX, this.pY, 30, 30);
      this.movimiento();
      this.moverAbajo();
    }
  }
  
  movimiento( ppX ){
    if(this.pX > ppX.pX){
    this.pX -= 0.1;
    } else if (this.pX < ppX.pY){
    this.pX += 0.1;
    }
  }

  moverAbajo(){
    if(this.pY <= height+15 ){
      this.pY += 1;
      }
  }

  matar(){
    this.vivo = false;
  }
  
  golpeLatigo(){
    if(dist(this.pX, this.pY, this.mX, this.mY) < 30){
      this.matar();
    }
  }
}
