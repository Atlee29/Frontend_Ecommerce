import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DealerService } from 'src/app/service/dealer.service';

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.css']
})
export class AddDealerComponent {
dealerForm: FormGroup;
currentStep: number = 1;
constructor(private formBuilder: FormBuilder,private dealerService:DealerService){}
ngOnInit(){
  this.dealerForm=this.formBuilder.group({
    dealerName:['',Validators.required],
    dealerMobileNumber:[,Validators.required],
    dealerEmail:['',Validators.required],
    dealerAddress:this.formBuilder.group({
      houseNumber:[,Validators.required],
      street:['',Validators.required],
      area:['',Validators.required],
      city:['',Validators.required],
      landmark:['',Validators.required],
      pincode:[,Validators.required],
      state:['',Validators.required]
    }),
    dealerBankDetails:this.formBuilder.group({
      bankAccountNumber:[,Validators.required],
      bankName:['',Validators.required],
      branchName:['',Validators.required],
      ifscNumber:[,Validators.required],
      cardNumber:[,Validators.required]
  
    })
    

  })
}

get f(){
  return this.dealerForm.controls;
}
// next() {
//   if(this.step==1){
//     this.dealer_step = true;

//      if (this.dealerForm.invalid) { return  }
//     this.step++
//     if(this.step==2){
//       this.dealer_step = true;
//       if (this.dealerForm.invalid) { return }
//           this.step++;
//   }
// }
//}
next() {
  this.currentStep++;
}
previous() {
  this.currentStep--;
}
addDealer(){
  if((this.dealerForm.valid)){
  console.log(this.dealerForm.value);
  this.dealerService.saveDealer(this.dealerForm.value).subscribe();
}
}
}
