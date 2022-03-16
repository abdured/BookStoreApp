import { Component, OnInit } from '@angular/core';
import { GetAllServiceService } from '../bookService/get-all-service.service';

@Component({
  selector: 'app-view-allbook',
  template: `
  <table>
  <thead>
    <th>Book_id</th>
    <th>Total-page</th>
    <th>Title</th>
    <th>ISBN</th>
    <th>Author</th>
  </thead>
  <tbody  *ngFor="let group of value">
      <td > {{group.book_id}} </td>
      <td > {{group.Title}} </td>
      <td > {{group.Total_page}} </td>
      <td> {{group.ISBN}} </td>
      <td> {{group.Authors}} </td>
      
      
      
  </tbody>
</table>
  <!-- <ul>
<li *ngFor="let data of value">{{data.book_id}}</li>


  </ul> -->
  
  `,
  styleUrls: ['./view-allbook.component.css']
})
export class ViewAllbookComponent implements OnInit {
  value:any=[];
  constructor(private getallservice:GetAllServiceService) { }

  ngOnInit(): void {
 this.getallservice.getAllService((data) => {
  //  console.log(data.data);
    this.value=data.data;
     console.log(this.value);
  });
   

  }

}
