import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  createEmployee(employee:Employee){
    return this.httpClient.post('http://localhost:8989/admin/createEmployee',employee);
  }
  getUserDetails(userName:string,password:string){
    return this.httpClient.get('http://localhost:8989/login/getUserNameAndPassword/'+userName+'/'+password)
    
  }

  getAllEmployees(){
    return this.httpClient.get('http://localhost:8989/admin/getAllEmployee');
  }

  getAllUserDetails(){
    return this.httpClient.get('');
  }
}
