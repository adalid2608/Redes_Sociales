import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { MenuComponent } from "./componentes/menu/menu.component";
import { NgModule } from '@angular/core';
import { InstagramComponent } from './modulos/instagram/paginas/instagram/instagram.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { HistoriasComponent } from 'src/app/componentes/instagram/historias/historias.component';
import { ChatComponent } from 'src/app/componentes/instagram/chat/chat.component';
@NgModule({
    declarations: [
        AppComponent,
        InstagramComponent
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
        ChatComponent
    ]
})
export class AppModule { }
