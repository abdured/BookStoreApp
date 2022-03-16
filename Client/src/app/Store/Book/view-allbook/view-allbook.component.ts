import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GetAllServiceService } from '../bookService/get-all-service.service';
import { PostServiceService } from '../bookService/post-service.service';

@Component({
  selector: 'app-view-allbook',
  templateUrl: './view-allbook.component.html',
  styleUrls: ['./view-allbook.component.css']
})
export class ViewAllbookComponent implements OnInit {
  value: any = [];
  constructor(private getallservice: GetAllServiceService, public userService: AuthService, private deleteService: PostServiceService) { }

  ngOnInit(): void {
    this.getallservice.getAllService((data) => {
      //  console.log(data.data);
      this.value = data.data;
      console.log(this.value);
    });


  }

  deleteBook(id: string) {
    this.deleteService.deleteBook(id, (data) => {
      location.reload();

    });
  }

}
