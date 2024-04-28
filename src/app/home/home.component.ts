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

PaisDestino: String = "Omrah, Arabia Saudita";
Destino: String = "Umrah";
urlDestino: String = ""
imglink: string = "../../assets/img/omrah.jpg"; //omrah.jpg disney.jpeg

}
