import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {DataService} from "../data.service";

@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent implements OnInit {
  tipo="";
  lista:any;
  turnos;
  token="";
  helper=new JwtHelperService();

  constructor(private http:DataService) { }

  ngOnInit() 
  {
    
    console.log(this.helper.decodeToken(localStorage.getItem("Token")));
    this.token=this.helper.decodeToken(localStorage.getItem("Token"));
    this.tipo=this.token["tipo"];
    
    this.http.TomarTurnos().subscribe(data=>{
      console.log(data);
      this.lista=data["rta"]
    },err=>{
      console.log(err)
    });

  }

}
