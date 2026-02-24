import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import CoursePage from '../course-page.component';
import { Youtube } from '../../shared/youtube';
import { mockSamaraliKirish } from '../../shared/data/samarali-kirish';

@Component({
  selector: 'app-angularga-samarali-kirish',
  imports: [CoursePage],
  template: `
    <app-course-page [data]="data" [videoLessons]="videoLessons()" />
  `,
  styleUrl: './angularga-samarali-kirish.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AngulargaSamaraliKirish {
  data = {
    youTubeVideoId: 'VW7xfDoM3C8',
    cover: '../../../../assets/images/courses/samarali-kirish.jpg',
    title: 'Angularga samarali kirish | 100 soniyada',
    code: 'in100Minutes',
    topics: [
      'Angular nima? Nimaga Angular? Qanday Angular muhitini yaratamiz?',
      'Frontend vs Backend',
      'Angular sxemasi',
      "Biron narsani qanday samarali o'rganish mumkin?",
      'Komponenta nima?',
      'Input/Output',
      '@if va @for',
      'Injectable servicelar',
      'Property binding va Event binding. Interpolation',
      'HttpClient',
      'Routing',
      'Pipes',
      "Xatoliklarni o'qish",
      'VsCode uchun Angular extensionlari',
      'Roadmap',
    ],
  };
  videoLessons = signal<any[]>([]);

  private $youtube = inject(Youtube);

  ngOnInit(): void {
    this.$youtube
      .getVideosByPlaylist(
        'PLDeZJa125eSaHJjjbduDvh5zzmLi9fZHZ',
        mockSamaraliKirish,
      )
      .subscribe((videos) => {
        this.videoLessons.set(videos);
      });
  }
}
