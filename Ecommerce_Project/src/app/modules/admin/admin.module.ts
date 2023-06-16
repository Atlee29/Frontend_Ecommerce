import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { ViewDealerComponent } from './view-dealer/view-dealer.component';


@NgModule({
  declarations: [
    AddEmployeesComponent,
    ViewEmployeesComponent,
    AddDealerComponent,
    ViewDealerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
