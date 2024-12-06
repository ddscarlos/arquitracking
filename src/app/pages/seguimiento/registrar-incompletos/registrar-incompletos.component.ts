import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-registrar-incompletos',
  standalone: true,
  imports: [],
  templateUrl: './registrar-incompletos.component.html',
  styleUrl: './registrar-incompletos.component.css'
})
export class RegistrarIncompletosComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
