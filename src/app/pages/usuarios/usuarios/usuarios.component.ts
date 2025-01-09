import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

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
