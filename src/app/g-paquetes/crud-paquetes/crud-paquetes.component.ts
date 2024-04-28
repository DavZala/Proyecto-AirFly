import { Component, OnInit } from '@angular/core';
import { Paquete} from '../../Models/Ipaquete';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';
import { MyApiService } from '../../Services/my-api.service';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-paquetes',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './crud-paquetes.component.html',
  styleUrl: './crud-paquetes.component.css'
})

export class CrudPaquetesComponent implements OnInit {
  contenido: string = "";
  paquete?: Paquete;
  bandera = true;
  idObtenida: number = 0;

  formulario: FormGroup;

  constructor(private form: FormBuilder, private _apiService: MyApiService, private _route:ActivatedRoute){
    this.formulario = this.form.group({
      nombre_paquete: ['', Validators.required],
      pais: ['', Validators.required],
      ref_1: ['', Validators.required],
      ref_2: ['', Validators.required],
      ref_3: ['', Validators.required],
      ref_4: ['', Validators.required],
      estrellas: ['',],
      descripcion_1: ['', Validators.required],
      descripcion_2: ['', Validators.required],
      descripcion_ubicacion: ['', Validators.required],
      costo: ['', Validators.required],
    })
  }

  ngOnInit():void{
    this._route.params.subscribe({
        next:(params: Params) =>{
        this._apiService.obtenerProducto(Number(params['paqueteId'])).subscribe({
            next:(data:Paquete) =>{
                this.paquete = data
                this.formulario.patchValue({
                  nombre_paquete: this.paquete.nombre,
                  pais: this.paquete.pais,
                  ref_1: this.paquete.ref_1,
                  ref_2: this.paquete.ref_2,
                  ref_3: this.paquete.ref_3,
                  ref_4: this.paquete.ref_4,
                  estrellas: this.paquete.estrellas,
                  descripcion_1: this.paquete.descripcion_1,
                  descripcion_2: this.paquete.descripcion_2,
                  descripcion_ubicacion: this.paquete.descripcion_ubicacion,
                  costo: this.paquete.costo,
                })
                this.bandera = false;
                this.idObtenida = parseInt(this._route.snapshot.paramMap.get('paqueteId') || '0', 10);  
                console.log('Valor de id:', this.idObtenida);
            }    
        })
    }
    })
}

 public capturarDatos(){
    const paquete: Paquete = {
      id: 0,
      nombre: this.formulario.value.nombre_paquete,
      pais:  this.formulario.value.pais,
      ref_1: this.formulario.value.ref_1,
      ref_2: this.formulario.value.ref_2,
      ref_3: this.formulario.value.ref_3,
      ref_4: this.formulario.value.ref_4,
      estrellas: this.formulario.value.estrellas,
      descripcion_1: this.formulario.value.descripcion_1,
      descripcion_2: this.formulario.value.descripcion_2,
      descripcion_ubicacion: this.formulario.value.descripcion_ubicacion,
      costo: this.formulario.value.costo
    };
    this._apiService.nuevoPaquete(paquete).subscribe(respuesta => {
      console.log('La API respondió:', respuesta);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "El paquete fue guardado con exito!",
        showConfirmButton: false,
        timer: 1500
      });
      // Realizar acciones adicionales según la respuesta de la API
    },
    error => {
      console.error('Error al enviar datos a la API:', error);
      // Manejar el error de alguna manera
    }
  );
  }

  public actualizarCambios(){
    const paquete: Paquete = {
      id: this.idObtenida,
      nombre: this.formulario.value.nombre_paquete,
      pais:  this.formulario.value.pais,
      ref_1: this.formulario.value.ref_1,
      ref_2: this.formulario.value.ref_2,
      ref_3: this.formulario.value.ref_3,
      ref_4: this.formulario.value.ref_4,
      estrellas: this.formulario.value.estrellas,
      descripcion_1: this.formulario.value.descripcion_1,
      descripcion_2: this.formulario.value.descripcion_2,
      descripcion_ubicacion: this.formulario.value.descripcion_ubicacion,
      costo: this.formulario.value.costo
    };
    this._apiService.actualizarPaquete(paquete).subscribe(respuesta => {
      console.log('La API respondió:', respuesta);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "El paquete fue actualizado con exito!",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(this.idObtenida)
      // Realizar acciones adicionales según la respuesta de la API
    },
    error => {
      console.error('Error al enviar datos a la API:', error);
      // Manejar el error de alguna manera
    }
  );
  }

  cambiarContenido(nuevoContenido: string){
    this.contenido = nuevoContenido;
  }

}
