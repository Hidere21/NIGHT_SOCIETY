import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { CalificarComponent } from './routes/calificar/calificar.component';
import { PoliticasComponent } from './routes/politicas/politicas.component';
import { CrearEventosComponent } from './routes/crear-eventos/crear-eventos.component';
import { EventosComponent } from './routes/eventos/eventos.component';
<<<<<<< HEAD
import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/home.component';
=======
import { RegisterComponent } from './routes/register/register.component';
import { LoginComponent } from './routes/login/login.component';
>>>>>>> ecaf9da6f89163a702e8ddc2ea48c8ad219c5f8f

const routes: Routes = [
  { path: 'laddig', component: LaddignPageComponent },
  { path: 'calificar', component: CalificarComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'laddig', component: LaddignPageComponent },
  { path: 'createEvent', component: CrearEventosComponent },
  { path: 'events', component: EventosComponent },
<<<<<<< HEAD
  {path: 'login', component: LoginComponent},
  {path: 'home', component:HomeComponent}
=======
  {path:'register', component: RegisterComponent},
  {path: 'Login', component: LoginComponent}
>>>>>>> ecaf9da6f89163a702e8ddc2ea48c8ad219c5f8f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
