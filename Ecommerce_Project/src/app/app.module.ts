import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './entryComponents/home/home.component';
import { LoginComponent } from './entryComponents/login/login.component';
import { DashboardComponent } from './templateComponents/dashboard/dashboard.component';
import { HeaderComponent } from './templateComponents/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AboutusComponent } from './entryComponents/aboutus/aboutus.component';
import { ContactsComponent } from './entryComponents/contacts/contacts.component';
import { ReviewsComponent } from './entryComponents/reviews/reviews.component';
import { SidemenuComponent } from './templateComponents/side-menu/sidemenu.component';
import { RegisterComponent } from './entryComponents/register/register.component';
import { Router } from '@angular/router';
import { EmployeeDashboardComponent } from './employeetemplates/employee-dashboard/employee-dashboard.component';
import { EmployeeHeaderComponent } from './employeetemplates/employee-header/employee-header.component';
import { EmployeeSideManuComponent } from './employeetemplates/employee-side-manu/employee-side-manu.component';
import { CustomerDashboardComponent } from './customerTemplates/customer-dashboard/customer-dashboard.component';
import { CustomerHeaderComponent } from './customerTemplates/customer-header/customer-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,

    SidemenuComponent,
    HeaderComponent,
    AboutusComponent,
    ContactsComponent,
    ReviewsComponent,
    RegisterComponent,
    EmployeeDashboardComponent,
    EmployeeHeaderComponent,
    EmployeeSideManuComponent,
    CustomerDashboardComponent,
    CustomerHeaderComponent,
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
