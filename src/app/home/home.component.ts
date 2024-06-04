import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ExperienceWithComponent } from './experience-with/experience-with.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificatesComponent } from './certificates/certificates.component';

@Component({
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ExperienceWithComponent,
    ProjectsComponent,
    ExperienceComponent,
    CertificatesComponent,
  ],
  template: `
    <app-header></app-header>
    <app-main></app-main>
    <app-certificates></app-certificates>
    <app-experience-with></app-experience-with>
    <app-projects></app-projects>
    <app-experience></app-experience>
    <app-footer></app-footer>
  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
