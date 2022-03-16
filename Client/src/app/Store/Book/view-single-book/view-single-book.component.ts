import { Component, OnInit } from '@angular/core';
import { GetoneServiceService } from '../bookService/getone-service.service';


@Component({
  selector: 'app-view-single-book',
  template: `<p>{{value.ISBN}}</p>`,
  styleUrls: ['./view-single-book.component.css']
})
export class ViewSingleBookComponent implements OnInit {
 value:any;
  constructor(private getonebook:GetoneServiceService) { }

  ngOnInit(): void {
    this.getonebook.getOneService("6230375a98e6de854afd27ff",(data) => {
      //  console.log(data.data);
        this.value=data;
         console.log(this.value);
      });
  }


}
