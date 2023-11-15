import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerBottomBarComponent } from './messenger-bottom-bar.component';

describe('MessengerBottomBarComponent', () => {
  let component: MessengerBottomBarComponent;
  let fixture: ComponentFixture<MessengerBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MessengerBottomBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessengerBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
