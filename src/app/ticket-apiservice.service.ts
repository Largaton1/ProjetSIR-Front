import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketAPIServiceService {

  private apiUrl = 'http://localhost:8080/evenement';

  constructor(private http: HttpClient) { }

getTicketms() {
  this.http.get(this.apiUrl).subscribe((data) => {
    console.log(data);
  });
}

/* getEvents(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

createEvent(ticket: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, ticket);
} */
}
