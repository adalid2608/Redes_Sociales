import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerHeaderComponent } from './messenger-header.component';

describe('MessengerHeaderComponent', () => {
  let component: MessengerHeaderComponent;
  let fixture: ComponentFixture<MessengerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MessengerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessengerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
