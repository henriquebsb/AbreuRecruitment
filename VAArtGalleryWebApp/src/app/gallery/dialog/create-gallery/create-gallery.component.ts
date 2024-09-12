import {Component, inject, model} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material/dialog';
import { Gallery } from '../../models';

@Component({
  selector: 'app-create-gallery',
  templateUrl: './create-gallery.component.html',
  styleUrl: './create-gallery.component.css'
})

export class CreateGalleryComponent {
  readonly dialogRef = inject(MatDialogRef<CreateGalleryComponent>);

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close('onConfirm');
  }
}

