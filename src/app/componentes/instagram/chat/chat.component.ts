import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [BrowserModule]
})
export class ChatComponent {
  @Input('chats-instagram') chats: any

  ngOnchanges(changes: any): void{
    console.log(this.chats);
    
  }
}
