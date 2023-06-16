import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './template/header/header.component';
import { SidemenuComponent } from './template/sidemenu/sidemenu.component';
import { NewregisterComponent } from './components/newregister/newregister.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutusComponent,
    ContactsComponent,
    ReviewsComponent,
    DashboardComponent,
    HeaderComponent,
    SidemenuComponent,
    NewregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
