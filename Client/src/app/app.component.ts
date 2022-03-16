import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
  <app-view-single-book></app-view-single-book>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userService:AuthService)
  {
  
  }
  title = 'Client';
}
