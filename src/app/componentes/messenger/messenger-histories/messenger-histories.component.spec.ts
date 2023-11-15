import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerHistoriesComponent } from './messenger-histories.component';

describe('MessengerHistoriesComponent', () => {
  let component: MessengerHistoriesComponent;
  let fixture: ComponentFixture<MessengerHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MessengerHistoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessengerHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
