import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostServiceService } from './bookService/post-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  myform!: FormGroup;
  data!: object;

  constructor(private formbuild: FormBuilder, private addservice: PostServiceService, private router: Router) {
    this.myform = formbuild.group({
      'book_id': ['', Validators.compose([Validators.required])],
      'Title': ['', Validators.compose([Validators.required])],
      'ISBN': ['', Validators.compose([Validators.required])],
      'Edition': ['', Validators.required],
      'TotalPage': [''],
      'publish_date': ['', Validators.required],
      'Authors': ['', Validators.required],
      'file': ['', Validators.required]
    });

  }
  onSubmit() {
    console.log("hello");

    this.data = this.myform.value;

    this.addservice.postdataService(this.data);
    this.router.navigate(['books']);

  }


}
