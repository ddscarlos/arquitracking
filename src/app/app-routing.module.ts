import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';  // Importa las rutas

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],  // Configura las rutas
  exports: [RouterModule],  // Exporte RouterModule para que esté disponible
})
export class AppRoutingModule {}
