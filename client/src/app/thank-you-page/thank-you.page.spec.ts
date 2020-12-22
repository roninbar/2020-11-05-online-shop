import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouPage } from './thank-you.page';

describe('ThankYouPage', () => {
  let component: ThankYouPage;
  let fixture: ComponentFixture<ThankYouPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
