class Juego{
    constructor(dificultad){
      this.dificultad = dificultad;
      this.crearPj();
      this.crearMurci();
      this.crearLati();
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
        this.murcielago[i] = new Murcielago(i*40 + 20, 10);
      }
    }
    
  crearLati(){
    this.latigo = new Latigo(this.pj.pX , this.pj.pY);
  }

    crearPj(){
      this.pj = new Pj(300, 400);
    }

    moverPj(keyCode){
      this.pj.moverme(keyCode);
    }
    
  }