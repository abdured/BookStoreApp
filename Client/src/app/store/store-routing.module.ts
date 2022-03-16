import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authGuard';
import { AddBookComponent } from './Book/add-book.component';


import { BookdetailComponent } from './Book/bookdetail/bookdetail.component';
import { UpdateBookComponent } from './Book/update-book.component';
import { ViewSingleBookComponent } from './Book/view-single-book/view-single-book.component';
import { HomeComponent } from './User/home/home.component';
import { LoginComponent } from './User/login/login.component';
import { LogoutComponent } from './User/logout/logout.component';
import { SignupComponent } from './User/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'books', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'books/bookdetail/:id', component: ViewSingleBookComponent, canActivate: [AuthGuard] },
  { path: 'books/add', component: AddBookComponent, canActivate: [AuthGuard] },
  { path: 'books/:id/edit', component: UpdateBookComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
