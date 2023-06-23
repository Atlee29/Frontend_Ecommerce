import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductFeatures } from 'src/app/model/product-features';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.css']
})
export class ViewSingleProductComponent {
  idOfProduct:any;
  singleProduct:Products;
  features:ProductFeatures[];
  constructor(private activatedRoute:ActivatedRoute
    ,private productService:ProductsService){}


  ngOnInit(){
    this.idOfProduct=this.activatedRoute.snapshot.paramMap.get('productId');
    console.log(this.idOfProduct);
    this.productService.getProductById(this.idOfProduct).subscribe(
      (product:Products)=>{
        this.singleProduct=product
        this.features=product.productDetails.productfeatures;
        console.log(this.features); 
      }
    )
  }



}
