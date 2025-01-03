import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Componente principal de la aplicación
import { HeaderComponent } from './components/header/header.component';  // Asegúrate de que este componente exista
import { SidebarComponent } from './components/sidebar/sidebar.component';  // Asegúrate de que este componente exista
import { FooterComponent } from './components/footer/footer.component';  // Asegúrate de que este componente exista
import { RouterModule } from '@angular/router';  // Importa RouterModule para enrutamiento
import { appRoutes } from './app.routes';  // Importa las rutas definidas en app.routes.ts
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MenuComponent,
    NavbarComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
