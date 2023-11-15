import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-story-tik-tok',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './story-tik-tok.component.html',
  styleUrls: ['./story-tik-tok.component.scss']
})
export class StoryTikTokComponent {
  @Input() userImage: string = ""
  @Input() userName: string = ""
  @Input() status: boolean = true
  @Output() openStory = new EventEmitter<any>();


onOpenStory() {
  this.openStory.emit({
    userName: this.userName,
    status:this.status
  });
}
}