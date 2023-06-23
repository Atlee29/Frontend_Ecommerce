import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductsForCustomerComponent } from './viewproducts-for-customer/viewproducts-for-customer.component';
import { ViewSingleProductComponent } from './view-single-product/view-single-product.component';

const routes: Routes = [
  {path:'viewProductsCustomer',component:ViewproductsForCustomerComponent},
  {path:'viewSingleProduct/:productId',component:ViewSingleProductComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
