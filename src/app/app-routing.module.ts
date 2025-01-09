import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing necessary components and guards
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MantenimientoComponent } from './pages/empresa/mantenimiento/mantenimiento.component';
import { RegistrarIncompletosComponent } from './pages/seguimiento/registrar-incompletos/registrar-incompletos.component';
import { RegistroComponent as SeguimientoRegistroComponent } from './pages/seguimiento/registro/registro.component';
import { ActividadesDiariasComponent } from './pages/administrador/actividades-diarias/actividades-diarias.component';
import { ActividadesMensualesComponent } from './pages/administrador/actividades-mensuales/actividades-mensuales.component';
import { ActividadesNotificacionesComponent } from './pages/administrador/actividades-notificaciones/actividades-notificaciones.component';
import { ActividadesSemanalesComponent } from './pages/administrador/actividades-semanales/actividades-semanales.component';
import { PanelComponent } from './pages/administrador/panel/panel.component';
import { InicioComponent } from './pages/proceso/inicio/inicio.component';
import { EstadosComponent } from './pages/proceso/estados/estados.component';
import { ActividadesComponent } from './pages/actividades/actividades/actividades.component';
import { NotificacionesComponent } from './pages/actividades/notificaciones/notificaciones.component';
import { HistorialComponent } from './pages/historial/historial/historial.component';
import { CalendarioComponent } from './pages/calendario/calendario/calendario.component';
import { PerfilesComponent } from './pages/usuarios/perfiles/perfiles.component';
import { AccesosComponent } from './pages/usuarios/accesos/accesos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios/usuarios.component';
import { GeneralComponent } from './pages/mantenimiento/general/general.component';
import ConsultaComponent from './pages/empresa/consulta/consulta.component';

const routes: Routes = [
  // Default route to login
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Login route
  { path: 'login', component: LoginComponent },

  // Dashboard route with nested child routes
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivate: [AuthGuard], // Protect the dashboard route with AuthGuard
    children: [
      // EMPRESA
      { path: 'empresa/consulta-empresa', component: ConsultaComponent },
      { path: 'empresa/mantenimiento', component: MantenimientoComponent },

      // SEGUIMIENTO
      { path: 'seguimiento/registrar-datos', component: SeguimientoRegistroComponent },
      { path: 'seguimiento/registro-incompleto', component: RegistrarIncompletosComponent },

      // ADMINISTRADOR
      { path: 'administrador/panel', component: PanelComponent },
      { path: 'administrador/actividades-diarias', component: ActividadesDiariasComponent },
      { path: 'administrador/actividades-semanales', component: ActividadesSemanalesComponent },
      { path: 'administrador/actividades-mensuales', component: ActividadesMensualesComponent },
      { path: 'administrador/notificaciones', component: ActividadesNotificacionesComponent },

      // PROCESO DE CONTACTO
      { path: 'proceso/inicio', component: InicioComponent },
      { path: 'proceso/estados', component: EstadosComponent },

      // ACTIVIDADES
      { path: 'actividades/actividades', component: ActividadesComponent },
      { path: 'actividades/notificaciones', component: NotificacionesComponent },

      // HISTORIAL
      { path: 'historial/historial', component: HistorialComponent },

      // CALENDARIO
      { path: 'calendario/eventos', component: CalendarioComponent },

      // USUARIOS
      { path: 'usuarios/perfiles', component: PerfilesComponent },
      { path: 'usuarios/accesos', component: AccesosComponent },
      { path: 'usuarios/usuarios', component: UsuariosComponent },

      // MANTENIMIENTO GENERAL
      { path: 'mantenimiento/general', component: GeneralComponent }
    ]
  },

  // Wildcard route for handling undefined paths
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use 'forRoot' for the main routing module
  exports: [RouterModule]
})
export class AppRoutingModule {}
