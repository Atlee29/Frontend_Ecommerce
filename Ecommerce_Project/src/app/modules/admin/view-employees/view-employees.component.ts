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
  localEmployee:Employee;
  currentStep:number=1;
  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    this.employeeService.getAllEmployees().subscribe((employee:Employee[])=>{
      this.employeeList= employee
     
      
      
    })
    
    
  }
  next(eId:number){
      this.currentStep++;
      console.log(eId);
      
      for(let emp of this.employeeList){
        if(emp.employeeId==eId){
          this.localEmployee=emp
          console.log(this.localEmployee);
          
          
        }
      }
      
  }
 
  privious(){
    this.currentStep--;
  }
  
}
