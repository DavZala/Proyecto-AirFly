import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-paquetes',
  standalone: true,
  imports: [],
  templateUrl: './crud-paquetes.component.html',
  styleUrl: './crud-paquetes.component.css'
})
export class CrudPaquetesComponent {
  contenido: string = "";


  cambiarContenido(nuevoContenido: string){
    this.contenido = nuevoContenido;
  }

}
