import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { CalificarComponent } from './routes/calificar/calificar.component';
import { PoliticasComponent } from './routes/politicas/politicas.component';
import { CrearEventosComponent } from './routes/crear-eventos/crear-eventos.component';
import { EventosComponent } from './routes/eventos/eventos.component';
import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/home.component';
import { PerfilComponent } from './routes/perfil/perfil.component';
import { RegisterComponent } from './routes/register/register.component';
import { LandingFriendsComponent } from './routes/friends/page/landing-friends/landing-friends.component';

const routes: Routes = [
  { path: '', redirectTo: '/laddig', pathMatch: 'full' },
  { path: 'laddig', component: LaddignPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'friends', component: LandingFriendsComponent },
  { path: 'calificar', component: CalificarComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'laddig', component: LaddignPageComponent },
  { path: 'createEvent', component: CrearEventosComponent },
  { path: 'events', component: EventosComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
