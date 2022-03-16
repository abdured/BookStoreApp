<<<<<<< HEAD
import { CommonModule, DatePipe } from '@angular/common';
=======
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { StoreModule } from './Store/store.module';
=======
import { AuthGuard } from './authGuard';
import { authInterceptor } from './authInterceptor';
import { StoreModule } from './store/store.module';
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    StoreModule,
    
    CommonModule
  ],
  providers: [DatePipe],
=======
    AppRoutingModule,StoreModule,
    
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
    AuthGuard],
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96
  bootstrap: [AppComponent]
})
export class AppModule { }
