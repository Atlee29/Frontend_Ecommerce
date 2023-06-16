import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/shared/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb : FormBuilder, private router :Router, private ul : UserloginService){}

  loginForm : FormGroup
  

  ngOnInit(){
    this.loginForm = this.fb.group({
      userName : [],
      password : []
    })
  }

  registerData(){
    this.router.navigateByUrl('dash/newreg');
  }

  onLogin(){
    if(this.loginForm.controls['userName'].value=="re"
  && this.loginForm.controls['password'].value=="re@123")
  {
    sessionStorage.setItem('userType','re');
    this.router.navigateByUrl("/dash");
    alert("Do You Want To Login.....!");
  }
  
  }



}