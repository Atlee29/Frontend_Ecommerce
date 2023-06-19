import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {
  productList:Products[];
  constructor(private productservice:ProductsService
    ,private router:Router,private l:Location){}

  ngOnInit(){
    this.productservice.getAllProducts().subscribe(
      (products:Products[])=>{
        this.productList=products;
      }
    );
  }
  navigateForUpdate(productId:number){
    
    this.router.navigateByUrl('empdash/inventory/updateproducts/'+productId);
  }

}
