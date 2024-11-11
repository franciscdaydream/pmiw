class latigo{
constructor(pX,pY){
    this.pX = pj.pX;
    this.pY = pj.pY;
}

dibujar(){
  stroke('black');
  strokeWeight(5);
  if (this.latigo1 === true){
    line(this.pX,this.pY, 64,50);
}else if (this.latigo2 === true) {
  line(this.pX,this.pY, 192,50);
}else if (this.latigo3 === true) {
  line(this.pX,this.pY, 320,50);
}else if (this.latigo4 === true) {
  line(this.pX,this.pY, 448,50);
}else if (this.latigo5 === true) {
  line(this.pX,this.pY, 576,50);
}

}

mouseClicked() {
    if (mouseX < 128) {
      this.latigo1 === true;
    } else if (mouseX > 128 && mouseX < 256) {
      this.latigo2 === true;
    } else if (mouseX > 256 && mouseX < 384) {
      this.latigo3 === true;
    } else if (mouseX > 384 && mouseX < 512) {
      this.latigo4 === true;
    } else if (mouseX > 512 && mouseX < 640) {
      this.latigo5 === true;
    } else {
     this.latigo1=== false;
     this.latigo2=== false;
     this.latigo3=== false;
     this.latigo4=== false;
     this.latigo5=== false;
    }
  }

}