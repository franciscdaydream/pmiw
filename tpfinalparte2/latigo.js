class Latigo{
constructor(pX,pY){
    this.pX = pX;
    this.pY = pY;
}

dibujar(){
  stroke('black');
  strokeWeight(5);
  if (this.latigo1 = true){
    line(this.pX,this.pY, 64,50);
}else if (this.latigo2 = true) {
  line(this.pX,this.pY, 192,50);
}else if (this.latigo3 = true) {
  line(this.pX,this.pY, 320,50);
}else if (this.latigo4 = true) {
  line(this.pX,this.pY, 448,50);
}else if (this.latigo5 = true) {
  line(this.pX,this.pY, 576,50);
}

}

  latigoGolpea( mX ) {
    if (mX < 128) {
      this.latigo1 = true;
    } else if (mX > 128 && mX < 256) {
      this.latigo2 = true;
    } else if (mX > 256 && mX < 384) {
      this.latigo3 = true;
    } else if (mX > 384 && mX < 512) {
      this.latigo4 = true;
    } else if (mX > 512 && mX < 640) {
      this.latigo5 = true;
    } else {
     this.latigo1= false;
     this.latigo2= false;
     this.latigo3= false;
     this.latigo4= false;
     this.latigo5= false;
    }
  }

}