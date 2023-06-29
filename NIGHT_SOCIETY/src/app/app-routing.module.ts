import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { CalificarComponent } from './routes/calificar/calificar.component';
import { PoliticasComponent } from './routes/politicas/politicas.component';
import { CrearEventosComponent } from './routes/crear-eventos/crear-eventos.component';
import { EventosComponent } from './routes/eventos/eventos.component';
import { LoginComponent } from './routes/login/login.component';
<<<<<<< HEAD
import { HomeComponent } from './routes/home/home.component';
=======
import { PerfilComponent } from './routes/perfil/perfil.component';

>>>>>>> 7f7f62e4d10cbecfde7ff7fb0e4aa2fbae81cd9b

const routes: Routes = [
  { path: 'ladding', component: LaddignPageComponent },
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
  {path: 'Login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent}
>>>>>>> 7f7f62e4d10cbecfde7ff7fb0e4aa2fbae81cd9b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  
  
})
export class AppRoutingModule {}
