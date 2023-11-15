import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { messengerIUsuario } from '../../../core/interfaces/messenger-usuario.interface';

@Component({
  selector: 'app-messenger-chats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messenger-chats.component.html',
  styleUrls: ['./messenger-chats.component.scss'],
})
export class MessengerChatsComponent {
  @Input() name: string = '';
  @Input('last-message') lastMessage: string = '';
  @Input() image: string = '';
  @Input() history: boolean = false;
  @Input() status: boolean = false;
  @Input() seen: boolean = false;

  @Output() actionSeen = new EventEmitter<messengerIUsuario>();
  @Output() actionSeenHistory = new EventEmitter<any>();

  onChangeSeenHistory() {
    if (!this.history) return;
    this.history = !this.history;
    this.actionSeenHistory.emit({
      name: this.name,
      image: this.image,
      history: this.history,
      status: this.status,
    });
  }

  onChangeSeen() {
    if (this.seen) return;
    this.seen = !this.seen;
    this.actionSeen.emit({
      name: this.name,
      lastMessage: this.lastMessage,
      image: this.image,
      history: this.history,
      status: this.status,
      seen: this.seen,
    });
  }

  limitWords(text: string, limit: number): string {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return text;
    }
  }
}
