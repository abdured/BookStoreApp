import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';


import { LogoutComponent } from './User/logout/logout.component';
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';
import { HomeComponent } from './User/home/home.component';
import { HeaderComponent } from './Shared/header/header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BookdetailComponent } from './Book/bookdetail/bookdetail.component';
import { AddBookComponent } from './Book/add-book.component';
import { UpdateBookComponent } from './Book/update-book.component';
import { ViewAllbookComponent } from './Book/view-allbook/view-allbook.component';
import { ViewSingleBookComponent } from './Book/view-single-book/view-single-book.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    HeaderComponent,
    BookdetailComponent,
    AddBookComponent,
    UpdateBookComponent,
    ViewAllbookComponent,
    ViewSingleBookComponent

  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    HomeComponent,
    BookdetailComponent,
    AddBookComponent,
    UpdateBookComponent,
    ViewAllbookComponent,
    ViewSingleBookComponent
  ]
})
export class StoreModule { }
