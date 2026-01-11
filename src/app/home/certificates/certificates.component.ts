import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from '../shared/components/section/section.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [SectionComponent],
  template: `<app-section
    id="certificates"
    [data]="certificates"
    title="Certificates"
  ></app-section>`,
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
