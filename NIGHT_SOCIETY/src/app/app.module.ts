import { NgModule, OnInit } from '@angular/core';
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
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AmigosModule } from './routes/amigos/amigos.module';
import { HttpClientModule } from '@angular/common/http';
import { EstrellasComponent } from './components/estrellas/estrellas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { CardCommentComponent } from './components/card-comment/card-comment.component';
import { from } from 'rxjs';

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
    CardCommentComponent,
    LaddignPageComponent,
    EstrellasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AmigosModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
