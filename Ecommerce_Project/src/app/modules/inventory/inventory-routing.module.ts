import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'addproducts',component:AddProductsComponent},
  {path:'viewproducts',component:ViewProductsComponent},
  {path:'updateproducts',component:UpdateProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
