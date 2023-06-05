import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Journey } from '../../models/Journey.model';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'https://localhost:7108/api/Flight';

  constructor(private http: HttpClient) {}

  getFlights(origin: string, destination: string): Observable<Journey[]> {
    let params = new HttpParams()
      .set('origin', origin)
      .set('destination', destination);
    return this.http.get<Journey[]>(this.apiUrl, { params });
  }
}
