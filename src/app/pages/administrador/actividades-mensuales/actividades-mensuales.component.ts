import { AfterViewInit, Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  Chart,
  LinearScale,
  BarController,
  BarElement,
  CategoryScale,
  Title,
  Tooltip,
  PieController,
  ArcElement,
  Legend
} from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip);
Chart.register(PieController, ArcElement, Tooltip, Legend);
@Component({
  selector: 'app-actividades-mensuales',
  standalone: true,
  imports: [],
  templateUrl: './actividades-mensuales.component.html',
  styleUrl: './actividades-mensuales.component.css'
})
export class ActividadesMensualesComponent {
    icono:string='lnr-train';
    coloricono:string='text-primary';
    titulo:string='Mantenimiento de Empresa';
    descripcion:string='Sección para poder editar y dar mantenimiento a las empresas registradas.';

    constructor(private appComponent: AppComponent , private modalService: NgbModal) {
      this.appComponent.login = false;
    }

    open(content: any) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size: 'lg', backdrop: 'static'}).result.then(
        (result) => {
          console.log(`Modal cerrado con: ${result}`);
        },
        (reason) => {
          console.log(`Modal cerrado por: ${reason}`);
        }
      );
    }

    ngAfterViewInit() {
      const ctx = document.getElementById('barChart') as HTMLCanvasElement;
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
          datasets: [
            {
              label: 'Ventas',
              data: [10, 20, 30, 40],
              backgroundColor: ['rgba(75, 192, 192, 0.2)'],
              borderColor: ['rgba(75, 192, 192, 1)'],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              type: 'linear',
              beginAtZero: true
            }
          }
        }
      });

      const ctxpie = document.getElementById('pieChart') as HTMLCanvasElement;

      new Chart(ctxpie, {
        type: 'pie',
        data: {
          labels: ['Rojo', 'Azul', 'Amarillo'],
          datasets: [
            {
              label: 'Colores Favoritos',
              data: [30, 50, 20],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top'
            },
            tooltip: {
              enabled: true
            }
          }
        }
      })
  }
}
