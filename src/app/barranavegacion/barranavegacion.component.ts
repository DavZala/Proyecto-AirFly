import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-barranavegacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './barranavegacion.component.html',
  styleUrl: './barranavegacion.component.css'
})
export class BarranavegacionComponent {
  referencia_img: String = "../../assets/img/icons8-piloto-automático-64.png"; // ../../assets/img/icons8-piloto-automático-64-blanco.png
}
