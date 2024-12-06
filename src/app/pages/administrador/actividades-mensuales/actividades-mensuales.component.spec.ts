import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesMensualesComponent } from './actividades-mensuales.component';

describe('ActividadesMensualesComponent', () => {
  let component: ActividadesMensualesComponent;
  let fixture: ComponentFixture<ActividadesMensualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesMensualesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesMensualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
