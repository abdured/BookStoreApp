import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styles: [
  ]
})
export class BookdetailComponent implements OnInit {

  constructor(public userService :AuthService) { }

  ngOnInit(): void {
  }

}
