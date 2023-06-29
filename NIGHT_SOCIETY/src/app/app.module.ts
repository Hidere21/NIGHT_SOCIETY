import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// Modulo de amigos
// import { FriendsModule } from './routes/friends/friends.module';

import { AppComponent } from './app.component';

import { EventosComponent } from './routes/eventos/eventos.component';
import { CrearEventosComponent } from './routes/crear-eventos/crear-eventos.component';
import { CalificarComponent } from './routes/calificar/calificar.component';
import { PerfilComponent } from './routes/perfil/perfil.component';
import { HomeComponent } from './routes/home/home.component';
import { PoliticasComponent } from './routes/politicas/politicas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderNotificationsComponent } from './components/header-notifications/header-notifications.component';
import { EstrellasComponent } from './components/estrellas/estrellas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { from } from 'rxjs';
import { NavbarNSComponent } from './routes/friends/components/navbar-ns/navbar-ns.component';
import { FriendsSuggestionComponent } from './routes/friends/page/friends-suggestion/friends-suggestion.component';
import { ContactSectionComponent } from './routes/friends/page/contact-section/contact-section.component';
import { LandingFriendsComponent } from './routes/friends/page/landing-friends/landing-friends.component';
import { FriendsRoutingModule } from './routes/friends/friends-routing.module';

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
    LoginComponent,
    LaddignPageComponent,
    EstrellasComponent,
    RegisterComponent,
    NavbarNSComponent,
    FriendsSuggestionComponent,
    ContactSectionComponent,
    LandingFriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //FriendsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FriendsRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
