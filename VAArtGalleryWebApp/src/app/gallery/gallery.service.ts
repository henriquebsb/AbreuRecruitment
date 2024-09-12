import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateGallery, Gallery } from './models';
import { Work } from '../work/models';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private baseUrl = 'https://localhost:44351/api/art-galleries'
  constructor(private http: HttpClient) { }

  getGalleries(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(`${this.baseUrl}`);
  }

  getArtWorksGallery(id: string | null): Observable<Work[]> {
    return this.http.get<Work[]>(`${this.baseUrl}/art-works/gallery/` + id);
  }

  createArtGallery(gallery: CreateGallery): Observable<Gallery> {
    return this.http.post<Gallery>(this.baseUrl, gallery);
  }
}
