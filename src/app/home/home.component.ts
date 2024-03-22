import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { BarranavegacionComponent } from "../barranavegacion/barranavegacion.component";
import { Paquete } from '../Models/Ipaquete';

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
export class HomeComponent{

    constructor(private _route:ActivatedRoute){}

    /*
    paquete?: Paquete;
    listaPaquetes: Paquete[] = listaPaquetes;
    ngOnInit():void{
        this._route.params.subscribe(params => {
            this.paquete = this.listaPaquetes.find(paquete => paquete.id == params['paqueteId']);
        });
    }
    */

PaisDestino: String = "Florida, Estados Unidos";
Destino: String = "Parques Disney";
urlDestino: String = "/paquetes/0"
imglink: string = "../../assets/img/disney.jpeg"; //omrah.jpg

}
