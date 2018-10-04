import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";

import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
const rutas : Routes =[
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent}
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
