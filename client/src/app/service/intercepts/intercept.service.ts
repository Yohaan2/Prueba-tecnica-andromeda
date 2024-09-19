import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor (@Inject(PLATFORM_ID) private platformId: Object) {}

  getToken(): string | null {
    if(isPlatformBrowser(this.platformId)){
      return localStorage.getItem('token');
    }
    return null;
  }
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(req).pipe(
      tap(event => {}),
      catchError((error) => {
        if (error.status === 401) {
          console.log('Error 401');
        }
        return throwError(error);
      })
    );
  }
}