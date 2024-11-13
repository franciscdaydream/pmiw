class Juego{
    constructor(dificultad){
      this.dificultad = dificultad;
      this.crearPj();
      this.crearMurci();
      this.crearLati();
      
    }
    
    dibujar(){
      this.pj.dibujar();
     // this.latigo.dibujar();
      for(let i=0; i < this.dificultad;i++){
        this.murcielago[i].dibujar();
        this.murcielago[i].movimiento(this.pj.pX);
      }
    }
    
    crearMurci(){
      this.murcielago = [];
      for(let i=0; i < this.dificultad;i++){
        this.murcielago[i] = new Murcielago(i*40 + 40, 10);
      }
    }

   
    
  crearLati(){
    this.latigo = new Latigo(this.pj.pX , this.pj.pY);
  }

    crearPj(){
      this.pj = new Pj(300, 380);
    }

    moverPj(keyCode){
      this.pj.moverme(keyCode);
    }
    
    golMur(){
      for(let i=0; i < this.dificultad;i++){
        this.murcielago[i].golpeLatigo();
      }
    }
  }