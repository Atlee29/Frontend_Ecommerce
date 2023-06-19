import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Dealer } from 'src/app/model/dealer';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  updateForm: FormGroup;
  dealerList:Dealer[];
  productPhoto:any;
  idOfProduct:any;
  constructor(private formbulider: FormBuilder
    ,private productService:ProductsService
    ,private activatedRoute:ActivatedRoute
    ,private location:Location){}

  ngOnInit(){
    this.updateForm=this.formbulider.group({
      productCategory:[''],
      productPrice:[],
      productAvailableCount:[],
      productRating:[],
      productStatus:[''],
      productDetails:this.formbulider.group({
        productName:[''],
        manufacturerName:[''],
        modelNumber:[],
        productfeatures:this.formbulider.array([])
      }),
      availableDealers:this.formbulider.array([])
       
    })
    this.createProductFeature();
    this.createDealer();
    this.getDealers();
    this.assignData();
  }

  assignData(){
    // let product:any=this.location.getState();

    this.idOfProduct=this.activatedRoute.snapshot.paramMap.get('productId');
    console.log(this.idOfProduct);
    


    // console.log(product.productCategory);
    
    // this.updateForm.get('productCategory').setValue(product.productCategory);
    // this.updateForm.get('productPrice').setValue(product.productPrice);
    // this.updateForm.get('productAvailableCount').setValue(product.productAvailableCount);
    // this.updateForm.get('productRating').setValue(product.productRating);
    // this.updateForm.get('productStatus').setValue(product.productStatus);
    // this.updateForm.get('productDetails.productName').setValue(product.productDetails.productName);
    // this.updateForm.get('productDetails.manufacturerName').setValue(product.productDetails.manufacturerName);
    // this.updateForm.get('productDetails.productfeatures.productFeatureName').setValue(product.productDetails.productfeatures.productFeatureName);
    // this.updateForm.get('productDetails.productfeatures.productFeatureValue').setValue(product.productDetails.productfeatures.productFeatureValue);


  }

  createProductFeature(){
  let newProductFeature:FormGroup=    this.formbulider.group({
      productFeatureName:[''],
      productFeatureValue:['']
    })
   const featuresArray:FormArray= this.updateForm.controls['productDetails'].get('productfeatures') as FormArray
   featuresArray.push(newProductFeature);
   
  }
  createDealer():FormGroup{
    return this.formbulider.group({
      dealerName:[''],
      dealerMobileNumber:[],
      dealerEmail:[]
    })
  }

  get availableDealers():FormArray{
    return this.updateForm.get('availableDealers') as  FormArray;
  }

get productfeatures():FormArray{
  return this.updateForm.controls['productDetails'].get('productfeatures')  as FormArray;
}

addDealers(){
  return this.availableDealers.push(this.createDealer())
}

getDealers(){
  this.productService.getAllDealers().subscribe(
    (dealers:Dealer[])=>{
      this.dealerList=dealers
      console.log(this.dealerList);
      
    }
  ) 
}

eventBind(event:any){
  console.log(event.target.value);

  this.productService.getDealerByid(event.target.value).subscribe(
    (dealer:Dealer)=>{
      this.availableDealers.push(this.formbulider.group({
        dealerId:dealer.dealerId,
        dealerName:dealer.dealerName,
        dealerMobileNumber:dealer.dealerMobileNumber,
        dealerEmail:dealer.dealerEmail
      })
        )
    }
  )
  
}
uploadPhoto(event:any){
  this.productPhoto=event.target.files[0]
  console.log(this.productPhoto);
  
}
saveData(){
  console.log(this.updateForm.value);
  var productData=JSON.stringify(this.updateForm.value);
  var formData=new FormData();
  formData.append("productPhoto",this.productPhoto);
  formData.append("product",productData);

  
  this.productService.saveproduct(formData).subscribe();
  
}

}
