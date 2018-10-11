import { Component, OnInit, OnChanges } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit, OnChanges {
  ngOnChanges(): void {
    console.log(this.helper.decodeToken(localStorage.getItem("Token")));
      let token=this.helper.decodeToken(localStorage.getItem("Token"));
      this.mail=token["mail"];
      this.tipo=token["tipo"];
  }
  helper=new JwtHelperService();

  constructor() { }
  mail="";
  tipo="";
  valido=false;
  ngOnInit() {
      console.log(this.helper.decodeToken(localStorage.getItem("Token")));
      let token=this.helper.decodeToken(localStorage.getItem("Token"));
      this.mail=token["mail"];
      this.tipo=token["tipo"];
  }

}
