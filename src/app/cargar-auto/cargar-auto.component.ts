import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-cargar-auto',
  templateUrl: './cargar-auto.component.html',
  styleUrls: ['./cargar-auto.component.css']
})
export class CargarAutoComponent implements OnInit {
  patente="";
  marca="";
  color="";
  kilometros="";
  tipo="auto";
  constructor(private http:DataService) { }

  ngOnInit() {
  }
  Cargar()
  {
    this.http.CargarAuto(this.patente,this.marca,this.color,this.kilometros,this.tipo).subscribe(data=>{alert("Auto cargado? "+data); console.log(data)},err=>{console.log(err)})

  }
}
