import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private userService:AuthService) { 

       
    this.loginForm =formBuilder.group({
      'username':['', Validators.required],
      'password': ['', Validators.required]
      });
  }

  ngOnInit(): void {
  }

  login()
  {
    const {username,password} =this.loginForm.value
   this.userService.login(username,password);
  
  }

}
