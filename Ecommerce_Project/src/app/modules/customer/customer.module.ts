import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ViewproductsForCustomerComponent } from './viewproducts-for-customer/viewproducts-for-customer.component';
import { ViewSingleProductComponent } from './view-single-product/view-single-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewproductsForCustomerComponent,
    ViewSingleProductComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
