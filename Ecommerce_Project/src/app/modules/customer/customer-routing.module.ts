import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductsForCustomerComponent } from './viewproducts-for-customer/viewproducts-for-customer.component';

const routes: Routes = [
  {path:'viewProductsCustomer',component:ViewproductsForCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
