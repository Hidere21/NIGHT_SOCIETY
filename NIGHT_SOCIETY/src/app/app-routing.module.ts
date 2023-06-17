import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { CrearEventosComponent } from './routes/crear-eventos/crear-eventos.component';
import { EventosComponent } from './routes/eventos/eventos.component';


const routes: Routes = [
  {path: "laddig", component: LaddignPageComponent},
  {path: "createEvent", component: CrearEventosComponent},
  {path: "events", component: EventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
