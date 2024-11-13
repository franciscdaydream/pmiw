class Latigo{
constructor(pX,pY){
    this.pX = pX;
    this.pY = pY;
    this.mX = mouseX;
    this.mY = mouseY;
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

  latigoGolpea() {
    if (this.mX < 128) {
      this.latigo1 = true;
    } else if (this.mX > 128 && this.mX < 256) {
      this.latigo2 = true;
    } else if (this.mX > 256 && this.mX < 384) {
      this.latigo3 = true;
    } else if (this.mX > 384 && this.mX < 512) {
      this.latigo4 = true;
    } else if (this.mX > 512 && this.mX < 640) {
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