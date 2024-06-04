import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  template: `
    <div
      id="home"
      class="container d-flex flex-column align-items-center justify-content-space-around"
      style="height: calc(100dvh - 80px);"
    >
      <img src="./assets/images/avatar.png" style="width: 200px;" alt="" />
      <div>
        <h1 class="text-center">It's <span class="linier-color"></span></h1>
        <p class="text-center" style="font-size: 1.3rem;">
          I am a seasoned frontend engineer with over 6 years of professional
          experience. And I possess a foundational understanding of backend
          development.
        </p>
      </div>
      <div>
        <a class="btn" href="https://t.me/utamuratovs" target="_blank"
          >Get in touch</a
        >
        <a
          class="btn btn-secondary ml-1"
          href="./assets/docs/Odilbek Utamuratov's CV.pdf"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  `,
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
