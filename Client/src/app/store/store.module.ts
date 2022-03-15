import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';


import { LogoutComponent } from './User/logout/logout.component';
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';
import { HomeComponent } from './User/home/home.component';
import { HeaderComponent } from './Shared/header/header.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    HeaderComponent,
    AdminHomeComponent
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
