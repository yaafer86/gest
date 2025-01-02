import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnel } from '../personnel/personnel.model'; // Correct import path

@Injectable({
  providedIn: 'root'
})
export class PersonnelService { // Renamed to PersonnelService

  private apiUrl = 'http://localhost:8080/api/personnel';

  constructor(private http: HttpClient) { }

  getPersonnel(): Observable<Personnel[]> {
    return this.http.get<Personnel[]>(this.apiUrl);
  }

  getPersonnelById(id: number): Observable<Personnel> {
    return this.http.get<Personnel>(`${this.apiUrl}/${id}`);
  }

  createPersonnel(personnel: Personnel): Observable<Personnel> {
    return this.http.post<Personnel>(this.apiUrl, personnel);
  }

  updatePersonnel(id: number, personnel: Personnel): Observable<Personnel> {
    return this.http.put<Personnel>(`${this.apiUrl}/${id}`, personnel);
  }

  deletePersonnel(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}