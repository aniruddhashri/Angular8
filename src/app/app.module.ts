import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import {MatFormFieldModule} from '@angular/material' 
import { CartComponent } from './Components/cart/cart.component'
import {ApiurlService} from '../apiurl.service'
import { AppConfig }       from './app.config';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule,MatSort} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';



//import {apiurl1} from '../apiurl'
import { RouterModule } from '@angular/router';
import { FiltercomponentComponent } from './filtercomponent/filtercomponent.component';
import {SearchPipe} from "./search.pipe";
import { MatDataFilterComponent } from './Components/mat-data-filter/mat-data-filter.component'

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
    CartComponent,
    FiltercomponentComponent,
    SearchPipe,
    MatDataFilterComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
      ],
  providers: [ApiurlService,
    AppConfig,
  { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }
],
  entryComponents: [LandingComponent,DialogalertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
