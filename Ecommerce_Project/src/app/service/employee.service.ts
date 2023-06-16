import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }


  getUserDetails(userName:string,password:string){
    return this.httpClient.get('http://localhost:8989/login/getUserNameAndPassword/'+userName+'/'+password)
    
  }

  getAllEmployees(){
    return this.httpClient.get('');
  }

  getAllUserDetails(){
    return this.httpClient.get('');
  }
}
