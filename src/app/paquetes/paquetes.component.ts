import { Component, OnInit } from '@angular/core';
import { BarranavegacionComponent } from "../barranavegacion/barranavegacion.component";
import { NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { Paquete, listaPaquetes } from '../g-paquetes/Ipaquete';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-paquetes',
    standalone: true,
    templateUrl: './paquetes.component.html',
    styleUrl: './paquetes.component.css',
    imports: [BarranavegacionComponent, NgFor, FooterComponent, RouterLink]
})
export class PaquetesComponent implements OnInit{

  constructor(private _route:ActivatedRoute){}

  paquete?: Paquete;
  listaPaquetes: Paquete[] = listaPaquetes;
  ngOnInit():void{
      this._route.params.subscribe(params => {
          this.paquete = this.listaPaquetes.find(paquete => paquete.id == params['paqueteId']);
      });
  }
    

  /*
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
          {
            nombre: "Hotel Aqualina",
            referencia_img: "../../assets/img/aqualina.webp",
            descripcion: "Hotel Aqualina Inn se sitúa en San Andrés. Cuenta con piscina y wi-fi gratis en zonas comunes, así como recepción 24 hrs.",
            costo: 1376755,
          },
          {
            nombre: "Hotel Aqualina",
            referencia_img: "../../assets/img/aqualina.webp",
            descripcion: "Hotel Aqualina Inn se sitúa en San Andrés. Cuenta con piscina y wi-fi gratis en zonas comunes, así como recepción 24 hrs.",
            costo: 1376755,
          },
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
      ];
*/
}
