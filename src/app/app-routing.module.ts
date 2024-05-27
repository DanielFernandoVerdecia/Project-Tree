import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './componentes/landing/landing.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { Ruta404Component } from './componentes/ruta404/ruta404.component';

const routes: Routes = [

  {path: '' , redirectTo: '/landing' , pathMatch: 'full'},
  {path: 'landing' ,component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'crear-cuenta', component: CrearCuentaComponent},
  {path: '**', component: Ruta404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
