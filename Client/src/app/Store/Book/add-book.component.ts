import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostServiceService } from './bookService/post-service.service';

@Component({
  selector: 'app-add-book',
  template: `
  <div class="card" style="width: 40rem; Margin:2em 0em 0em 20em">
  <form [formGroup]="myform" (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label for="formGroupExampleInput">Book_id</label>
    <input type="text" class="form-control" id="formGroupExampleInput" formControlName="book_id">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput">Title</label>
    <input type="text" class="form-control" id="formGroupExampleInput" formControlName="Title">
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
 
  
<div FormArrayName="Authors">
    <h3>Author</h3>
    <div class="form-group" *ngFor="let hobby of AuthorArray.controls; let i = index">
      <input type="text" class="form-control" formControlName="Authors"   />
    </div>
  </div>
<button type="button" class="btn btn-default" (click)="onAddHobby()">Add Author</button>
<div class="form-group">
    <label for="formGroupExampleInput2">Upload-Book</label>
    <input type="file" class="form-control" id="customFile"  />
</div>

<button type="submit" class="btn btn-primary" style="width: 20rem;Margin:2em 0em 0em 8em; ">Submit</button>
</form>
  </div> `
,
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent  {
  myform!:FormGroup;
  AuthorArray!:FormArray;
  data!:object;

  constructor(private formbuild:FormBuilder,private addservice:PostServiceService) { 
    this.myform=formbuild.group({
      'book_id': ['', Validators.compose([Validators.required])],
      'Title': ['', Validators.compose([Validators.required])],
      'ISBN': ['', Validators.compose([Validators.required])],
      'Edition': ['', Validators.required],
      'TotalPage': [''],
      'publish_date': ['', Validators.required],
      'Authors': formbuild.array([
        ['', null] // default value, sync validators, async validators
      ]) 
    });
    this.AuthorArray = this.myform.get('Authors') as FormArray; 
  }
  onSubmit(){
    console.log("hello");
   
   this.data=this.myform.value;
   this.addservice.postdataService(this.data);
   console.log(this.data);
   
  }
  onAddHobby() {
    (<FormArray>this.myform.controls['Authors']).push(new FormControl(''));
  }
 
    
}
