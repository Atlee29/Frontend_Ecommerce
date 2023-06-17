import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './entryComponents/aboutus/aboutus.component';
import { ContactsComponent } from './entryComponents/contacts/contacts.component';
import { LoginComponent } from './entryComponents/login/login.component';
import { ReviewsComponent } from './entryComponents/reviews/reviews.component';
import { DashboardComponent } from './templateComponents/dashboard/dashboard.component';
import { RegisterComponent } from './entryComponents/register/register.component';
import { EmployeeDashboardComponent } from './employeetemplates/employee-dashboard/employee-dashboard.component';
import { CustomerDashboardComponent } from './customerTemplates/customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  {
    path : '',redirectTo:'dash', pathMatch : 'full'

  },
  {
    path : 'dash', component : DashboardComponent,
    children:[
     
      {
        path : 'login', component : LoginComponent
      },
      {
        path : 'aboutus', component : AboutusComponent
      },
      {
        path : 'review', component : ReviewsComponent
      },
      {
        path : 'contact', component : ContactsComponent
      },
      {
        path : 'register', component : RegisterComponent
      }
    ]
  },
  {
    path:'empdash' , component:EmployeeDashboardComponent,
    children:[
      {path : 'admin',loadChildren:()=>import('src/app/modules/admin/admin.module').then(m=>m.AdminModule)},
      {path : 'inventory',loadChildren:()=>import('src/app/modules/inventory/inventory.module').then(m=>m.InventoryModule)},
      {path : 'customer',loadChildren:()=>import('src/app/modules/customer/customer.module').then(m=>m.CustomerModule)},
    ]
  },
  {
    path:'custdash' , component:CustomerDashboardComponent,
    children:[
      {path : 'customer',loadChildren:()=>import('src/app/modules/customer/customer.module').then(m=>m.CustomerModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
