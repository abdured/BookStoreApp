import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllServiceService {

  constructor(private http: HttpClient) { }

  getAllService(callback: (data: any) => void): any {
    return this.http.get('http://localhost:3000/api/books')
      .subscribe(res => {
        callback(res);
      },
        err => { console.log('Error occurred'); });

  }

}

