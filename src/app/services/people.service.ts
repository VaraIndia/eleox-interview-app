import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService { 
  private apiUrl = 'https://eleox-interview-api-7n5su.ondigitalocean.app/people';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // ✅ Fetch all people
  getPeople(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl, { headers });
  }
// ✅ Fetch a single person by ID
getPerson(id: string): Observable<any> {
  const token = this.authService.getToken();
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
 // ✅ Trim the ID to remove unwanted spaces or newlines
 const cleanId = id.trim();
  return this.http.get<any>(`${this.apiUrl}/${cleanId}`, { headers });
}

deletePerson(id: string): Observable<any> {
  const token = this.authService.getToken();
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  return this.http.delete(`${this.apiUrl}/${id}`, { headers });
}

createPerson(personData: any): Observable<any> {
  const token = this.authService.getToken();
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  return this.http.post<any>(`${this.apiUrl}`, personData, { headers });
}

}
