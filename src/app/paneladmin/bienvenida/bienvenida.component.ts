import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {
mensajeBienvenida: String = "Con grandes permisos, vienen grandes responsabilidades. Cada acción que tomes en este panel administrativo impacta directamente en la experiencia de nuestros usuarios y la integridad de los datos. Sé diligente, consciente y siempre prioriza la seguridad y la confidencialidad.";
}
