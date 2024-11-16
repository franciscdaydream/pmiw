class Pj {
  constructor(pX, pY) {
    this.pX = pX;
    this.pY = pY;
    this.latigo = new Latigo();
    this.movimi = 1;
    this.moviLati = -42;
    }

  dibujar() {
   if (Vivo){
    this.latigo.dibujar();
    imageMode(CENTER);
    image(imagen[this.movimi],this.pX,this.pY);
  } else {
    image(imagen[3],this.pX,this.pY);
  }
  }

  moverme(keyCode){
    if(keyCode == LEFT_ARROW){
      this.moIzq();
      this.movimi = 2;
      this.moviLati = -52;
    }else if(keyCode == RIGHT_ARROW){
      this.moDer();
      this.movimi = 1;
      this.moviLati = 52;
    }
  }


    moDer(){
      this.pX += 15;
    }
    
    moIzq(){
      this.pX -= 15;
    }

  muete() {
    Vivo = false;
    estado = "fm1";
  }




  impacto(mur){
    if(dist(this.pX, this.pY, mur.pX, mur.pY) < 50){
      this.muete();
      console.log(Vivo);
    }
  }

 latigazo(){
  this.latigo = new Latigo(this.pX-this.moviLati,this.pY-30);
  this.latigo.latiGolpea( );
 }

}
