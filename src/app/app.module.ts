import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ChatComponent } from 'src/app/componentes/instagram/chat/chat.component';
import { ChatWhatsAppComponent } from './componentes/whatsApp/chat-whats-app/chat-whats-app.component';
import {FormsModule} from '@angular/forms';
import { HistoriasComponent } from 'src/app/componentes/instagram/historias/historias.component';
import { InstagramComponent } from './modulos/instagram/paginas/instagram/instagram.component';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { MenuComponent } from "./componentes/menu/menu.component";
import { MessengerBottomBarComponent } from './componentes/messenger/messenger-bottom-bar/messenger-bottom-bar.component';
import { MessengerChatsComponent } from './componentes/messenger/messenger-chats/messenger-chats.component';
import { MessengerComponent } from './modulos/messenger/pages/messenger/messenger.component';
import { MessengerHeaderComponent } from './componentes/messenger/messenger-header/messenger-header.component';
import { MessengerHistoriesComponent } from './componentes/messenger/messenger-histories/messenger-histories.component';
import { NgModule } from '@angular/core';
import { WhatsAppComponent } from './modulos/whatsApp/paginas/whats-app/whats-app.component';

@NgModule({
    declarations: [
        AppComponent,
        InstagramComponent,
        MessengerComponent,
        WhatsAppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTabsModule,
        MatSelectModule,
        MatButtonModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MenuComponent,
        MatIconModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        HistoriasComponent,
        ChatComponent,
        MessengerBottomBarComponent,
        MessengerHeaderComponent,
        MessengerHistoriesComponent,
        MessengerChatsComponent,
        ChatWhatsAppComponent,
        
        
    ]
})
export class AppModule { }
