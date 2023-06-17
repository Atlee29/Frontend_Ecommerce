import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { ViewDealerComponent } from './view-dealer/view-dealer.component';

const routes: Routes = [
  {path:'addemployee', component:AddEmployeesComponent},
  {path:'viewemployee', component:ViewEmployeesComponent},
  {path:'adddealer', component:AddDealerComponent},
  {path:'viewdealer', component:ViewDealerComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
