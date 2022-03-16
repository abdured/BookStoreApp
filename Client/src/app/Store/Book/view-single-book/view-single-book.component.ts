import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { BookService } from '../bookService/book.service';
import { GetoneServiceService } from '../bookService/getone-service.service';


@Component({
  selector: 'app-view-single-book',
  templateUrl: './view-single-book.component.html',
  styleUrls: ['./view-single-book.component.css']
})
export class ViewSingleBookComponent implements OnInit {
  value: any;
  bid!: string;
  comments: any = []
  addComment!: FormGroup;
  isCommented!: boolean
  constructor(private formbuild: FormBuilder, private getonebook: GetoneServiceService, public userService: AuthService, private route: ActivatedRoute, public bookservice: BookService, private router: Router) { }

  ngOnInit(): void {

    this.bid = this.route.snapshot.params['id'];


    this.addComment = this.formbuild.group({

      'comment': ['', Validators.required]

    });

    this.getonebook.getOneService(this.bid, (data: any) => {
      console.log(data);
      if (!data.success) {
        this.router.navigate(['books']);
      }
      this.value = data.data;
      this.comments = this.value['comment']

      console.log(this.value);
    });


    this.comments.some((element: any) => {
      if (element.user_id == this.userService.getName()) {
        this.isCommented = true;
        console.log(true);
      }
      else {
        this.isCommented = false;
      }
    });
    console.log(this.isCommented);
    // this.bookservice.getAllcomments(this.bid, (data) => {
    //   //  console.log(data.data);
    //   this.comments = data;
    //   console.log(this.comments);
    // })
  }

  onSubmit() {
    let name = this.userService.getName()
    let comment = this.addComment.value.comment
    const obj = { user_id: name, Body: comment }
    this.bookservice.addComment(this.bid, obj, (data) => {
      location.reload();
    }
    )

  }




}
