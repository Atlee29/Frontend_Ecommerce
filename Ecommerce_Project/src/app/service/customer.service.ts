import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  saveCustomer(customer:Customer){
    return this.httpClient.post('http://localhost:8989/customer/createCustomer',customer);
  }
}
