import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TikTokComponent } from './tik-tok.component';

describe('TikTokComponent', () => {
  let component: TikTokComponent;
  let fixture: ComponentFixture<TikTokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TikTokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TikTokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
