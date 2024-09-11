import { Component, OnInit } from '@angular/core';
import { Work } from './models';
import { GalleryService } from '../gallery/gallery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit {
  galleryId: string | null = ""
  galleryName: string | null = ""
  works: Work[] = [];
  displayedColumns: string[] = ['name', 'author', 'creationYear', 'askPrice', 'actions'];

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.galleryId = this.route.snapshot.paramMap.get('id');
    this.galleryName = this.route.snapshot.paramMap.get('name');
    this.galleryService.getArtWorksGallery(this.galleryId).subscribe(works => this.works = works);
  }

  deleteArtWorkClick(id: any) {}
}
