import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { ExperienceWithComponent } from './experience-with/experience-with.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { VideosComponent } from './videos/videos.component';

@Component({
  standalone: true,
  imports: [
    MainComponent,
    ExperienceWithComponent,
    ProjectsComponent,
    ExperienceComponent,
    CertificatesComponent,
    VideosComponent,
  ],
  template: `
    <app-main></app-main>
    <app-certificates></app-certificates>
    <app-experience-with></app-experience-with>
    <app-videos></app-videos>
    <app-projects></app-projects>
    <app-experience></app-experience>
  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
