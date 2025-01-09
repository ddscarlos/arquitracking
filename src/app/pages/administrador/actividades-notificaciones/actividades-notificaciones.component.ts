import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-actividades-notificaciones',
  standalone: true,
  imports: [],
  templateUrl: './actividades-notificaciones.component.html',
  styleUrl: './actividades-notificaciones.component.css'
})
export class ActividadesNotificacionesComponent {

  icono:string='lnr-picture';
  coloricono:string='text-primary';
  titulo:string='Notificaciones';
  descripcion:string='Notificaciones de Seguimiento para los usuarios.';

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
