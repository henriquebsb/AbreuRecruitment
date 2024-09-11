import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from './models';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private baseUrl = 'https://localhost:44351/api/art-works'
  constructor(private http: HttpClient) { }

  getGalleries(): Observable<Work[]> {
    return this.http.get<Work[]>(`${this.baseUrl}`);
  }
}
