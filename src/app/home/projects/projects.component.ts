import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <div id="projects" class="container">
      <h2 class="linier-title text-center pt-6">Projects</h2>
      <div class="cards mt-2">
        <a class="card" href="https://t.me/hbirthday2you_bot" target="_blank">
          <div class="card__body">
            <img src="./assets/images/hbirthday.jpg" />
          </div>
          <div class="card__footer">
            <span>CLICK HERE TO VISIT</span>
            <h3>Happy birthday</h3>
          </div>
        </a>
        <a
          class="card"
          href="https://chromewebstore.google.com/detail/cyrillic-latin/ahbglcedcldidmgbgnlpknpkbgjnkfoa"
          target="_blank"
        >
          <div class="card__body">
            <img src="./assets/images/latin-cyrillic.png" alt="" />
          </div>
          <div class="card__footer">
            <span>CLICK HERE TO VISIT</span>
            <h3>Cyrillic-Latin</h3>
          </div>
        </a>
        <a class="card" href="https://uzimizniki.agrozamin.uz/" target="_blank">
          <div class="card__body">
            <img src="./assets/images/uzimizniki.jpg" alt="" />
          </div>
          <div class="card__footer">
            <span>CLICK HERE TO VISIT</span>
            <h3>O'zimizniki</h3>
          </div>
        </a>
      </div>
    </div>
  `,
  styleUrl: './projects.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {}
