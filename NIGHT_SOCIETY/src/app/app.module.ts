import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
<<<<<<< HEAD
=======
// Modulo de amigos
import { AmigosModule } from './routes/amigos/amigos.module';
>>>>>>> features/friends

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
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmigosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
