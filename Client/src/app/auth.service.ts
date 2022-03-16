import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverEndPoint: string = 'http://localhost:3000/api/users'

  decodedToken: { [key: string]: string } = {}
  constructor(private http: HttpClient, private router: Router) { }

  getAuthToken() {
    return localStorage.getItem('auth_token')
  }
  setAuthToken(data: string) {
    localStorage.setItem('auth_token', data);
  }
  setNameAndRole(n: string, r: string) {
    localStorage.setItem('user_name', n);
    localStorage.setItem('user_role', r);
  }

  isLogenIn(): boolean {
    if (localStorage.hasOwnProperty("auth_token")) {
      return true;
    }
    return false;
  }

  login(username: string, password: string): any {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    this.http.post(`${this.serverEndPoint}/login`, { username, password }, { headers: headers })
      .subscribe((result: any) => {

        const { success, data } = result;
        if (success) {

          this.setAuthToken(data);
          // let token =jwtDecode(data)
          // this.userData = jwtDecode(data)
          this.decodedToken = jwtDecode(data)
          const { firstname, lastname, role } = this.decodedToken;
          this.setNameAndRole(firstname + " " + lastname, role)
          if (this.isAdmain()) {
            this.router.navigate(['home']);
          }
          else {
            this.router.navigate(['home']);
          }

        }
        else {
          console.log(result)
        }
      });


  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_role');
  }

  signup(user: any) {
    user.role = "user";
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    this.http.post(`${this.serverEndPoint}/signup`, user, { headers: headers })
      .subscribe((result: any) => {

        const { success, data } = result;
        if (success) {

          this.setAuthToken(data);
          this.logout();
          this.router.navigate(['login']);
        }
        else {
          console.log(result)
        }
      });


  }


  getName() {

    return localStorage.getItem('user_name')
  }

  getRole() {
    return localStorage.getItem('user_role')
  }
  isAdmain(): boolean {
    const role = this.getRole();

    if (role == "user") {
      return false;
    }
    else {
      return true;
    }
  }
}
