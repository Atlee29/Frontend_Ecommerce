import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent {
  employeeForm:FormGroup;
  currentStep: number = 1;
  constructor(private formBuilder:FormBuilder
    ,private employeeService:EmployeeService){}

  ngOnInit(){
    this.employeeForm=this.formBuilder.group({
      employeeName:['',Validators.required],
      employeeMobileNumber:[,Validators.required],
      employeeEmail:['',Validators.required],
      employeeAddress:this.formBuilder.group({
        houseNumber:[,Validators.required],
        street:['',Validators.required],
        area:['',Validators.required],
        city:['',Validators.required],
        landmark:['',Validators.required],
        pincode:[,Validators.required],
        state:['',Validators.required]
      }),
      employeeUserDetails:this.formBuilder.group({
        userName:['',Validators.required],
        password:['',Validators.required],
        userType:['',Validators.required] 
      })
    })
  }
  get employee(){
    return this.employeeForm.controls
  }
  next() {
    this.currentStep++;
  }
  previous() {
    this.currentStep--;
  }
  

  addEmployee(){
    if(this.employeeForm.valid){
    console.log(this.employeeForm.value);
    this.employeeService.createEmployee(this.employeeForm.value).subscribe();
    }
  }
}
