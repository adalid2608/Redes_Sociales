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
import { NgModule } from '@angular/core';
import { WhatsAppComponent } from './modulos/whatsApp/paginas/whats-app/whats-app.component';

@NgModule({
    declarations: [
        AppComponent,
        InstagramComponent,
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

        ChatWhatsAppComponent,
        
    ]
})
export class AppModule { }
