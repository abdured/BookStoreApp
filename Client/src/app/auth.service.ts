import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverEndPoint:string ='http://localhost:3000/api/users'
  constructor(private http:HttpClient,private router: Router) { }

  getAuthToken()
  {
    return localStorage.getItem('auth_token')
  }
  setAuthToken(data:string)
  {
    localStorage.setItem('auth_token',data);
  }

  isLogenIn():boolean
  {
     if( localStorage.hasOwnProperty("auth_token"))
     {
       return true;
     }
     return false;
  }

  login(username:string,password:string):any
  {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    this.http.post(`${this.serverEndPoint}/login`,{username,password},{ headers: headers })
    .subscribe((result:any)=>
      {
        
        const {success,data} = result;
        if(success)
        {
        
          this.setAuthToken(data);
          let token =jwtDecode(data)
          console.log(token);
          this.router.navigate(['home']);
        }
        else{
          console.log(result)
        }
      });
       
 
  }

  logout()
  {
    localStorage.removeItem('auth_token');
  }

  signup(user:any)
  {
  

    user.role =1;

    const headers = new HttpHeaders({ "Content-Type": "application/json" });
      this.http.post(`${this.serverEndPoint}/signup`,user,{ headers: headers })
      .subscribe((result:any)=>
      {
        
        const {success,data} = result;
        if(success)
        {
        
          this.setAuthToken(data);
          this.router.navigate(['login']);
        }
        else{
          console.log(result)
        }
      });
    
  
  }
 
}
