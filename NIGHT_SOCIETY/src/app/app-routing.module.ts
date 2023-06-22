import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
<<<<<<< HEAD
import { CalificarComponent } from './routes/calificar/calificar.component';
import { PoliticasComponent } from './routes/politicas/politicas.component';
import { CrearEventosComponent } from './routes/crear-eventos/crear-eventos.component';
import { EventosComponent } from './routes/eventos/eventos.component';
import { RegisterComponent } from './routes/register/register.component';

const routes: Routes = [
  { path: 'laddig', component: LaddignPageComponent },
  { path: 'calificar', component: CalificarComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'laddig', component: LaddignPageComponent },
  { path: 'createEvent', component: CrearEventosComponent },
  { path: 'events', component: EventosComponent },
  {path: 'register', component: RegisterComponent }
=======
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';

const routes: Routes = [
  {path: "laddig", component: LaddignPageComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent}
>>>>>>> homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
