import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneladminComponent } from './paneladmin.component';

describe('PaneladminComponent', () => {
  let component: PaneladminComponent;
  let fixture: ComponentFixture<PaneladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaneladminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaneladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
