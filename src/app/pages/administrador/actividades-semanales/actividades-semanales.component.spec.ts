import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesSemanalesComponent } from './actividades-semanales.component';

describe('ActividadesSemanalesComponent', () => {
  let component: ActividadesSemanalesComponent;
  let fixture: ComponentFixture<ActividadesSemanalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesSemanalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesSemanalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
