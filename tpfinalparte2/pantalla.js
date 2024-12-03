class Pantalla{
  constructor(pantalla){
    this.pantalla = pantalla;
    this.dial1 = new dialogo(50, 100, 't1');
    this.dial2 = new dialogo(50, 140, 't2');
    this.dial3 = new dialogo(50, 180, 't3');
    this.dial4 = new dialogo(50, 220, 't4');
    this.dial5 = new dialogo(50, 260, 't5');
    this.dial6 =new dialogo(50, 150, 'fb1');
    this.dial7 =new dialogo(50, 180, 'fb1a');
    this.dial8 =new dialogo(50, 210, 'fb1b');
    this.dial9 =new dialogo(50, 240, 'fb1c');
    this.dial10 = new dialogo(50, 150, 'fm1');
    this.dial11 = new dialogo(50, 180, 'fm1a');
    this.dial12 = new dialogo(50, 210, 'fm1b');
  }

  dibujar(){
    
    if (this.pantalla == "menu"){
    image(imagen[0],0,0);
    this.dial1.dibujar();
    this.dial2.dibujar();
    this.dial3.dibujar();
    this.dial4.dibujar();
    this.dial5.dibujar();
} else if (this.pantalla == "fb1"){
    image(imagen[6],0,0);
    fill(255);
    textSize(55);
    text("Final bueno 1", 120, 100);
    this.dial6.dibujar();
    this.dial7.dibujar();
    this.dial8.dibujar();
    this.dial9.dibujar();
} else if (this.pantalla == "fm1"){
    image(imagen[5],0,0);
    this.Tiempo = 0;
    fill(255);
    textSize(55);
    text("Final malo 1", 120, 100);
    this.dial10.dibujar();
    this.dial11.dibujar();
    this.dial12.dibujar();
} else if(this.pantalla == "creditos"){
    fill(255);
    textSize(55);
    text("Gracias por jugar", width/6, 100);
    textSize(40);
    text("Alumno", width/8, 175);
    text("Precione ENTER para reiniciar", width/8, 400);
    textSize(25);
    text("Franco D'angelo - 88224/2", width/8, 225);
    textSize(20);
    text("Creacion  Warren Ellis - Basado en  Castlevania de Konami", width/8, 310);    
}
  }
}