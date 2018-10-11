import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from "@angular/common/http";

const CONFIG={headers:new HttpHeaders({token:localStorage.getItem("Token")})};
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http:HttpClient) { }

  SignUp(usr,mail,pass,tipo)
  {
    return this.http.post("http://192.168.2.73:3003/clientes",
    {
      cliente:
      {
        name:usr,
        pass:pass,
        mail:mail,
        tipo:tipo
      }});
  }

  LogIn(mail,pass)
  {
    return this.http.post("http://192.168.2.73:3003/login",
    {
      cliente:
      {
        pass:pass,
        mail:mail
      }});
  }

  sacarTurno(dia,hora)
  {
    return this.http.post("http://192.168.2.73:3003/turnos",
    {
      turno:
      {
        dia:dia,
        hora:hora,
        token:localStorage.getItem("Token")
      }
    },CONFIG);
  }
  CargarAuto(patente, marca, color,kilometros, tipo)
  {
    return this.http.post("http://192.168.2.73:3003/auto",
    {
      auto:
      {
        patente:patente,
        marca:marca,
        color:color,
        kilometros:kilometros,
        tipo:tipo
      }
    },CONFIG);
  }

  TomarTurnos()
  {
    return this.http.get("http://192.168.2.73:3003/turnos",
    CONFIG);
  }
}
