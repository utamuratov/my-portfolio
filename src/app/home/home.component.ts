import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { ExperienceWithComponent } from './experience-with/experience-with.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { VideosComponent } from './videos/videos.component';
import { CoursesComponent } from './courses/courses.component';

@Component({
  standalone: true,
  imports: [
    MainComponent,
    ExperienceWithComponent,
    ProjectsComponent,
    ExperienceComponent,
    CertificatesComponent,
    VideosComponent,
    CoursesComponent,
  ],
  template: `
    <app-main></app-main>
    <app-certificates></app-certificates>
    <app-experience-with></app-experience-with>
    <app-courses></app-courses>
    <app-projects></app-projects>
    <app-videos></app-videos>
    <app-experience></app-experience>
  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
