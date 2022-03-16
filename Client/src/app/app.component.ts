import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-view-single-book></app-view-single-book>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
}
