import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GUsersComponent } from './g-users.component';

describe('GUsersComponent', () => {
  let component: GUsersComponent;
  let fixture: ComponentFixture<GUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
