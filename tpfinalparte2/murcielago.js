class Murcielago{

    constructor(pX,pY) {
    this.pX = pX;
    this.pY = pY;
    this.vivo = true;
  }
  
  dibujar(){
    if(this.vivo){
      imageMode(CENTER);
      image(imagen[1],this.pX,this.pY);
      this.movimiento();
      this.moverAbajo();
      this.volver();
    }
  }
  
  movimiento(mX){
    if(this.pX < mX){
      this.pX += 0.6;
    } else if (this.pX > mX){
      this.pX -= 0.6;
    }
  }


  moverAbajo(){
    if(this.pY <= height+50 ){
      this.pY += 1;
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
    }
  }
}
