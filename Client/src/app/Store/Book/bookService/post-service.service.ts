import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(public http: HttpClient) { }

  postdataService(data: any) {
    console.log(data);

    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    this.http.post('http://localhost:3000/api/books',
      data, { headers: headers })

      .subscribe(res => { console.log(res); },
        err => { console.log('Error occurred'); });


  }



  updatedataService(id: string, data: any, callback: (data: any) => void): any {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.patch(`http://localhost:3000/api/books/${id}`, data, { headers: headers })
      .subscribe(res => {
        callback(res);
      },
        err => { console.log('Error occurred'); });

  }

  deleteBook(id: string, callback: (data: any) => void): any {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.delete(`http://localhost:3000/api/books/${id}`, { headers: headers })
      .subscribe(res => {
        callback(res);
      },
        err => { console.log('Error occurred'); });

  }

}


