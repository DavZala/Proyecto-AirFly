import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarranavegacionComponent } from './barranavegacion.component';

describe('BarranavegacionComponent', () => {
  let component: BarranavegacionComponent;
  let fixture: ComponentFixture<BarranavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarranavegacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarranavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
