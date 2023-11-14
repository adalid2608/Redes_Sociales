import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';

import { CommonModule } from '@angular/common';
import { InstagramComponent } from 'src/app/modulos/instagram/paginas/instagram/instagram.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() mostrarOcultarInstagram = new EventEmitter<any>();
  @Output() mostrarOcultarMessenger = new EventEmitter<any>();
  @Output() mostrarOcultarWhatsApp = new EventEmitter<any>();

  constructor(){

  }
  
  cambiarRedSocial(event: MatTabChangeEvent){
    if(event.index == 1){
      this.mostrarOcultarMessenger.emit(false)
      return
    }
    if(event.index == 2) {
      return
    }
    if(event.index == 3){
      this.mostrarOcultarWhatsApp.emit(false)
      return
    }
    this.mostrarOcultarInstagram.emit(false)
  }
}
