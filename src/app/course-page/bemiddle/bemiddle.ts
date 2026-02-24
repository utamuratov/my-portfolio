import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import CoursePage from '../course-page.component';
import { Youtube } from '../../shared/youtube';
import { mockSamaraliKirish } from '../../shared/data/samarali-kirish';
import { mockBemiddle } from '../../shared/data/_mock-bemiddle';

@Component({
  selector: 'app-bemiddle',
  imports: [CoursePage],
  template: `
    <app-course-page [data]="data" [videoLessons]="videoLessons()" />
  `,
  styleUrl: './bemiddle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Bemiddle {
  data = {
    youTubeVideoId: '0QtKxtETAMU',
    cover: '../../../../assets/images/courses/bemiddle.png',
    title: 'BeMiddle | Angular',
    topics: [
      'Algoritmlash: Grokking Algorithms',
      'Best practices',
      'DI Advanced',
      'Eski vs Yangi Angular',
      'Loyiha qurish',
      'OOP',
      'Custom Decorators',
      'RxJS',
      'Wrappers',
      'Ngx-formly',
    ],
  };
  videoLessons = signal<any[]>([]);

  private $youtube = inject(Youtube);

  ngOnInit(): void {
    this.$youtube
      .getVideosByPlaylist('PLDeZJa125eSaSFs4ut6_V12WSHymyOan0', mockBemiddle)
      .subscribe((videos) => {
        this.videoLessons.set(videos);
      });
  }
}
