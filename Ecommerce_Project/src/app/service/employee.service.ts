import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }


  getUserDetails(username:string,password:string){
    return this.httpClient.get(''+username+'/'+password)
  }

  getAllEmployees(){
    return this.httpClient.get('');
  }

  getAllUserDetails(){
    return this.httpClient.get('');
  }
}
