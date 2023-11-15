import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTikTokComponent } from './chat-tik-tok.component';

describe('ChatTikTokComponent', () => {
  let component: ChatTikTokComponent;
  let fixture: ComponentFixture<ChatTikTokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChatTikTokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatTikTokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
