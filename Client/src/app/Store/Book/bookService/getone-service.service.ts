import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flatMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetoneServiceService {
value:any
  constructor(public http:HttpClient) { }
  getOneService(id:string,callback: (data:any) => void) :any{
 return this.http.get('http://localhost:3000/api/books/'+"6230375a98e6de854afd27ff")
    .subscribe( res => {
      callback(res);
     },
     err => { console.log('Error occurred'); } );
  
  }
  }

