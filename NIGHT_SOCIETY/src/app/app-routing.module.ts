import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddignPageComponent } from './routes/laddign-page/laddign-page.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';

const routes: Routes = [
  {path: "laddig", component: LaddignPageComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
