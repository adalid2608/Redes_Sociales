import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.scss'],
  standalone: true,
  imports: [BrowserModule]
})
export class HistoriasComponent {
  @Input('historias-url') historia: any
  constructor(){
  }
}
