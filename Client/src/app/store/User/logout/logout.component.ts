import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor(private authService :AuthService, private router :Router) { 

    this.authService.logout()
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
  }

}
