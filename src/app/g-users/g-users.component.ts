import { Component } from '@angular/core';
import { Usuario } from '../Models/Iusuario';
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
      email: "Juan",
      password: ""
    },
    {
      identificacion: 2,
      email: "María",
      password: ""
    },
    {
      identificacion: 3,
      email: "Pedro",
      password: ""
    },
    {
      identificacion: 4,
      email: "Ana",
      password: ""
    },
    {
      identificacion: 5,
      email: "Luis",
      password: ""
    },
    {
      identificacion: 6,
      email: "Elena",
      password: ""
    },
    {
      identificacion: 7,
      email: "Carlos",
      password: ""
    },
    {
      identificacion: 8,
      email: "Sofía",
      password: ""
    },
    {
      identificacion: 9,
      email: "Diego",
      password: ""
    }
    
  ];

  handlePageChange(event: any) {
    this.currentPage = Math.floor(event.pageIndex / event.pageSize) + 1;
    this.pageSize = event.pageSize;
    // Actualizar los datos en base a la nueva página y tamaño (remplazar con tu lógica)
    // this.obtenerPersonas(this.currentPage, this.pageSize);
  }
}
