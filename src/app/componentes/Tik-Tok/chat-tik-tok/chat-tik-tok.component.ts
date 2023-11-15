import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chat-tik-tok',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './chat-tik-tok.component.html',
  styleUrls: ['./chat-tik-tok.component.scss']
})
export class ChatTikTokComponent {
  @Input() userImage: string = ""
  @Input() userName: string = ""
  @Input() message: string = ""
  @Input() status: boolean = true
  @Input() fecham: string = ""
  @Input() numMensajes: number = 0
  @Output() abrirMensaje = new EventEmitter<any>();
  
  onOpenMessage() {
    this.abrirMensaje.emit({
      userName: this.userName,
      message: this.message,
      status:this.status,
      numMensajes: this.numMensajes
    });
  }
}
