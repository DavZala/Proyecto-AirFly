import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPaquetesComponent } from './g-paquetes.component';

describe('GPaquetesComponent', () => {
  let component: GPaquetesComponent;
  let fixture: ComponentFixture<GPaquetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GPaquetesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
