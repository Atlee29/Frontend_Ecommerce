import { Component } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent {
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    this.employeeService.getAllEmployees().subscribe((employee:Employee[])=>{
      this.employeeList= employee
      console.log(employee);
      
    })
    
  }
  
}
