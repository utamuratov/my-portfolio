import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  template: `
    <div id="projects" class="container">
      <h2 class="linier-title text-center pt-6">Projects</h2>
      <div class="cards mt-2">
        <a class="card" href="https://youtu.be/KVrJOHlcPe4" target="_blank">
          <div class="card__body">
            <img src="./assets/images/formlingo-promo.jpg" alt="" />
          </div>
          <div class="card__footer">
            <span>CLICK HERE TO VISIT</span>
            <h3>FormLingo</h3>
          </div>
        </a>
        <a class="card" href="https://map.utamuratov.uz/" target="_blank">
          <div class="card__body">
            <img src="./assets/images/ngx-uzbekistan-map.png" />
          </div>
          <div class="card__footer">
            <span>CLICK HERE TO VISIT</span>
            <h3>Uzbekistan map</h3>
          </div>
        </a>
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
      </div>
    </div>
  `,
  styleUrl: './projects.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {}
