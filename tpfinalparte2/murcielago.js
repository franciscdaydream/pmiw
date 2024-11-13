class Murcielago{

    constructor(pX,pY) {
    this.pX = pX;
    this.pY = pY;
    this.vivo = true;
  }
  
  dibujar(){
    if(this.vivo){
      fill(255);
      ellipse(this.pX, this.pY, 30, 30);
      this.movimiento();
      this.moverAbajo();
    }
  }
  
  movimiento(  ){
    if(this.pX > 320){
    this.pX -= 0.1;
    } else if (this.pX < 320){
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
  
  golpeLatigo(mX, mY){
    if(dist(this.pX, this.pY, mX, mY) < 15){
      this.matar();
      console.log("COLISIONO");
    }
  }
}
