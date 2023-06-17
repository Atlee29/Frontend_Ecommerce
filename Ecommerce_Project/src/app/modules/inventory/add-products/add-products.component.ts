import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  addProductForm: FormGroup
  constructor(private formbulider: FormBuilder){}

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
  }
  createProductFeature():FormGroup{
    return this.formbulider.group({
      productFeatureName:[''],
      productFeatureValue:['']
    })
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
  return this.addProductForm.get('productfeatures') as FormArray;
}
addProductFeature(){
  return this.productfeatures.push(this.createProductFeature())
}
addDealers(){
  return this.availableDealers.push(this.addDealers())
}
addproduct(){
  
}

}
