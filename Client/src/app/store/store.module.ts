import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';


import { LogoutComponent } from './User/logout/logout.component';
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';
import { HomeComponent } from './User/home/home.component';
import { HeaderComponent } from './Shared/header/header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BookviewComponent } from './Book/bookview/bookview.component';
import { BookdetailComponent } from './Book/bookdetail/bookdetail.component';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    HeaderComponent,
    BookviewComponent,
    BookdetailComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    HeaderComponent,
    LoginComponent,
            LogoutComponent,
            SignupComponent,
            HomeComponent
  ]
})
export class StoreModule { }
