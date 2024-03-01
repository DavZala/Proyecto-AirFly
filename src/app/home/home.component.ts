import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { BarranavegacionComponent } from "../barranavegacion/barranavegacion.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        RouterLink,
        FooterComponent,
        BarranavegacionComponent
    ]
})
export class HomeComponent {

PaisDestino: String = "Florida, Estados Unidos";
Destino: String = "Parques Disney";
acceso: string = "login"
imglink: string = "../../assets/img/disney.jpeg"; //omrah.jpg

}
