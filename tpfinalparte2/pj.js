class Pj {
  constructor(pX, pY) {
    this.pX = pX;
    this.pY = pY;
    this.hp = 2;
    this.vivo = true;
    this.latigo = new Latigo();
    }

  dibujar() {
   if (this.vivo = true){
    this.latigo.dibujar();
    imageMode(CENTER);
    image(imagen[1],this.pX,this.pY);
  } else if (this.vivo = false) {
    fill(255);
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
      this.pX += 15;
    }
    
    moIzq(){
      this.pX -= 15;
    }

  muete() {
   if ( this.hp == 0){
    this.vivo = false;
   }
  }


  daño(){
    this.hp --;
  }

  impacto(mur){
    if(dist(this.pX, this.pY, mur.pX, mur.pY) < 40){
      this.daño();
      console.log("COLISIONO");
      console.log(this.hp);
    }
  }

 latigazo(){
  this.latigo = new Latigo(this.pX,this.pY);
  this.latigo.latiGolpea( );
 }

}
