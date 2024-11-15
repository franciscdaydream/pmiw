class Pj {
  constructor(pX, pY) {
    this.pX = pX;
    this.pY = pY;
    this.vivo = true;
    this.latigo = new Latigo();

    }

  dibujar() {
   if (this.vivo){
    this.latigo.dibujar();
    imageMode(CENTER);
    image(imagen[1],this.pX,this.pY);
  } else {
    image(imagen[3],this.pX,this.pY);
  }
  }

  moverme(keyCode){
    if(keyCode == LEFT_ARROW){
      this.moIzq();
      this.movI = true;
    }else if(keyCode == RIGHT_ARROW){
      this.moDer();
      this.movD = true;
    }
  }


    moDer(){
      this.pX += 15;
    }
    
    moIzq(){
      this.pX -= 15;
    }

  muete() {
    this.vivo = false;
  }




  impacto(mur){
    if(dist(this.pX, this.pY, mur.pX, mur.pY) < 50){
      this.muete();
      console.log(this.vivo);
    }
  }

 latigazo(){
  this.latigo = new Latigo(this.pX-42,this.pY-20);
  this.latigo.latiGolpea( );
 }

}
