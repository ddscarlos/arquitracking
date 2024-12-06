import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-mantenimiento',
  standalone: true,
  imports: [],
  templateUrl: './mantenimiento.component.html',
  styleUrl: './mantenimiento.component.css'
})
export class MantenimientoComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
