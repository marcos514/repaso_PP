import { Component, OnInit } from '@angular/core';
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
  constructor(private http:DataService) { }

  ngOnInit() {
  }

  SignUp()
  {
    this.http.SignUp(this.usr ,this.mail,this.pass,this.tipo).subscribe(data=>{console.log(data)},err=>{console.log(err)})
  }

}
