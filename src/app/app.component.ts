import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink, 
    MatSlideToggleModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AirFly';

}
