import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mantenimiento',
  standalone: true,
  imports: [],
  templateUrl: './mantenimiento.component.html',
  styleUrl: './mantenimiento.component.css'
})
export class MantenimientoComponent {
  icono:string='lnr-train';
  coloricono:string='text-primary';
  titulo:string='Mantenimiento de Empresa';
  descripcion:string='Sección para poder editar y dar mantenimiento a las empresas registradas.';

  constructor(private appComponent: AppComponent , private modalService: NgbModal) {
    
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
