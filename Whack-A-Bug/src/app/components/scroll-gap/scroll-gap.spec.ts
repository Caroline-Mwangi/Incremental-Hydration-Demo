import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollGap } from './scroll-gap';

describe('ScrollGap', () => {
  let component: ScrollGap;
  let fixture: ComponentFixture<ScrollGap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollGap],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollGap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
