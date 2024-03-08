import { Component } from '@angular/core';
import { Usuario } from './IUsuario';
import { MatTableModule } from '@angular/material/table';
import { NgFor, SlicePipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-g-users',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatPaginator, SlicePipe, NgFor],
  templateUrl: './g-users.component.html',
  styleUrl: './g-users.component.css'
})
export class GUsersComponent {
  currentPage = 1;
  pageSize = 4;

  usuariosExistentes: Usuario[] = [
    {
      identificacion: 1,
      nombre: "Juan",
      pais: "Colombia",
      divisa: 1800
    },
    {
      identificacion: 2,
      nombre: "María",
      pais: "México",
      divisa: 2100
    },
    {
      identificacion: 3,
      nombre: "Pedro",
      pais: "España",
      divisa: 1500
    },
    {
      identificacion: 4,
      nombre: "Ana",
      pais: "Argentina",
      divisa: 1900
    },
    {
      identificacion: 5,
      nombre: "Luis",
      pais: "Chile",
      divisa: 2200
    },
    {
      identificacion: 6,
      nombre: "Elena",
      pais: "Perú",
      divisa: 2000
    },
    {
      identificacion: 7,
      nombre: "Carlos",
      pais: "Uruguay",
      divisa: 1800
    },
    {
      identificacion: 8,
      nombre: "Sofía",
      pais: "Brasil",
      divisa: 2300
    },
    {
      identificacion: 9,
      nombre: "Diego",
      pais: "Ecuador",
      divisa: 1700
    }
    
  ];

  handlePageChange(event: any) {
    this.currentPage = Math.floor(event.pageIndex / event.pageSize) + 1;
    this.pageSize = event.pageSize;
    // Actualizar los datos en base a la nueva página y tamaño (remplazar con tu lógica)
    // this.obtenerPersonas(this.currentPage, this.pageSize);
  }
}
