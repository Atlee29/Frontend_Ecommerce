import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/model/user-details';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private router :Router
    ,private employeeService:EmployeeService
    ){}

  loginForm : FormGroup;
  userlist:UserDetails[];

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      userName : [],
      password : []
    })
   this.getUserList();
  }

  getUserList(){
    this.employeeService.getAllUserDetails().subscribe((users:UserDetails[])=>{
    this.userlist=users;
    })
  }

  onLogin(){
    this.userlist.forEach(user=>{
      if(this.loginForm.controls['userName'].value==user.userName 
      && this.loginForm.controls['password'].value==user.password){
             
              sessionStorage.setItem('userType',user.userType)
              this.router.navigateByUrl('');
      }
   
      
    });
  }

  registerData(){
    this.router.navigateByUrl('dash/register');
  }
}