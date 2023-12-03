import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ExperienceWithComponent } from './experience-with/experience-with.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ExperienceWithComponent,
    ProjectsComponent,
    ExperienceComponent,
  ],
  template: `
    <app-header></app-header>
    <app-main></app-main>
    <app-experience-with></app-experience-with>
    <app-projects></app-projects>
    <app-experience></app-experience>
    <app-footer></app-footer>
  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
