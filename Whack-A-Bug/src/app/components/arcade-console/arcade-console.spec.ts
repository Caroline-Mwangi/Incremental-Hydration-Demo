import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeConsole } from './arcade-console';

describe('ArcadeConsole', () => {
  let component: ArcadeConsole;
  let fixture: ComponentFixture<ArcadeConsole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcadeConsole],
    }).compileComponents();

    fixture = TestBed.createComponent(ArcadeConsole);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
