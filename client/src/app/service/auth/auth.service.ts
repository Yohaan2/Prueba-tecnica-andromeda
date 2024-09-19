import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { UserReponse } from '../../models/user.model';
import { isPlatformBrowser } from '@angular/common';

interface UserRegister {
  email: string;
  password: string;
  username: string;
}

interface UserLogin {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {}

  register (userRegister: UserRegister): Observable<UserReponse> {
    return this.http.post<UserReponse>(`${this.apiUrl}/register`, userRegister)
  }

  login(userLogin: UserLogin): Observable<UserReponse> {
    return this.http.post<UserReponse>(`${this.apiUrl}/login`, userLogin)
  }

  isAuthenticated(): boolean {
    if(isPlatformBrowser(this.platformId)){
      return !!localStorage.getItem('token')
    }
    return false
  }
}
