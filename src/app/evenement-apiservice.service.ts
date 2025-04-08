import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EvenementAPIServiceService {

  private apiUrl = 'http://localhost:8080/evenement';

  constructor(private http: HttpClient) { }



getEvents(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

createEvent(ticket: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, ticket);
}

}
