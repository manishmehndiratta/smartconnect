import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminroleComponent } from './adminrole.component';

describe('AdminroleComponent', () => {
  let component: AdminroleComponent;
  let fixture: ComponentFixture<AdminroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
