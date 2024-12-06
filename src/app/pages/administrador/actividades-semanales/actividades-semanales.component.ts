import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-actividades-semanales',
  standalone: true,
  imports: [],
  templateUrl: './actividades-semanales.component.html',
  styleUrl: './actividades-semanales.component.css'
})
export class ActividadesSemanalesComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
