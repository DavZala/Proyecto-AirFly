import { Component } from '@angular/core';
import { BarranavegacionComponent } from "../barranavegacion/barranavegacion.component";
import { NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-paquetes',
    standalone: true,
    templateUrl: './paquetes.component.html',
    styleUrl: './paquetes.component.css',
    imports: [BarranavegacionComponent, NgFor, FooterComponent]
})
export class PaquetesComponent {

    paquetes: any[] = [
        {
            nombre: "Aventura en el Amazonas",
            referencia_img: "../../assets/img/amazonas.jpg",
            descripcion: "Aventura en el Amazonas te ofrece un viaje inolvidable por la selva amazónica. Recorre los ríos, observa la fauna y flora y disfruta de la cultura local.",
            costo: 2000000,
        },
        {
            nombre: "Glamping La Montaña",
            referencia_img: "../../assets/img/glamping.jpg",
            descripcion: "Glamping La Montaña te ofrece una experiencia glamping única en las montañas de Colombia. Disfruta del contacto con la naturaleza y las comodidades de nuestras carpas de lujo.",
            costo: 1500000,
        },
        {
            nombre: "Hotel Aqualina",
            referencia_img: "../../assets/img/aqualina.webp",
            descripcion: "Hotel Aqualina Inn se sitúa en San Andrés. Cuenta con piscina y wi-fi gratis en zonas comunes, así como recepción 24 hrs.",
            costo: 1376755,
          },
      ];



  constructor() { }

  ngOnInit(): void {
  }
}
