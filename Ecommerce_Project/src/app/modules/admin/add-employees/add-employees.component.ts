import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent {
  employeeForm:FormGroup;
  constructor(private formBuilder:FormBuilder
    ,private employeeService:EmployeeService){}

  ngOnInit(){
    this.employeeForm=this.formBuilder.group({
      employeeName:[''],
      employeeMobileNumber:[],
      employeeEmail:[''],
      employeeAddress:this.formBuilder.group({
        houseNumber:[],
        street:[''],
        area:[''],
        city:[''],
        landmark:[''],
        pincode:[],
        state:['']
      }),
      employeeUserDetails:this.formBuilder.group({
        userName:[''],
        password:[''],
        userType:[''] 
      })
    })
  }

  addEmployee(){

    console.log(this.employeeForm.value);
    this.employeeService.createEmployee(this.employeeForm.value).subscribe();
    
  }
}
