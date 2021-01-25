import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DialogalertComponent } from './Components/dialogalert/dialogalert.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { AdminComponent } from './Components/admin/admin.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './Components/about/about.component';
import { HighlightDirective } from './highlight.directive';
import { HeaderComponent } from './Components/header/header.component';
import { LandingComponent } from './Components/landing/landing.component'
import {  PagenotfoundComponent} from './Components/pagenotfound/pagenotfound.component';
import { ApidataComponent } from './Components/apidata/apidata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field' 
import { CartComponent } from './Components/cart/cart.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    AdminComponent,
    RegistrationComponent,
    AboutComponent,
    HighlightDirective,
    HeaderComponent,
    LandingComponent,
    PagenotfoundComponent,
    ApidataComponent,
    DialogalertComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule
      ],
  providers: [],
  entryComponents: [DialogalertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
