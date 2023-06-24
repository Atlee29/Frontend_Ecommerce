import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-viewproducts-for-customer',
  templateUrl: './viewproducts-for-customer.component.html',
  styleUrls: ['./viewproducts-for-customer.component.css']
})
export class ViewproductsForCustomerComponent {

  productList:Products[];
  productName:string;
  

  constructor(private productService:ProductsService
    ,private router:Router){}

  ngOnInit(){
    this.productService.getAllProducts().subscribe(
      (product:Products[])=>{
               this.productList=product
      }
    )
  }
  getSingleproduct(product:Products){
    this.router.navigateByUrl('custdash/customer/viewSingleProduct/'+product.productId);
  }

  searchByName(){
    this.productService.getProductByName(this.productName).subscribe(
      (product:Products[])=>{
        this.productList=product;
        console.log(product);
        
      }
    );
  }
      
}
