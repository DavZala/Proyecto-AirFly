import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../Models/Iusuario';
import Swal from 'sweetalert2';
import { MyApiService } from '../Services/my-api.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {
formulario: FormGroup;

constructor(private form: FormBuilder, private _apiService: MyApiService, private _router:Router){
  this.formulario = this.form.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
}

  public capturarDatos(){
    const usuario: Usuario = {
      identificacion: 0,
      email: this.formulario.value.email,
      password: this.formulario.value.password
    };
    if (usuario.email == "admin@airfly.com" && usuario.password == "admin@.com") {
      this._router.navigate(['/paneladministrador']); 
      //[routerLink]="['/paneladministrativo']";
    }else{
      Swal.fire({
        title: "Usuario o Contraseña incorrecta",
        text: "Verifique que su usuario o contraseña sea la de su cuenta",
        icon: "warning"
      });
    }
  }
}
