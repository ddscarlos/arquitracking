import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesNotificacionesComponent } from './actividades-notificaciones.component';

describe('ActividadesNotificacionesComponent', () => {
  let component: ActividadesNotificacionesComponent;
  let fixture: ComponentFixture<ActividadesNotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesNotificacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
