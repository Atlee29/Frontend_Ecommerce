import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AddProductsComponent,
    ViewProductsComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class InventoryModule { }
