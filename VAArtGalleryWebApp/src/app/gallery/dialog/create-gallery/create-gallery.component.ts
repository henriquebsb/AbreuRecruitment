import {Component, inject, model} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material/dialog';
import { CreateGallery, Gallery } from '../../models';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-create-gallery',
  templateUrl: './create-gallery.component.html',
  styleUrl: './create-gallery.component.css'
})

export class CreateGalleryComponent {
  readonly dialogRef = inject(MatDialogRef<CreateGalleryComponent>);
  readonly name = model('');
  readonly city = model('');
  readonly manager = model('');

  galleryForm: CreateGallery = {
    name: '',
    city: '',
    manager: ''
  }

  constructor(
    private galleryService: GalleryService,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.galleryForm.name = this.name()
    this.galleryForm.city = this.city()
    this.galleryForm.manager = this.manager()

    this.galleryService.createArtGallery(this.galleryForm).subscribe({
      next: result => console.log(result),
      error: error => console.log(error),
      complete: () => {
        this.dialogRef.close('onConfirm');
      }
    })
  }
}
