import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GetoneServiceService } from './bookService/getone-service.service';
import { PostServiceService } from './bookService/post-service.service';

@Component({
  selector: 'app-update-book',
  template: `
  <div class="card" style="width: 40rem; Margin:2em 0em 0em 20em">
  <form [formGroup]="myform" (ngSubmit)="onSubmit()">
  <div class="form-group"> 
<label for="formGroupExampleInput">book_id</label>
<input type="text" class="form-control" id="formGroupExampleInput" formControlName="book_id" >
</div>
  <div class="form-group">

  
    <label for="formGroupExampleInput">Title</label>
    <input type="text" class="form-control" id="formGroupExampleInput" formControlName="Title" >
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">ISBN</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" formControlName="ISBN">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Publish-Date</label>
    <input type="Date" class="form-control" id="formGroupExampleInput2" formControlName="publish_date">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Edition</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" formControlName="Edition">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Total-Page</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" formControlName="TotalPage">
  </div>
 
  <div >
    <h3>Author</h3>
    <div class="form-group">
      <input type="text" class="form-control" formControlName="Authors">
    </div>
</div>
<!-- <button type="button" class="btn btn-default" (click)="onAddAuthor()">Add Author</button> -->
<div class="form-group">
    <label for="formGroupExampleInput2">Upload-Book</label>
    <input type="file" class="form-control" id="customFile" />
</div>

<button type="submit" class="btn btn-primary" style="width: 20rem;Margin:2em 0em 0em 8em; ">update</button>
</form>
  </div> `,
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  myform:FormGroup;
  AuthorArray:FormArray;
  data!:Object;
  id:string="6230375a98e6de854afd27ff";

  constructor(private formbuild:FormBuilder,private getService:GetoneServiceService,private datepipe:DatePipe,private postService:PostServiceService) { 
    this.myform=formbuild.group({
      'book_id': ['', Validators.compose([Validators.required])],
      'Title': ['', Validators.compose([Validators.required])],
      'ISBN': ['', Validators.compose([Validators.required])],
      'Edition': ['', Validators.required],
      'TotalPage': [''],
      'publish_date': ['', Validators.required],
      'Authors':[''],
    });
    this.AuthorArray = this.myform.get('Author') as FormArray; 
  }
 async ngOnInit(): Promise<void> {
 this.getService.getOneService(this.id,(data) => {
  let latest_date =this. datepipe. transform(data.publish_date, 'yyyy-MM-dd');
   this.myform.controls['ISBN'].setValue(data.ISBN);
   this.myform.controls['Edition'].setValue(data.Edition);
   this.myform.controls['TotalPage'].setValue(data.TotalPage);
   this.myform.controls['publish_date'].setValue(latest_date);
   this.myform.controls['book_id'].setValue(data.book_id);
   this.myform.controls['Authors'].setValue(data.Authors);
   this.myform.controls['Title'].setValue(data.Title);
});

  }


  onAddAuthor() {
    (<FormArray>this.myform.controls['Author']).push(new FormControl(''));
  }
  onSubmit(){
    this.data=this.myform.value;
    this.postService.postdataService(this.data);
  }

}
