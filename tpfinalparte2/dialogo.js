class dialogo{
    constructor(pX, pY, id){
      this.pX = pX;
      this.pY = pY;
      this.id = id;
  }

  dibujar(){
    push();
    translate(this.pX, this.pY);
    stroke(224, 175, 94);
    strokeWeight(2);
    fill(255);
    textSize(22);
    text(this.leer(this.id, 'Nombre'), 20, 30);
    pop();
  }


   leer(_id, _columna) {
    let IDColumn = guion.getColumn('ID');
  
    for (let fila=0; fila < IDColumn.length; fila++) {
      if (IDColumn[fila] === _id) {
        return guion.getColumn(_columna)[fila];
      }
    }
    return "ID no encontrado: " + _id;
  }
}