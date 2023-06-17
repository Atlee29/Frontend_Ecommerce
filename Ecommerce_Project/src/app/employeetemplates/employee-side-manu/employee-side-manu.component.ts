import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDashboardSideManuRoles } from 'src/app/model/employee-dashboard-side-manu-roles';

@Component({
  selector: 'app-employee-side-manu',
  templateUrl: './employee-side-manu.component.html',
  styleUrls: ['./employee-side-manu.component.css']
})
export class EmployeeSideManuComponent {
 userType:string;
 employeeDashboardroles:EmployeeDashboardSideManuRoles[];

 constructor(private router:Router){}

 ngOnInit(){
  this.userType=sessionStorage.getItem('userType');
  this.employeeDashboardroles=EmployeeDashboardSideManuRoles.sidemanuOptionsForEmployees;
  console.log(this.employeeDashboardroles);
 }

 onClick(path:any){
  this.router.navigateByUrl('empdash/'+this.userType+'/'+path);
 }


}
