import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '@page/main/main.component' ;
import { LoginPageComponent } from '@page/login-page/login-page.component' ;

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo : '/main' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
