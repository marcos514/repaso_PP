import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {DataService} from "../data.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  mail:string;
  pass:string;
  tipo:string;
  usr:string;
  constructor(private http:DataService,private router:Router) { }

  ngOnInit() {
  }

  Signup()
  {
    this.http.SignUp(this.usr ,this.mail,this.pass,this.tipo).subscribe(data=>{this.router.navigate(["/login"]);},err=>{console.log(err)})
    
  }

}
