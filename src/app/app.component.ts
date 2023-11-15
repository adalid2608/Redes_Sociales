import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tarea-equipo';
  mostrarInstagram : boolean = true
  mostrarMessenger : boolean = false
  
  constructor(){}


  mostrarRedInstagram(){
    this.mostrarInstagram = true
    this.mostrarMessenger = false
  }

  mostrarRedSocialMessenger(){
    this.mostrarInstagram = false
    this.mostrarMessenger = true
  }

}
