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
    return this.http.post("http://192.168.2.26:3000/cliente",
    {
      cliente:
      {
        name:usr,
        pass:pass,
        mail:mail,
        tipo:tipo
      }});
  }
}
