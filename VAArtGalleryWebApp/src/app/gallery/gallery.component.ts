import { Component, inject, model, OnInit, signal } from '@angular/core';
import { Gallery } from './models';
import { GalleryService } from './gallery.service';
import { Router } from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { CreateGalleryComponent } from './dialog/create-gallery/create-gallery.component';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})

export class GalleryComponent implements OnInit {
  galleries: Gallery[] = [];
  displayedColumns: string[] = ['name', 'city', 'manager', 'nbrWorks', 'actions'];

  readonly dialog = inject(MatDialog);

  openCreateGalleryDialog(): void {
    const dialogRef = this.dialog.open(CreateGalleryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (result !== undefined && result == 'onConfirm') {
        this.galleryService.getGalleries().subscribe(galleries => {this.galleries = galleries; console.log(this.galleries);});
      }
    });
  }

  constructor(
    private galleryService: GalleryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.galleryService.getGalleries().subscribe(galleries => {this.galleries = galleries; console.log(this.galleries);});
  }

  editGalleryClick(galleryId: string) {
    console.log(galleryId);
  }

  openArtWorksList(gallery: Gallery) {
    this.router.navigate(['art-works/' + gallery.id + '/' + gallery.name]);
  }
}
