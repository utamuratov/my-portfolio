import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  template: ` <div id="certificates" class="container">
    <h2 class="linier-title text-center pt-6">Certificates</h2>
    <div class="certificates">
      @for (certificate of certificates; track $index) {

      <a class="card" [href]="certificate.url" target="_blank">
        <div class="card__body">
          <img [src]="certificate.image" alt="" />
        </div>
        <div class="card__footer--absolute">
          <span>CLICK HERE TO SEE</span>
          <h3>{{ certificate.title }}</h3>
        </div>
      </a>
      }
    </div>
  </div>`,
  styleUrl: './certificates.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent {
  certificates = [
    {
      url: 'https://interstate21.com/certificate/?code=2F16ACS',
      title: '🤓 Level 1',
      image: './assets/images/certificates/level-1.png',
    },
    {
      url: 'https://interstate21.com/certificate/?code=4I072TB',
      title: '😎 Level 2',
      image: './assets/images/certificates/level-2.png',
    },
    {
      url: 'https://interstate21.com/certificate/?code=4K0275T',
      title: '🥸 Level 3',
      image: './assets/images/certificates/level-3.png',
    },
  ];
}
