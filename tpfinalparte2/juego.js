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
        this.murcielago[i].movimiento(this.pj.pX);
        this.pj.impacto(this.murcielago[i]);
      }
      
    }
    
    crearMurci(){
      this.murcielago = [];
      for(let i=0; i < this.dificultad;i++){
        this.murcielago[i] = new Murcielago(i*60, 10);
      }
    }

    crearPj(){
      this.pj = new Pj(300, 360);
    }

    moverPj(keyCode){
      this.pj.moverme(keyCode);
    }
    
    golMur(){
      for(let i=0; i < this.dificultad;i++){
        this.murcielago[i].golpeLatigo();
      }
      this.pj.latigazo();
    }
  }