import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ViewproductsForCustomerComponent } from './viewproducts-for-customer/viewproducts-for-customer.component';


@NgModule({
  declarations: [
    ViewproductsForCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
