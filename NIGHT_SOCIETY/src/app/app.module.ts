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
import { HeaderNotificationsComponent } from './components/header-notifications/header-notifications.component';

// Modulo de amigos
import { AmigosModule } from './routes/amigos/amigos.module';
import { HttpClientModule } from '@angular/common/http';
import { EstrellasComponent } from './components/estrellas/estrellas.component';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { LoginComponent } from './routes/login/login.component';



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
    CardHomeComponent,
    LoginComponent,
    LaddignPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AmigosModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
