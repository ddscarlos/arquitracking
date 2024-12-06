import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {

  icono:string='lnr-picture';
  titulo:string='Consulta Empresa';
  descripcion:string='Registro inicial de las empresas a contactar';

  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
