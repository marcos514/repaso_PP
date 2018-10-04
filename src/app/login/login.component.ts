import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail:string;
  pass:string;
  tipo:string;
  usr:string;

  constructor() { }

  ngOnInit() {
  }

}
