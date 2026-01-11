import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { EMPTY, Observable, catchError, map, of } from 'rxjs';
import { SectionComponent } from '../shared/components/section/section.component';
import { Card } from '../shared/models/card.model';
import { VideoModal } from './video-modal/video-modal';
import { Router } from '@angular/router';
import { SectionWrapper } from '../shared/components/section-wrapper/section-wrapper';
import { CardHoverableComponent } from '../shared/components/card-hoverable/card-hoverable.component';
import { mockVideos } from './data/mock-videos';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [AsyncPipe, SectionWrapper, VideoModal, CardHoverableComponent],
  template: `
    @if (videos$ | async; as videos) {
      <app-section-wrapper id="videos" title="Videos">
        @for (video of videos; track video.url) {
          <app-card-hoverable
            [data]="video"
            [clickable]="true"
            (clicked)="openVideo(video)"
          ></app-card-hoverable>
        }
      </app-section-wrapper>
      <div class="container text-center mt-2">
        <button class="btn" (click)="navigateToAllVideos()">
          Barcha videolar
        </button>
      </div>
    }

    <app-video-modal
      [isOpen]="isModalOpen()"
      [videoId]="selectedVideoId()"
      (closed)="closeModal()"
    >
    </app-video-modal>
  `,
  styleUrl: './videos.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideosComponent implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);

  videos$: Observable<(Card & { videoId: string })[]> = EMPTY;
  isModalOpen = signal(false);
  selectedVideoId = signal('');

  ngOnInit(): void {
    this.getVideos();
  }

  private getVideos() {
    this.videos$ = this.http
      .get<any>(
        'https://www.googleapis.com/youtube/v3/search?key=AIzaSyC4kUsa1qawznfe35iFUMSx4HIg6RpMduw&part=snippet&channelId=UCDWugfW9rGMFq5Pq6HuMNFw&order=date&maxResults=10',
      )
      .pipe(
        catchError(() => of(mockVideos)),
        map((response) =>
          (response?.items || [])
            .filter(
              (w: any) =>
                w.id.videoId &&
                !['VW7xfDoM3C8', 'CntDRS99seE'].includes(w.id.videoId),
            )
            .slice(0, 6)
            .map(
              (item: any) =>
                ({
                  image: item.snippet.thumbnails.high.url,
                  title: item.snippet.title,
                  url: 'https://youtube.com/watch?v=' + item.id.videoId,
                  videoId: item.id.videoId,
                }) as Card & { videoId: string },
            ),
        ),
      );
  }

  openVideo(video: Card & { videoId: string }) {
    this.selectedVideoId.set(video.videoId);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.selectedVideoId.set('');
  }

  navigateToAllVideos() {
    this.router.navigate(['/videos']);
  }
}
