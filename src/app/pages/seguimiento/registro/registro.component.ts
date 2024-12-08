import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  icono:string='lnr-train';
  coloricono:string='text-primary';
  titulo:string='Mantenimiento de Empresa';
  descripcion:string='Sección para poder editar y dar mantenimiento a las empresas registradas.';

  constructor(private appComponent: AppComponent , private modalService: NgbModal) {
    this.appComponent.login = false;
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size: 'lg', backdrop: 'static'}).result.then(
      (result) => {
        console.log(`Modal cerrado con: ${result}`);
      },
      (reason) => {
        console.log(`Modal cerrado por: ${reason}`);
      }
    );
  }
}
