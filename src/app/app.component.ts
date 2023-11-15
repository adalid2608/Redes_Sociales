import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tarea-equipo';
  mostrarInstagram : boolean = true
  mostrarMessenger : boolean = false
  mostrarWhatsApp : boolean = false
  mostrarTikTok : boolean = false

  constructor() {}

  mostrarRedInstagram() {
    this.mostrarInstagram = true;
    this.mostrarMessenger = false;
    this.mostrarTikTok = false
    this.mostrarWhatsApp = false;
  }

  mostrarRedSocialMessenger() {
    this.mostrarInstagram = false;
    this.mostrarMessenger = true;
    this.mostrarTikTok = false
    this.mostrarWhatsApp = false
  }
  
  mostrarRedSocialTikTok(){
    this.mostrarInstagram = false
    this.mostrarMessenger = false
    this.mostrarTikTok = true
    this.mostrarWhatsApp = false;
  }

  mostrarRedSocialWhatsApp() {
    this.mostrarInstagram = false;
    this.mostrarMessenger = false;
    this.mostrarTikTok = false
    this.mostrarWhatsApp = true;
  }
}
