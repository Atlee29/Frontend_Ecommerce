import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent {
  constructor(private router:Router){
 }
  // clickOnButton(){
  //   this.router.navigateByUrl('custdash/customer/viewProductsCustomer');
  // }
}
