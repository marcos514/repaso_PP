import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail:string;
  pass:string;
  usr:string;

  constructor(private http:DataService) { }

  ngOnInit() {

  }

  LogIn()
  {
    this.http.LogIn(this.usr ,this.mail,this.pass).subscribe(data=>{localStorage.setItem("Token", data.toString())},err=>{console.log(err)})
  }

}
