import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
 constructor(public http:HttpClient) { }

 postdataService(data:any){ 
   console.log({data});
  this.http.post('http://localhost:3000/api/books',
   data)
  
    .subscribe( res => { console.log(res); },
     err => { console.log('Error occurred'); } );
    

  }
 }


