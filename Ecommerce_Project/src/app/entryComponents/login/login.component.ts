import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  userDetails:UserDetails;
  showErrorMessage:boolean=false;

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      userName : ['', Validators.required],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
   
  }
  get login() { return this.loginForm.controls; }
  

  getUserDetails(){
    if((this.loginForm.invalid)){
      this.showErrorMessage = true;
      return;
   // this.router.navigateByUrl('/empdash/admin');
    this.employeeService.getUserDetails(this.loginForm.controls['userName'].value
    ,this.loginForm.controls['password'].value)
    .subscribe((users:UserDetails)=>{
      console.log(users); 
      if(this.loginForm.controls['userName'].value==users.userName
      && this.loginForm.controls['password'].value==users.password
      && users.userType=='admin'||users.userType=='inventory' ){
           
        sessionStorage.setItem('userType',users.userType);
        alert('done'+users.userType)
        this.router.navigateByUrl('/empdash/'+users.userType);
        } 
        else if(this.loginForm.controls['userName'].value==users.userName
        && this.loginForm.controls['password'].value==users.password
        && users.userType=='customer')
        {
          console.log();
          
          sessionStorage.setItem('userType',users.userType)
          this.router.navigateByUrl('/custdash/customer');
        }
    })
  

  }
  }
get userName(){
  return this.loginForm.get('userName')
}

get password(){
  return this.loginForm.get('password')
}



  registerData(){
    this.router.navigateByUrl('dash/register');
  }

  // onLogin(){
  //   console.log(this.loginForm.value);
  //     if(true){
  //             sessionStorage.setItem('userType',this.userDetails.userType);
  //             alert('done'+this.userDetails.userType)
  //             this.router.navigateByUrl('register');
  //     }
  //     else if(this.loginForm.controls['userName'].value==this.userDetails.userName
  //     && this.loginForm.controls['password'].value==this.userDetails.password
  //     && this.userDetails.userType=='customer')
  //     {
  //       console.log();
  //       sessionStorage.setItem('userType',this.userDetails.userType)
  //       this.router.navigateByUrl('');
  //     }
  //   }
  

  
}