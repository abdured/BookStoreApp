import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './User/home/home.component';
import { LoginComponent } from './User/login/login.component';
import { LogoutComponent } from './User/logout/logout.component';
import { SignupComponent } from './User/signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'logout',component:LogoutComponent},
  {path:'home',component:HomeComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
