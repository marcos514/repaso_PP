import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.css']
})
export class SacarTurnoComponent implements OnInit {
  dia="";
  hora="";
  constructor(private http:DataService) { }

  ngOnInit() {
  }
  sacarTurno()
  {
    this.http.sacarTurno(this.dia,this.hora).subscribe(data=>{alert("Turno confirmado? "+ data["rta"]); console.log(data)},err=>{console.log(err)})

  }
}
