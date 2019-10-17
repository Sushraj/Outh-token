import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    constructor(private router: Router, private http: HttpClient) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = window.sessionStorage.getItem('userToken');
        console.log("dsasdasd" + token);
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        } else {
            return next.handle(req).pipe(catchError((error)=>{
                console.log(error);
                return throwError(error);
            }))
        }
      

        //  return next.handle(request).pipe(catchError(err => {
        //     if (err.status === 401) {
        //         // auto logout if 401 response returned from api
        //         this.authenticationService.logout();
        //         location.reload(true);
        //     }

        //     const error = err.error.message || err.statusText;
        //     return throwError(error);
        // }))

    }
}

