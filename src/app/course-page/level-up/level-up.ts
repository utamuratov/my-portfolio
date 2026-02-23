import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import CoursePage from '../course-page.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, startWith } from 'rxjs';
import { LevelUpMockData } from './_mock.data';

@Component({
  selector: 'app-level-up',
  imports: [CoursePage],
  template: `
    <app-course-page [data]="data" [videoLessons]="videoLessons()" />
  `,
  styleUrl: './level-up.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LevelUp {
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

  private readonly API_KEY = 'AIzaSyC4kUsa1qawznfe35iFUMSx4HIg6RpMduw';
  constructor(private http: HttpClient) {
    this.http
      .get<any>(`https://www.googleapis.com/youtube/v3/playlistItems`, {
        params: {
          part: 'snippet',
          playlistId: 'PLDeZJa125eSZlqoPU87dmTZUpexZGFlHs',
          maxResults: '10',
          key: this.API_KEY,
        },
      })
      .pipe(
        startWith(LevelUpMockData),
        catchError(() => of(LevelUpMockData)),
        map((response) => {
          const videos = (response.items || []).map((item: any) => ({
            videoId: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            publishedAt: item.snippet.publishedAt,
          }));

          return videos;
        }),
      )
      .subscribe((videos) => {
        this.videoLessons.set(videos);
      });
  }
}
