class Juego{
    constructor(dificultad){
      this.dificultad = dificultad;
      this.crearPj();
      this.crearMurci();
      this.botonCom = new boton(width/2,350,300,80,"Comenzar",1)
      this.botonFin = new boton(width/2,400,300,80,"Creditos",1)
      this.pantallaMenu = new Pantalla("menu");
      this.pantallaFm1 = new Pantalla("fm1");
      this.pantallaFb1 = new Pantalla("fb1");
      this.pantallaCre = new Pantalla("creditos");
      this.estado = "menu";
      this.Tiempo = 0;
    }
    
    dibujar(){
      if ( this.estado == "menu") {
        this.pj.pjVivo();
        this.pantallaMenu.dibujar();
        this.botonCom.dibujar();
        if(this.botonCom.presionar()){
          this.estado = "juEm"
        }
      }
    ////////////////////////////JUEGO    
       if ( this.estado == "juEm") {
        this.Tiempo++;
        image(imagen[0],0,0);
        this.pj.dibujar();
        if(this.Tiempo >= 1){
        for(let i=0; i < this.dificultad;i++){
          this.murcielago[i].dibujar();
          this.murcielago[i].movimiento(this.pj.pX);
          this.pj.impacto(this.murcielago[i]);
          if(this.pj.impacto(this.murcielago[i])){
            this.estado = "fm1"
          }
        }      
       }
      
     // --------------------------------FINALES
     /////////////////////////////Final bueno (ganar)
      }  else if ( this.estado == "fb1") {
        this.Tiempo = 0;
        this.pantallaFb1.dibujar();
        this.botonFin.dibujar();
        if(this.botonFin.presionar()){
      this.estado = "creditos"
        }
    ////////////////////////////Final malo (perder)    
      } else if ( this.estado == "fm1") {
        this.pantallaFm1.dibujar();
        this.botonFin.dibujar();
        if(this.botonFin.presionar()){
      this.estado = "creditos"
        }

    /////////////////////////Creditos    
      }  else if ( this.estado == "creditos") {
        this.pantallaCre.dibujar();
    }
    if (this.Tiempo/60 >= this.dificultad/2){
      this.estado = "fb1";
    }
   }
 

    crearMurci(){
      this.murcielago = [];
      for(let i=0; i < this.dificultad;i++){
        this.murcielago[i] = new Murcielago(i*60, 10);
      }
  }

    crearPj(){
      this.pj = new Pj(300, 360);;
    }

    interacTecla(keyCode){
      this.pj.moverme(keyCode);
      this.reiniciar(keyCode);
    }
    
    interacMouse(){
      for(let i=0; i < this.dificultad;i++){
        this.murcielago[i].golpeLatigo();
      }
      this.pj.latigazo();
    }

    reiniciar(keyCode){
      if (keyCode === ENTER && this.estado == "creditos" ){
        this.estado = "menu"
        for(let i=0; i < this.dificultad;i++){
          this.murcielago[i].reinicio(i*60, 10);
        }
        this.pj.reinicio(300, 360);
      }
    }

  }