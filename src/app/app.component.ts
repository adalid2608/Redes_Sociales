import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tarea-equipo';
  mostrarInstagram : boolean = true
  mostrarMesseger : boolean = false
  
  constructor(){}


  mostrarRedInstagram(){
    this.mostrarInstagram = true
    this.mostrarMesseger = false
  }

  mostrarRedSocialMessenger(){
    this.mostrarInstagram = false
    this.mostrarMesseger = true
  }

}
