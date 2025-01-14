import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { arquitrackingService } from '../../../services/arquitracking.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  icono:string='lnr-train';
  coloricono:string='text-primary';
  titulo:string='Mantenimiento de Empresa';
  descripcion:string='Sección para poder editar y dar mantenimiento a las empresas registradas.';

  //VARIABLES COMPONENTES
  itemsDepartamentos:any;
  itemsProvincias:any;
  itemsDistritos:any;
  itemsTipoDocumentos:any;
  itemsTipoTelefonos:any;
  itemsRedSocial:any;

  constructor( private modalService: NgbModal
    ,private arquitrackingService: arquitrackingService
  ) {

  }

  ngOnInit(): void {
    this.departamentossel();
    this.tipodedocumentosel();
    this.tipotelefono();
    this.tiporedsocial();
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

  departamentossel(){
    let dataPost = {
      p_ude_id : 0
    };

    this.arquitrackingService.departamentossel(dataPost).subscribe({
      next: (response: any) => {
        this.itemsDepartamentos = response.data;
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  provinciasel(e: any) {
    let iddep:number;
    iddep = e.target.value;

    let dataPost ={
      p_upr_id : 0,
      p_ude_id : iddep
    };
    this.arquitrackingService.provinciasel(dataPost).subscribe({
      next: (response: any) => {
        this.itemsProvincias = response.data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  distritosel(e:any){
    let idpro: number;
    idpro = e.target.value;

    let dataPost = {
      p_udi_id : 0,
      p_upr_id : Number(idpro)
    };

    this.arquitrackingService.distritosel(dataPost).subscribe({
      next: (response: any) => {
        console.log(response);
        this.itemsDistritos = response.data;
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }
<<<<<<< HEAD
=======

>>>>>>> eebe490fc46a10c9232981bec9d02b4fba84b6f9

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
