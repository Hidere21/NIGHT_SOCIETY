import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { RegisterComponent } from './routes/register/register.component';
import { PoliticasComponent } from './routes/politicas/politicas.component';

const routes: Routes = [
  {path: "laddig", component: LaddignPageComponent},
  {path: "register", component: RegisterComponent},
  {path: "politicas", component: PoliticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
