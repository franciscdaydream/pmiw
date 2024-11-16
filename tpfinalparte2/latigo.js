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
  stroke(75, 44, 37)
  strokeWeight(5);
  line(this.pX,this.pY-30, this.mX,this.mY);
  fill(223,237,238);
  rectMode(CENTER);
  noStroke();
  rect(this.mX,this.mY,20,20)
  }
}

  latiGolpea( ) {
    if(mouseIsPressed){
      this.latigazo = true; 
    }   
  }

}