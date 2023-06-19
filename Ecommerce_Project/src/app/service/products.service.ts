import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) {}

  saveproduct(product:any){
    return this.httpClient.post('http://localhost:8989/inventory/createProduct',product);
  }

  getAllProducts(){
    return this.httpClient.get('http://localhost:8989/inventory/getAllProducts');
  }

  getProductById(productId:number){
    return this.httpClient.get(''+productId);
  }

  getAllDealers(){
    return this.httpClient.get('http://localhost:8989/admin/getAllDealer');
  }

  getDealerByid(dealerId:number){
    return this.httpClient.get('http://localhost:8989/admin/getDealerById/'+dealerId);
  }
}
