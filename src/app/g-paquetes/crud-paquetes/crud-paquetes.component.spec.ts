import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPaquetesComponent } from './crud-paquetes.component';

describe('CrudPaquetesComponent', () => {
  let component: CrudPaquetesComponent;
  let fixture: ComponentFixture<CrudPaquetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudPaquetesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
