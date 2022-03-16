import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flatMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetoneServiceService {
  value: any
  constructor(public http: HttpClient) { }
  getOneService(id: string, callback: (data: any) => void): any {
    return this.http.get('http://localhost:3000/api/books/' + id)
      .subscribe(res => {
        callback(res);
      },
        err => { console.log('Error occurred'); });

  }
}

