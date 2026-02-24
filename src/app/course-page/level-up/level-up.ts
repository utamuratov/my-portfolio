import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import CoursePage from '../course-page.component';
import { LevelUpMockData } from '../../shared/data/_mock.data';
import { Youtube } from '../../shared/youtube';

@Component({
  selector: 'app-level-up',
  imports: [CoursePage],
  template: `
    <app-course-page [data]="data" [videoLessons]="videoLessons()" />
  `,
  styleUrl: './level-up.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LevelUp implements OnInit {
  data = {
    youTubeVideoId: 'CntDRS99seE',
    cover: '../../../../assets/images/courses/levelUP.jpg',
    title: 'Level UP | Angular',
    code: 'levelUP',
    topics: [
      'Debounce Input',
      'Bundle size ni analiz qilish',
      'Masalani qanday yechish kerak',
      "Kirish. DI o'zi nima",
      "Injection token. Amaliyotda o'rni",
      "useValue, useFactory. Amaliyotda o'rni",
      "useClass, useExisting. Amaliyotda o'rni",
      'Refactoring. Dead code',
      'Refactoring. Lazy loading vs Pre loading',
      'Refactoring. Widget module va Yagona UI',
      'Refactoring. Third-party lib, UpToDate, Umumiy xulosalar',
      'Multiple projects',
      "Kutubxona va uni NPM'ga joylash",
    ],
  };
  videoLessons = signal<any[]>([]);

  private $youtube = inject(Youtube);

  ngOnInit(): void {
    this.$youtube
      .getVideosByPlaylist(
        'PLDeZJa125eSZlqoPU87dmTZUpexZGFlHs',
        LevelUpMockData,
      )
      .subscribe((videos) => {
        this.videoLessons.set(videos);
      });
  }
}
