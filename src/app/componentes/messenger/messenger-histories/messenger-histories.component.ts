import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { messengerIUsuario } from '../../../core/interfaces/messenger-usuario.interface';

@Component({
  selector: 'app-messenger-histories',
  standalone: true,
  imports: [CommonModule, MatBadgeModule],
  templateUrl: './messenger-histories.component.html',
  styleUrls: ['./messenger-histories.component.scss']
})
export class MessengerHistoriesComponent {
  @Input() history: boolean = false;
  @Input() status: boolean = false;
  @Input() image: string = '';
  @Input() name: string = '';

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
}
