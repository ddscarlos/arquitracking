import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-general',
  standalone: true,
  imports: [],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.login = false;
  }
}
