import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [],
  templateUrl: './perfiles.component.html',
  styleUrl: './perfiles.component.css'
})
export class PerfilesComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
