class Latigo{
constructor(pX,pY){
    this.pX = pX;
    this.pY = pY;
    this.mX = mouseX;
    this.mY = mouseY;
    this.latigazo = false;
}

dibujar(){ 
  if (this.latigazo){
  push();
  stroke(255);
  strokeWeight(5);
  line(this.pX,this.pY, this.mX,this.mY);
  pop();
  }
}

  latiGolpea( ) {
      this.latigazo = true;  
  }

}