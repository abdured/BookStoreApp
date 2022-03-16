import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styles: [
  ]
})
export class BookviewComponent implements OnInit {
  booksData: any = [];

  constructor(public userService: AuthService) {


  }

  ngOnInit(): void {

  }



}
