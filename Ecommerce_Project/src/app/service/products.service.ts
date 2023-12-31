import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../model/products';

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
    return this.httpClient.get('http://localhost:8989/inventory/getProductById/'+productId);
  }

  getProductByName(productName:string){
    return this.httpClient.get('http://localhost:8989/inventory/getproductByName/'+productName)
  }

  searchProduct(searchProduct:any){
    return this.httpClient.get('http://localhost:8989/inventory/getByCatagOrName/'+searchProduct)

  }

  updateProduct(product:any,productId:number){
    return this.httpClient.put('http://localhost:8989/inventory/updateProduct/'+productId,product);
  }

  getAllDealers(){
    return this.httpClient.get('http://localhost:8989/admin/getAllDealer');
  }

  getDealerByid(dealerId:number){
    return this.httpClient.get('http://localhost:8989/admin/getDealerById/'+dealerId);
  }
}
