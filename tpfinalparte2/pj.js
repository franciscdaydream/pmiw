class pj {
  const(pX, pY) {
    this.pX = pX;
    this.pY = pY;
    this.hp = 2;
    this.vivo = true;
    }

  dibujar() {
   if (this.vivo = true){
    fill(255);
    rect(this.pX, this.pY, 50, 70);
   } else {
    fill(0);
    rect(this.pX, this.pY, 50, 50);
   }
    
  }

  moverme(keyCode){
    if(keyCode == LEFT_ARROW){
      this.moIzq();
    }else if(keyCode == RIGHT_ARROW){
      this.moDer();
    }
  }


    moDer(){
      this.pX += 5;
    }
    
    moIzq(){
      this.pX -= 5;
    }

  muete() {
   if ( this.hp == 0){
    this.vivo = false;
   }
  }

  daño(){
    this.hp =-1;
  }

  impacto(murcielago){
    if(dist(this.pX, this.pY, murcielago.pX, murcielago.pY) < 15){
      this.daño();
    }
  }

}
