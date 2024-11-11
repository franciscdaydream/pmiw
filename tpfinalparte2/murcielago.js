class murcielago{

    constructor(pX, pY) {
    this.pX = pX;
    this.pY = pY;
    this.vivo = true;
    
  }
  
  dibujar(){
    if(this.vivo){
      ellipse(this.posX, this.posY, 30, 30);
    }
  }
  
  movimiento(){
    if(this.pX >= 320 ){
    this.pX =- 5;
    } else if (this.pX <= 320){
    this.pX =+ 5;
    } else if(this.pY >= height ){
    this.pY =- 10;
    }
  }

  matar(){
    this.vivo = false;
  }
  
  golpeLatigo(){
    if(dist(this.pX, this.pY, mouseX, mouseY) < 15){
      this.matar();
    }
  }
}
