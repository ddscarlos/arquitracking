import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { arquitrackingService } from '../../../services/arquitracking.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent implements OnInit {
  form!: FormGroup;
  icono:string='lnr-picture';
  coloricono:string='text-primary';
  titulo:string='Consulta Empresa';
  descripcion:string='Registro inicial de las empresas a contactar';

  constructor(private appComponent: AppComponent 
    , private modalService: NgbModal
    , private arquitrackingService: arquitrackingService
    , private router: Router
    , private fb: FormBuilder
  
  ) {
    this.appComponent.login = false;
  }
  ngOnInit(): void {
    this.setForm();

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
  setForm() {
    this.form = this.fb.group({
      p_tdi_numero: ['', [Validators.required]],  // RUC
      p_per_nombre: ['', [Validators.required]],  // Razón Social
    });
  }


  // Empresa 
  p_tdi_id    : number = 2;
  p_tdi_numero: number = 0;
  p_per_apepat: string = '';
  p_per_apemat: string = '';
  p_per_nombre: string = '';
  p_pai_id    : number = 179;
  p_tpe_id    : number = 2;

  guardarEmpresa() {
    let dataPost = {
      p_tdi_id    : this.p_tdi_id,
      p_tdi_numero: this.p_tdi_numero,
      p_per_apepat: this.p_per_apepat,
      p_per_apemat: this.p_per_apemat,
      p_per_nombre: this.p_per_nombre,
      p_pai_id    : this.p_pai_id,
      p_tpe_id    : this.p_tpe_id
    };


      Swal.fire({
        title: '<b>Confirmación</b>',
        text: "¿Estás seguro de guardar la información?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.arquitrackingService.guardarEmpresa(dataPost).subscribe({
            next: (data: any) => {
              let result = data[0];
              if (result.hasOwnProperty('error')) {
                if (result.error === 0) {
                  Swal.fire({ title: '<h2>Confirmación</h2>', text: result.mensa, icon: 'success', confirmButtonText: 'Cerrar', confirmButtonColor: "#3085d6" }).then((result) => {
                    if (result.isConfirmed) {
                      this.router.navigate(['empresa/consulta-empresa']);
                    }
                  });
                } else {
                  Swal.fire(result.mensa, 'Verifique los datos', 'error');
                }
              } else {
                Swal.fire('Ocurrió un error', 'Vuelva a intentarlo', 'error');
              }
            },
            error: (error: any) => {
              console.error(error);
            }
          });
        }
      });
    }
}


