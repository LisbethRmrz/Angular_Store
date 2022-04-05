import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dia 4 del reto'; //Ejemplos de interpolacion (One way data binding)
  url = 'https://static01.nyt.com/images/2017/02/15/science/15tb-flowers01/15tb-flowers01-superJumbo.jpg'
  name = ''; //Ejemplos de interpolacion (Two way data binding)
  texto = 'Hola'; //Ejemplos de interpolacion (One way data binding)

  getName():void{
    console.log("Hola Lisbeth");
  }
}
