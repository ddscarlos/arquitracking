import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesDiariasComponent } from './actividades-diarias.component';

describe('ActividadesDiariasComponent', () => {
  let component: ActividadesDiariasComponent;
  let fixture: ComponentFixture<ActividadesDiariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesDiariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesDiariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
