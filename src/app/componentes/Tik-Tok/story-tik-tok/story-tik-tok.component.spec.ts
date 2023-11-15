import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTikTokComponent } from './story-tik-tok.component';

describe('StoryTikTokComponent', () => {
  let component: StoryTikTokComponent;
  let fixture: ComponentFixture<StoryTikTokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StoryTikTokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryTikTokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
