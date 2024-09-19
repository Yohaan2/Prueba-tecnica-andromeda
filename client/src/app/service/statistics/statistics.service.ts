import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatisticsResponse } from '../../models/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getStatistics(): Observable<StatisticsResponse> {
    const data = this.http.get<StatisticsResponse>(`${this.apiUrl}/statistics`)
    return data;
  }
}
