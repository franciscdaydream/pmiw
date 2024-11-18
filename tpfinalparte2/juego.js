class Juego{
    constructor(dificultad){
      this.dificultad = dificultad;
      this.crearPj();
      this.crearMurci();
      this.botonCom = new boton(width/2,350,300,80,"Comenzar")
      this.botonFin = new boton(width/2,400,300,80,"Creditos")
      this.botonCre = new boton(width/2,350,300,80,"Volver")
      this.dial1 = new dialogo(50, 100, 't1');
      this.dial2 = new dialogo(50, 130, 't2');
      this.dial3 = new dialogo(50, 160, 't3');
      this.dial4 = new dialogo(50, 190, 't4');
      this.dial5 = new dialogo(50, 220, 't5');
      this.dial6 =new dialogo(50, 150, 'fb1');
      this.dial7 =new dialogo(50, 180, 'fb1a');
      this.dial8 =new dialogo(50, 210, 'fb1b');
      this.dial9 =new dialogo(50, 240, 'fb1c');
      this.dial10 = new dialogo(50, 150, 'fm1');
      this.dial11 = new dialogo(50, 180, 'fm1a');
      this.dial12 = new dialogo(50, 210, 'fm1b');
      this.estado = "menu";
      this.Tiempo = 0;
    }
    
    dibujar(){
      if ( this.estado == "menu") {
        this.pj.pjVivo();
        image(imagen[0],0,0);
        this.dial1.dibujar();
        this.dial2.dibujar();
        this.dial3.dibujar();
        this.dial4.dibujar();
        this.dial5.dibujar();
        this.botonCom.dibujar();
        if(this.botonCom.presionar()){
          this.estado = "juEm"
        }

    ////////////////////////////JUEGO    
      } else if ( this.estado == "juEm") {
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
        image(imagen[6],0,0);
        fill(255);
        textSize(55);
        text("Final bueno 1", 120, 100);
        this.dial6.dibujar();
        this.dial7.dibujar();
        this.dial8.dibujar();
        this.dial9.dibujar();
        this.botonFin.dibujar();
        if(this.botonFin.presionar()){
      this.estado = "creditos"
        }
    ////////////////////////////Final malo (perder)    
      } else if ( this.estado == "fm1") {
        image(imagen[5],0,0);
        this.Tiempo = 0;
        fill(255);
        textSize(55);
        text("Final malo 1", 120, 100);
        this.dial10.dibujar();
        this.dial11.dibujar();
        this.dial12.dibujar();
        this.botonFin.dibujar();
        if(this.botonFin.presionar()){
      this.estado = "creditos"
        }

    /////////////////////////Creditos    
      }  else if ( this.estado == "creditos") {
        for(let i=0; i < this.dificultad;i++){
          this.murcielago[i].reinicio(i*60, 10);
        }
        this.pj.reinicio(300, 360);
        fill(255);
        textSize(55);
        text("Gracias por jugar", 110, 100);
        textSize(40);
        text("Alumno", 210, 150);
        textSize(25);
        text("Franco D'angelo - 88224/2", 80, 200);
        textSize(20);
        text("Creacion  Warren Ellis - Basado en  Castlevania de Konami", 55, 270);
        this.botonCre.dibujar();
        if(this.botonCre.presionar()){
      this.estado = "menu"
        }
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