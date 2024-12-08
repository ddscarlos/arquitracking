import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-registrar-incompletos',
  standalone: true,
  imports: [],
  templateUrl: './registrar-incompletos.component.html',
  styleUrl: './registrar-incompletos.component.css'
})
export class RegistrarIncompletosComponent {

  icono:string='lnr-apartment';
  coloricono:string='text-primary';
  titulo:string='Registro de Datos Incompletos';
  descripcion:string='Modificación y registro de las empresas con datos incompletos';

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
