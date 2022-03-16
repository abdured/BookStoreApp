import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  serverEndPoint: string = 'http://localhost:3000/api/books'
  constructor(private http: HttpClient, private router: Router) { }

  addComment(id: string, data: any, callback: (data: any) => void): any {
    console.log(data)
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.patch(`${this.serverEndPoint}/${id}/comments`, data, { headers: headers })
      .subscribe(res => {
        callback(res);
      },
        err => { console.log('Error occurred'); });

  }

}
