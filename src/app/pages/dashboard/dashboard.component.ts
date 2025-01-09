import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],  // Corregido styleUrl -> styleUrls
 // Agrega RouterModule a los imports
})
export class DashboardComponent {
  constructor(private appComponent: AppComponent) {
    // Lógica del componente
  }
}
