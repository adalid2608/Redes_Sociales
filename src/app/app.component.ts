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
  mostrarWhatsApp : boolean = false
  mostrarTikTok : boolean = false
  
  constructor(){}


  mostrarRedInstagram(){
    this.mostrarInstagram = true
    this.mostrarMesseger = false
    this.mostrarTikTok = false
    this.mostrarWhatsApp = false
  }

  mostrarRedSocialMessenger(){
    this.mostrarInstagram = false
    this.mostrarMesseger = true
    this.mostrarTikTok = false
    this.mostrarWhatsApp = false
  }
  
  mostrarRedSocialTikTok(){
    this.mostrarInstagram = false
    this.mostrarMesseger = false
    this.mostrarTikTok = true
    this.mostrarWhatsApp = false
  }

  mostrarRedSocialWhatsApp(){
    this.mostrarInstagram = false
    this.mostrarMesseger = false
    this.mostrarTikTok = false
    this.mostrarWhatsApp = true
  }

}
