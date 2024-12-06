import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-estados',
  standalone: true,
  imports: [],
  templateUrl: './estados.component.html',
  styleUrl: './estados.component.css'
})
export class EstadosComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
