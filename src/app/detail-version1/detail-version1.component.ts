import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-detail-version1',
    standalone: true,
    templateUrl: './detail-version1.component.html',
    styleUrl: './detail-version1.component.css',
    imports: [
        FooterComponent
    ]
})
export class DetailVersion1Component {

}
