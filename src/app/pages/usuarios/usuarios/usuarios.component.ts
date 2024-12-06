import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
