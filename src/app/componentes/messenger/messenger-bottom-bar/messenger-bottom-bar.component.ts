import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-messenger-bottom-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
  ],
  templateUrl: './messenger-bottom-bar.component.html',
  styleUrls: ['./messenger-bottom-bar.component.scss'],
})
export class MessengerBottomBarComponent {}
