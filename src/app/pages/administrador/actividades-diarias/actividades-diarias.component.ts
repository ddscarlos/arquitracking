import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-actividades-diarias',
  standalone: true,
  imports: [],
  templateUrl: './actividades-diarias.component.html',
  styleUrl: './actividades-diarias.component.css'
})
export class ActividadesDiariasComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
