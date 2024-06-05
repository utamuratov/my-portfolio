import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { EMPTY, Observable, map } from 'rxjs';
import { SectionComponent } from '../shared/components/section/section.component';
import { Card } from '../shared/models/card.model';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, SectionComponent],
  template: `
    @if(videos$ | async; as videos) {
    <app-section id="videos" [data]="videos" title="Videos"></app-section>
    }
  `,
  styleUrl: './videos.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideosComponent implements OnInit {
  private http = inject(HttpClient);

  videos$: Observable<Card[]> = EMPTY;

  ngOnInit(): void {
    this.getVideos();
  }

  private getVideos() {
    this.videos$ = this.http
      .get<any>(
        'https://www.googleapis.com/youtube/v3/search?key=AIzaSyC4kUsa1qawznfe35iFUMSx4HIg6RpMduw&part=snippet&channelId=UCDWugfW9rGMFq5Pq6HuMNFw&order=date&maxResults=10'
      )
      .pipe(
        map((response) =>
          (response?.items || []).slice(0, 6).map(
            (item: any) =>
              ({
                image: item.snippet.thumbnails.high.url,
                title: item.snippet.title,
                url: 'https://youtube.com/watch?v=' + item.id.videoId,
              } as Card)
          )
        )
      );
  }
}
