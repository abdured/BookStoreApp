import { NgModule } from '@angular/core';

import { UpdateBookComponent } from './Book/update-book.component';
import { DeleteBookComponent } from './Book/delete-book.component';
import { AddBookComponent } from './Book/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ViewAllbookComponent } from './Book/view-allbook/view-allbook.component';
import { ViewSingleBookComponent } from './Book/view-single-book/view-single-book.component';



@NgModule({
  declarations: [
    UpdateBookComponent,
    DeleteBookComponent,
    AddBookComponent,
    ViewAllbookComponent,
    ViewSingleBookComponent
  ],
  imports: [
    ReactiveFormsModule,RouterModule,HttpClientModule,CommonModule
  ],
  exports:[UpdateBookComponent,DeleteBookComponent,AddBookComponent,ViewAllbookComponent,ViewSingleBookComponent]
})
export class StoreModule { }
