import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
