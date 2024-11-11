class latigo{
const(pX,pY){
    this.pX = pj.pX;
    this.pY = pj.pY;
}

dibujar(){
  

}

mouseClicked() {
    if (mouseX < 128) {
      this.latigo1 = true;
    } else if (mouseX > 128 && mouseX < 256) {
      this.latigo2 = true;
    } else if (mouseX > 256 && mouseX < 384) {
      this.latigo3 = true;
    } else if (mouseX > 384 && mouseX < 512) {
      this.latigo4 = true;
    } else if (mouseX > 512 && mouseX < 640) {
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