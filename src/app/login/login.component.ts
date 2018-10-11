import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import { Router } from '@angular/router';

import {JwtHelperService} from "@auth0/angular-jwt";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
helper=new JwtHelperService();

  mail:string;
  pass:string;
  usr:string;

  constructor(private http:DataService,private router:Router) { }

  ngOnInit() {

  }

  LogIn()
  {
    this.http.LogIn(this.mail,this.pass).subscribe(data=>{localStorage.setItem("Token", data["token"]);console.log(data)},err=>{console.log(err)})

  }

}
