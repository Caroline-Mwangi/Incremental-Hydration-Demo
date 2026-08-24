import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from './components/site-header/site-header';
import { MissionBriefing } from './components/mission-briefing/mission-briefing';
import { ScrollGap } from './components/scroll-gap/scroll-gap';
import { ArcadeConsole } from './components/arcade-console/arcade-console';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, MissionBriefing, ScrollGap, ArcadeConsole],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Whack-A-Bug');
}
