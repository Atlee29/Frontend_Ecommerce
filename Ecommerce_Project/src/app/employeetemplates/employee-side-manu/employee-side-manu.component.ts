import { Component } from '@angular/core';
import { EmployeeDashboardSideManuRoles } from 'src/app/model/employee-dashboard-side-manu-roles';

@Component({
  selector: 'app-employee-side-manu',
  templateUrl: './employee-side-manu.component.html',
  styleUrls: ['./employee-side-manu.component.css']
})
export class EmployeeSideManuComponent {
 userType:string;
 employeeDashboardroles:EmployeeDashboardSideManuRoles[];

 ngOnInit(){
  this.userType=sessionStorage
 }



}
