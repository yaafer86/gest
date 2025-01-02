
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonnelService {
  private apiUrl = 'https://effective-couscous-r46765qwxwjxhp4gq-8080.app.github.dev/api/personnel';

  constructor(private http: HttpClient) {}

  getPersonnel(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPersonnel(personnel: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, personnel);
  }

  updatePersonnel(id: number, personnel: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, personnel);
  }

  deletePersonnel(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
