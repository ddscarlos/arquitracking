import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { arquitrackingService } from '../../../services/arquitracking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-incompletos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registrar-incompletos.component.html',
  styleUrl: './registrar-incompletos.component.css'
})
export class RegistrarIncompletosComponent {

  icono:string='lnr-apartment';
  coloricono:string='text-primary';
  titulo:string='Registro de Datos Incompletos';
  descripcion:string='Modificación y registro de las empresas con datos incompletos';
  
  //VARIABLES COMPONENTES
  itemsTipoDocumentos:any;
  itemsTipoTelefonos:any;
  itemsRedSocial:any;

  constructor(private appComponent: AppComponent , private modalService: NgbModal
    ,private arquitrackingService: arquitrackingService
  ) {
 
  }

  ngOnInit(): void {
    this.tipodedocumentosel();
    this.tipotelefono();
    this.tiporedsocial();
  }

  open(content: any, size:string) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size: size, backdrop: 'static'}).result.then(
      (result) => {
        console.log(`Modal cerrado con: ${result}`);
      },
      (reason) => {
        console.log(`Modal cerrado por: ${reason}`);
      }
    );
  }

  tipodedocumentosel(){
    let dataPost = { 
      p_tdi_id : 0
    };
    
    this.arquitrackingService.tipodedocumentosel(dataPost).subscribe({
      next: (response: any) => {
        console.log(response);
        this.itemsTipoDocumentos = response.data;
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  tipotelefono(){
    let dataPost ={
      p_tti_id:0
    };
    this.arquitrackingService.tipotelefono(dataPost).subscribe({
      next: (response: any) =>{
        console.log(response);
        this.itemsTipoTelefonos = response.data;
      },
      error: (error:any) => {
        console.error(error);
      }
    })
  }

  tiporedsocial(){
    let dataPost = {
      p_rso_id: 0,
      p_rso_activo:0
    };
    this.arquitrackingService.tiporedsocial(dataPost).subscribe({
      next:(response:any) =>{
        console.log(response)
        this.itemsRedSocial = response.data;
      },

      error:(response:any) =>{
        console.log(response);
      }
    })
  }
}
