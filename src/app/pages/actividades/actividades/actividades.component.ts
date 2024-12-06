import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
