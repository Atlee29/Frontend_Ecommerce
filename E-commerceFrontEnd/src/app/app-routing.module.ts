import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NewregisterComponent } from './components/newregister/newregister.component';

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
        path : 'newreg', component : NewregisterComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
