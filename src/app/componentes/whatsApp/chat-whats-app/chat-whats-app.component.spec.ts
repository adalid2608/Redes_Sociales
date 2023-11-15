import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWhatsAppComponent } from './chat-whats-app.component';

describe('ChatWhatsAppComponent', () => {
  let component: ChatWhatsAppComponent;
  let fixture: ComponentFixture<ChatWhatsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChatWhatsAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWhatsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
