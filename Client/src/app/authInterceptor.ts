import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class authInterceptor implements HttpInterceptor
{
    constructor(private authService:AuthService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
       if(this.authService.isLogenIn())
       {
        const token = localStorage.getItem('auth_token')
      
        req =req.clone({
                setHeaders: {
                  
                    Authorization: `Bearer ${token}`,
                   
                }
            })
        
       }

        
return next.handle(req);
    }
    
}