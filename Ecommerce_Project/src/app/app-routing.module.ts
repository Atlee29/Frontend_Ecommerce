import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './entryComponents/aboutus/aboutus.component';
import { ContactsComponent } from './entryComponents/contacts/contacts.component';
import { LoginComponent } from './entryComponents/login/login.component';
import { ReviewsComponent } from './entryComponents/reviews/reviews.component';
import { DashboardComponent } from './templateComponents/dashboard/dashboard.component';
import { RegisterComponent } from './entryComponents/register/register.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
