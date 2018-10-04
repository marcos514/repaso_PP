import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent implements OnInit {
  tipos=["admin","cliente"];
  tipo="";
  constructor() { }

  ngOnInit() {
  }

}
