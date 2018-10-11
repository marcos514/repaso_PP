import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";

import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {VerTurnosComponent} from "./ver-turnos/ver-turnos.component";
import {CargarAutoComponent} from "./cargar-auto/cargar-auto.component";
import { SacarTurnoComponent } from "./sacar-turno/sacar-turno.component";
import {ClienteComponent} from "./cliente/cliente.component";
import {AdminComponent} from "./admin/admin.component";
import { from } from 'rxjs';
const rutas : Routes =[
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"verTurnos",component:VerTurnosComponent},
  {path:"cargar",component:CargarAutoComponent},
  {path:"sacarTurno",component:SacarTurnoComponent},
  {path:"admin",component:AdminComponent},
  {path:"cliente",component:ClienteComponent},
  {path:"",component:VerTurnosComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas),
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
