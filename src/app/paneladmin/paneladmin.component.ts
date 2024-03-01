import { Component } from '@angular/core';
import { BarranavegacionComponent } from '../barranavegacion/barranavegacion.component';
import { GPaquetesComponent } from '../g-paquetes/g-paquetes.component';
import { NgIf } from '@angular/common';
import { LoginComponent } from "../login/login.component";
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-paneladmin',
    standalone: true,
    templateUrl: './paneladmin.component.html',
    styleUrl: './paneladmin.component.css',
    imports: [BarranavegacionComponent, GPaquetesComponent, NgIf, LoginComponent, HomeComponent]
})
export class PaneladminComponent {
  contenido: string = "administrador";


  cambiarContenido(nuevoContenido: string){
    this.contenido = nuevoContenido;
  }

}
