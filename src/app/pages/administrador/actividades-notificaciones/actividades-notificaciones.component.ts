import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-actividades-notificaciones',
  standalone: true,
  imports: [],
  templateUrl: './actividades-notificaciones.component.html',
  styleUrl: './actividades-notificaciones.component.css'
})
export class ActividadesNotificacionesComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
