import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVersion1Component } from './detail-version1.component';

describe('DetailVersion1Component', () => {
  let component: DetailVersion1Component;
  let fixture: ComponentFixture<DetailVersion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailVersion1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailVersion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
