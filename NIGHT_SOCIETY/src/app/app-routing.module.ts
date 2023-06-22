import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { CalificarComponent } from './routes/calificar/calificar.component';
import { PoliticasComponent } from './routes/politicas/politicas.component';

const routes: Routes = [
  { path: 'laddig', component: LaddignPageComponent },
  { path: 'calificar', component: CalificarComponent },
  { path: 'politicas', component: PoliticasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
