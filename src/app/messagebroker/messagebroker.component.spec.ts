import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagebrokerComponent } from './messagebroker.component';

describe('MessagebrokerComponent', () => {
  let component: MessagebrokerComponent;
  let fixture: ComponentFixture<MessagebrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagebrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagebrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
