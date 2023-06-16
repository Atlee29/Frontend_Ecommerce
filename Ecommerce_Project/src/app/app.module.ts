import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './entryComponents/home/home.component';
import { LoginComponent } from './entryComponents/login/login.component';
import { DashboardComponent } from './templateComponents/dashboard/dashboard.component';
import { HeaderComponent } from './templateComponents/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AboutusComponent } from './entryComponents/aboutus/aboutus.component';
import { ContactsComponent } from './entryComponents/contacts/contacts.component';
import { ReviewsComponent } from './entryComponents/reviews/reviews.component';
import { SidemenuComponent } from './templateComponents/side-menu/sidemenu.component';
import { RegisterComponent } from './entryComponents/register/register.component';
=======
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './entryComponents/contact/contact.component';
import { ReviewComponent } from './entryComponents/review/review.component'
>>>>>>> 04e148949e57ce778c4a55a26d3d1a65675b375f

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
<<<<<<< HEAD
    SidemenuComponent,
    HeaderComponent,
    AboutusComponent,
    ContactsComponent,
    ReviewsComponent,
    RegisterComponent
=======
    SideManuComponent,
    HeaderComponent,
    ContactComponent,
    ReviewComponent
>>>>>>> 04e148949e57ce778c4a55a26d3d1a65675b375f
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
