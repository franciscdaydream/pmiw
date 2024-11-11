class Juego{
    constructor(dificultad){
      this.dificultad = dificultad;
      this.crearPj();
      this.crearMurci();
    }
    
    dibujar(){
      this.pj.dibujar();
      
      for(let i=0; i < this.dificultad;i++){
        this.murcielago[i].dibujar();
      }
      
    }
    
    crearMurci(){
      this.murcielago = [];
      for(let i=0; i < this.dificultad;i++){
        this.murcielago[i] = new murcielago(i*40, 100);
      }
    }
    
    crearPj(){
      this.pj = new pj(width/2, height-5);
    }

    moverPj(keyCode){
      this.pj.moverme(keyCode);
    }
    
  }