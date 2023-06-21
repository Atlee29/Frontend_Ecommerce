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
  constructor(private forbBuilder:FormBuilder
    ,private customerService:CustomerService
    ,private router:Router){}

  ngOnInit(){
    this.registerForm=this.forbBuilder.group({
      customerName:[''],
      customerEmail:[''],
      customerMobileNumber:[],
      customerGender:[''],
      customerUserDetails:this.forbBuilder.group({
        userName:[''],
        password:[''],
        userType:['customer']
      })
    })
  }

  register(){
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

}
