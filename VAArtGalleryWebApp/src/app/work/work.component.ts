import { Component } from '@angular/core';
import { Work } from './models';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  works: Work[] = [];
  displayedColumns: string[] = ['name', 'author', 'creationYear', 'askPrice', 'actions'];
}
