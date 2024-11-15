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
  stroke(255);
  strokeWeight(5);
  line(this.pX,this.pY-30, this.mX,this.mY);
  }
}

  latiGolpea( ) {
    if(mouseIsPressed){
      this.latigazo = true; 
    }   
  }

}