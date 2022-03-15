import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './authGuard';
import { authInterceptor } from './authInterceptor';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,StoreModule,
    
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
