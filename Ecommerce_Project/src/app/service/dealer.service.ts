import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dealer } from '../model/dealer';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private httpClient:HttpClient) {}
  saveDealer(dealer:Dealer){
    return this.httpClient.post('http://localhost:8989/admin/adddealer',dealer)
  }
}
