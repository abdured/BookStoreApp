import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetoneServiceService } from './bookService/getone-service.service';
import { PostServiceService } from './bookService/post-service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  myform: FormGroup;
  bid!: string;
  data!: any;


  constructor(private route: ActivatedRoute, private formbuild: FormBuilder, private getService: GetoneServiceService, private datepipe: DatePipe, private postService: PostServiceService, private router: Router) {
    this.bid = this.route.snapshot.params['id'];
    this.myform = formbuild.group({
      'book_id': ['', Validators.compose([Validators.required])],
      'Title': ['', Validators.compose([Validators.required])],
      'ISBN': ['', Validators.compose([Validators.required])],
      'Edition': ['', Validators.required],
      'TotalPage': [''],
      'publish_date': ['', Validators.required],
      'Authors': ['', Validators.required]
    });
  }
  async ngOnInit(): Promise<void> {
    this.getService.getOneService(this.bid, (data) => {
      data = data.data;
      let latest_date = this.datepipe.transform(data.publish_date, 'yyyy-MM-dd');
      this.myform.controls['ISBN'].setValue(data.ISBN);
      this.myform.controls['Edition'].setValue(data.Edition);
      this.myform.controls['TotalPage'].setValue(data.TotalPage);
      this.myform.controls['publish_date'].setValue(latest_date);
      this.myform.controls['book_id'].setValue(data.book_id);
      this.myform.controls['Authors'].setValue(data.Authors);
      this.myform.controls['Title'].setValue(data.Title);
    });

  }


  onSubmit() {
    this.data = this.myform.value;
    console.log(this.data);
    this.postService.updatedataService(this.bid, this.data, (data) => {
      this.router.navigate(['books']);
    });
  }

}
