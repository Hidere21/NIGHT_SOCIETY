import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { CalificarComponent } from './routes/calificar/calificar.component';
import { PoliticasComponent } from './routes/politicas/politicas.component';
import { CrearEventosComponent } from './routes/crear-eventos/crear-eventos.component';
import { EventosComponent } from './routes/eventos/eventos.component';
import { PerfilComponent } from './routes/perfil/perfil.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';

const routes: Routes = [
  { path: 'laddig', component: LaddignPageComponent },
  { path: 'calificar', component: CalificarComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'laddig', component: LaddignPageComponent },
  { path: 'createEvent', component: CrearEventosComponent },
  { path: 'events', component: EventosComponent },
  {path:'perfil', component: PerfilComponent},
  {path:'Login', component: LoginComponent},
  {path:'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
