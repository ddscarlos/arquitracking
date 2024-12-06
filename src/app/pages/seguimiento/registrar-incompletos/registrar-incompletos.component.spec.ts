import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarIncompletosComponent } from './registrar-incompletos.component';

describe('RegistrarIncompletosComponent', () => {
  let component: RegistrarIncompletosComponent;
  let fixture: ComponentFixture<RegistrarIncompletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarIncompletosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarIncompletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
