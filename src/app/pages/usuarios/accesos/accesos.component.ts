import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-accesos',
  standalone: true,
  imports: [],
  templateUrl: './accesos.component.html',
  styleUrl: './accesos.component.css'
})
export class AccesosComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
