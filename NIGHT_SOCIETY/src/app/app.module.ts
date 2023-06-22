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
import { AmigosModule } from './routes/amigos/amigos.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
=======
import { HeaderNotificationsComponent } from './components/header-notifications/header-notifications.component';

// Modulo de amigos
import { AmigosModule } from './routes/amigos/amigos.module';


import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { LoginComponent } from './routes/login/login.component';
>>>>>>> homepage

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    CrearEventosComponent,
    CalificarComponent,
    PerfilComponent,
    HomeComponent,
    HeaderNotificationsComponent,
    PoliticasComponent,
    NavbarComponent,
<<<<<<< HEAD
    ButtonComponent,
    LaddignPageComponent,
    ButtonComponent,
    LaddignPageComponent,
=======
    CardHomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmigosModule,
>>>>>>> homepage
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
