import { Component } from '@angular/core';
import { Dealer } from 'src/app/model/dealer';
import { DealerService } from 'src/app/service/dealer.service';

@Component({
  selector: 'app-view-dealer',
  templateUrl: './view-dealer.component.html',
  styleUrls: ['./view-dealer.component.css']
})
export class ViewDealerComponent {
  dealerList: Dealer[]
  currentStep:number=1;
  constructor(private dealerService : DealerService){}

  ngOnInit(){
    this.dealerService.getDealers().subscribe((dealer:Dealer[])=>{
      this.dealerList=dealer
      console.log(this.dealerList);
      
    })
      
   
    
    
  }
  next(){
      this.currentStep++;
  }
 
  privious(){
    this.currentStep--;
  }
  
}



