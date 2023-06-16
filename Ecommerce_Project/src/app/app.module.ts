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

import { Router } from '@angular/router'
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
    RegisterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
