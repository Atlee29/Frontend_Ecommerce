import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  step:number=1;


  registerForm:FormGroup;
  showErrorMessage:boolean=false;

  constructor(private forbBuilder:FormBuilder
    ,private customerService:CustomerService
    ,private router:Router){}

  ngOnInit(){
    this.registerForm=this.forbBuilder.group({
      customerName:['', Validators.required],
      customerEmail:['', Validators.required],
      customerMobileNumber:['', Validators.required],
      customerGender:['', Validators.required],
      customerUserDetails:this.forbBuilder.group({
        userName:['', Validators.required],
        password:['', Validators.required],
        userType:['customer', Validators.required]
      })
    })
  }

  register(){

    if (this.registerForm.invalid){
      this.showErrorMessage = true;
      return;
    }

    console.log(this.registerForm.value);
    this.customerService.saveCustomer(this.registerForm.value).subscribe();
    this.router.navigateByUrl('/dash')
  }

next_step(){
  this.step++;
}
pre_step(){
  this.step--;
}

get customerName(){
  return this.registerForm.get('customerName');
}

get customerEmail(){
  return this.registerForm.get('customerEmail');
}

get customerMobileNumber(){
  return this.registerForm.get('customerMobileNumber');
}

get customerGender(){
  return this.registerForm.get('customerGender');
}

get userName(){
  return this.registerForm.get('userName');
}

get password(){
  return this.registerForm.get('password');
}

get userType(){
  return this.registerForm.get('userType');
}

}
