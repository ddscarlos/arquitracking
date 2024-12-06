import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-actividades-mensuales',
  standalone: true,
  imports: [],
  templateUrl: './actividades-mensuales.component.html',
  styleUrl: './actividades-mensuales.component.css'
})
export class ActividadesMensualesComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
