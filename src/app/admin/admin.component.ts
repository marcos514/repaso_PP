import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http:DataService,private router:Router) { }

  ngOnInit() {
    this.http.SignUp("b","bbb","bbb","admin").subscribe(data=>{console.log(data)},err=>{console.log(err)});
    this.http.LogIn("bbb","bbb").subscribe(data=>{localStorage.setItem("Token", data["token"]);console.log(data)},err=>{console.log(err)})      
    this.router.navigate(["/cargar"]);
    
  }

}
