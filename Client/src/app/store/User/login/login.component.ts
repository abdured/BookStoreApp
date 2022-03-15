import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private userService:AuthService,private router:Router) { 

       
    this.loginForm =formBuilder.group({
      'username':['', Validators.required],
      'password': ['', Validators.required]
      });
  }

  ngOnInit(): void {
    if(this.userService.isLogenIn()){
      this.router.navigate(['home']);
    }
  }

  login()
  {
    const {username,password} =this.loginForm.value
   this.userService.login(username,password);
  
  }

}
