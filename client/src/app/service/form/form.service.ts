import { Injectable } from '@angular/core';
import { DataForm } from '../../models/form.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'http://localhost:3000/client';
  constructor(private http: HttpClient) { }

  registerClient(dataForm: DataForm): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/register-client`, dataForm)
  }
}
