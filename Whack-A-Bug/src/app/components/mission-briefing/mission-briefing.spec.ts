import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionBriefing } from './mission-briefing';

describe('MissionBriefing', () => {
  let component: MissionBriefing;
  let fixture: ComponentFixture<MissionBriefing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionBriefing],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionBriefing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
