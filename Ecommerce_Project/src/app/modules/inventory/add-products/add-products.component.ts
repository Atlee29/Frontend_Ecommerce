import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Dealer } from 'src/app/model/dealer';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit{
  addProductForm: FormGroup;
  dealerList:Dealer[];
  productPhoto:any;
  constructor(private formbulider: FormBuilder
    ,private productService:ProductsService){}

  ngOnInit(){
    this.addProductForm=this.formbulider.group({
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
  }

  createProductFeature(){

  let newProductFeature:FormGroup=    this.formbulider.group({
      productFeatureName:[''],
      productFeatureValue:['']
    })
   const featuresArray:FormArray= this.addProductForm.controls['productDetails'].get('productfeatures') as FormArray
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
    return this.addProductForm.get('availableDealers') as  FormArray;
  }

get productfeatures():FormArray{
  return this.addProductForm.controls['productDetails'].get('productfeatures')  as FormArray;
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
  console.log(this.addProductForm.value);
  var productData=JSON.stringify(this.addProductForm.value);
  var formData=new FormData();
  formData.append("productPhoto",this.productPhoto);
  formData.append("product",productData);

  
  this.productService.saveproduct(formData).subscribe();
  
}

}
