import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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
}
