import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EventosComponent } from './routes/eventos/eventos.component';
import { CrearEventosComponent } from './routes/crear-eventos/crear-eventos.component';
import { CalificarComponent } from './routes/calificar/calificar.component';
import { PerfilComponent } from './routes/perfil/perfil.component';
import { HomeComponent } from './routes/home/home.component';
import { PoliticasComponent } from './routes/politicas/politicas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { AmigosModule } from './routes/amigos/amigos.module';
import { HttpClientModule } from '@angular/common/http';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { EstrellasComponent } from './components/estrellas/estrellas.component';


@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    CrearEventosComponent,
    CalificarComponent,
    PerfilComponent,
    HomeComponent,
    PoliticasComponent,
    NavbarComponent,
    ButtonComponent,
    LaddignPageComponent,
    ButtonComponent,
    LaddignPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
