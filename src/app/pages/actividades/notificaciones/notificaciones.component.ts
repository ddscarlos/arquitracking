import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.css'
})
export class NotificacionesComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
