import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private http:DataService, private router:Router) { }

  ngOnInit() {
    this.http.SignUp("b","aaa","aaa","cliente").subscribe(data=>{console.log(data)},err=>{console.log(err)});
    this.http.LogIn("aaa","aaa").subscribe(data=>{localStorage.setItem("Token", data["token"]);console.log(data)},err=>{console.log(err)})
    this.router.navigate(["/cargar"]);
  }

}
