import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DealerService } from 'src/app/service/dealer.service';

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.css']
})
export class AddDealerComponent {
dealerForm: FormGroup
constructor(private formBuilder: FormBuilder,private dealerService:DealerService){}
ngOnInit(){
  this.dealerForm=this.formBuilder.group({
    dealerName:[''],
    dealerMobileNumber:[],
    dealerEmail:[],
    dealerAddress:this.formBuilder.group({
      houseNumber:[],
      street:[''],
      area:[''],
      city:[''],
      landmark:[''],
      pincode:[],
      state:['']
    }),
    dealerBankDetails:this.formBuilder.group({
      bankAccountNumber:[],
      bankName:[''],
      branchName:[''],
      ifscNumber:[],
      cardNumber:[]
  
    })
    

  })
}
addDealer(){
  console.log(this.dealerForm.value);
  this.dealerService.saveDealer(this.dealerForm.value).subscribe();
  
}
}
