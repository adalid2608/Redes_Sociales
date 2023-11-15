import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chat-whats-app',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './chat-whats-app.component.html',
  styleUrls: ['./chat-whats-app.component.scss']
})
export class ChatWhatsAppComponent {  
  @Input() imagenContacto : string = ""
  @Input() nombreContacto : string = ""
  @Input() mensajeContacto : string = ""
  @Input() fechaMensaje : string = ""
  @Input() numMensajes : number = 0
  @Input() estatusMensaje : boolean | null | string = null
  
  @Output() accionMensajeAbierto = new EventEmitter<any>();
  
  onOpenMessage() {
    this.accionMensajeAbierto.emit({
      nombreContacto: this.nombreContacto,
      mensajeContacto: this.mensajeContacto,
      estatusMensaje:this.estatusMensaje,
      numMensajes: this.numMensajes
    });
  }
}
