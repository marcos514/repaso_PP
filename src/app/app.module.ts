import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { DataService } from "./data.service";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GrillaComponent } from './grilla/grilla.component';
import { MostrarUsuarioComponent } from './mostrar-usuario/mostrar-usuario.component';
import { VerTurnosComponent } from './ver-turnos/ver-turnos.component';
import { CargarAutoComponent } from './cargar-auto/cargar-auto.component';
import { SacarTurnoComponent } from './sacar-turno/sacar-turno.component';
import { AdminComponent } from './admin/admin.component';
import { ClienteComponent } from './cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    GrillaComponent,
    MostrarUsuarioComponent,
    VerTurnosComponent,
    CargarAutoComponent,
    SacarTurnoComponent,
    AdminComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
