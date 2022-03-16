import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private userservice: AuthService, private router: Router) {
    this.signupForm = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'email': ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])
      ],
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.userservice.isLogenIn()) {
      this.router.navigate(['home']);
    }
  }


  signup() {
    this.userservice.signup(this.signupForm.value);

  }
}
