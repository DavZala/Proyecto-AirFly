import { ChangeDetectorRef, Component, ComponentRef, OnInit } from '@angular/core';
import { Paquete} from '../Models/Ipaquete';
import { ActivatedRoute, RouterLink} from '@angular/router';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { CrudPaquetesComponent } from "./crud-paquetes/crud-paquetes.component";
import { MyApiService } from '../Services/my-api.service';
import Swal from 'sweetalert2';
import { Router } from 'express';

@Component({
    selector: 'app-g-paquetes',
    standalone: true,
    templateUrl: './g-paquetes.component.html',
    styleUrl: './g-paquetes.component.css',
    imports: [RouterLink, NgFor, MatTableModule, MatPaginatorModule, MatPaginator, SlicePipe, NgIf, CrudPaquetesComponent]
})
export class GPaquetesComponent implements OnInit{

    constructor(private _route:ActivatedRoute, private _apiService:MyApiService, private _changeDetectorRef: ChangeDetectorRef){}

    paquete?: Paquete;
    listaPaquetes: Paquete[] = [];

    public eliminarPaquete(id: number | string, nombre: string){
      Swal.fire({
        title: "¿Esta seguro que quiere eliminar el paquete?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `No eliminar`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Paquete Eliminado!", "", "success");
          this._apiService.eliminarPaquete(id).subscribe((data:Paquete) => {this.paquete = data
           // alert("Usted elimino el paquete turistico con el nombre: "+nombre)
          })
       //   this.router.navigate(['/destino']);
        } else if (result.isDenied) {
          //Swal.fire("El paquete no se elimino!", "", "info");
        }
      });
    }

    ngOnInit():void{
      this._apiService.obtenerProductos().subscribe((data:Paquete[]) => {this.listaPaquetes = data});
    }

    /*
    ngOnInit():void{
        this._route.params.subscribe(params => {
            this.paquete = this.listaPaquetes.find(paquete => paquete.id == params['paqueteId']);
          });
        }
        */
  currentPage = 1;
  pageSize = 4;
  /*
  paquetesExistentes: Paquete[] = [
    {
      id: 0,
      nombre: "Relax en el Caribe",
      referencia: "",
      descripcion: " Descubre las paradisíacas playas de Cancún y Riviera Maya, donde podrás relajarte en un hotel frente al mar y disfrutar de actividades como snorkel y buceo. Experimenta la calidez y la hospitalidad de México en una aventura inolvidable. ¡Reserva ahora y déjate cautivar por el encanto único de este destino!",
      costo: 1800
    },
    {
      id: 1,
      nombre: "Entradas a Parques Temáticos Disney Orlando",
      referencia: "",
      descripcion: "Disfruta de playas paradisíacas, aguas cristalinas y atardeceres de ensueño en este paquete de relax en el Caribe. Hospédate en un hotel all inclusive frente al mar y disfruta de actividades como snorkel, buceo y paseos en catamarán.",
      costo: 1800
    },
    {
      id: 2,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 3,
      nombre: "Aventura en la Patagonia",
      referencia: "",
      descripcion: "Este paquete te lleva a explorar los paisajes más impresionantes de la Patagonia argentina y chilena. Disfruta de trekking en el Parque Nacional Torres del Paine, navegación por el Lago Argentino y visitas a glaciares milenarios.",
      costo: 2500
    },
    {
      id: 4,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 5500
    },
    {
      id: 5,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 6,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 7,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 8,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 6,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 7,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 8,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 6,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 7,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 8,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 6,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 7,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
    {
      id: 15,
      nombre: "Recorrido Cultural por Europa",
      referencia: "",
      descripcion: "Este paquete te lleva a conocer las principales ciudades europeas y sus monumentos históricos. Visita París, Roma, Londres y Madrid, y disfruta de experiencias culturales únicas como visitas a museos, galerías de arte y espectáculos.",
      costo: 3500
    },
  ];
*/
  handlePageChange(event: any) {
    this.currentPage = Math.floor(event.pageIndex / event.pageSize) + 1;
    this.pageSize = event.pageSize;
    // Actualizar los datos en base a la nueva página y tamaño (remplazar con tu lógica)
    // this.obtenerPersonas(this.currentPage, this.pageSize);
  }


  contenido: string = "";


  cambiarContenido(nuevoContenido: string){
    this.contenido = nuevoContenido;
  }
}
