import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { EMPTY, Observable, catchError, map, of, startWith } from 'rxjs';
import { VideoModal } from '../home/videos/video-modal/video-modal';
import { videoMockData } from './_video-mock-data';

interface VideoItem {
  videoId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

interface Playlist {
  id: string;
  title: string;
  videos: VideoItem[];
}

@Component({
  selector: 'app-all-videos',
  standalone: true,
  imports: [AsyncPipe, VideoModal],
  template: `
    <div class="container">
      <h2 class="linier-title pt-6">Videolar</h2>

      @if (playlists$ | async; as playlists) {
        @for (playlist of playlists; track playlist.id) {
          <div class="playlist-section">
            <h2>{{ playlist.title }}</h2>
            <div class="videos-grid">
              @for (video of playlist.videos; track video.videoId) {
                <div class="video-card" (click)="openVideo(video.videoId)">
                  <div class="thumbnail-wrapper">
                    <img [src]="video.thumbnail" [alt]="video.title" />
                    <div class="play-bg">
                      <div class="play-overlay">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="video-info">
                    <h3>{{ video.title }}</h3>
                    <p class="publish-date">
                      {{ formatDate(video.publishedAt) }}
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>
        }
      }

      <app-video-modal
        [isOpen]="isModalOpen()"
        [videoId]="selectedVideoId()"
        (closed)="closeModal()"
      >
      </app-video-modal>
    </div>
  `,
  styleUrl: './all-videos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AllVideos implements OnInit {
  private http = inject(HttpClient);

  playlists$: Observable<Playlist[]> = EMPTY;
  isModalOpen = signal(false);
  selectedVideoId = signal('');

  private readonly API_KEY = 'AIzaSyC4kUsa1qawznfe35iFUMSx4HIg6RpMduw';
  private readonly CHANNEL_ID = 'UCDWugfW9rGMFq5Pq6HuMNFw';

  ngOnInit(): void {
    this.loadPlaylists();
  }

  private loadPlaylists() {
    // Bu yerda playlistlarni yuklash logikasi
    // Agar playlistlar bo'lmasa, umumiy videolarni ko'rsatamiz
    this.playlists$ = this.http
      .get<any>(
        `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&channelId=${this.CHANNEL_ID}&order=date&maxResults=50&type=video`,
      )
      .pipe(
        startWith(videoMockData),
        catchError(() => of(videoMockData)),
        map((response) => {
          const videos = (response?.items || [])
            .filter(
              (item: any) =>
                item.id.videoId &&
                !['VW7xfDoM3C8', 'CntDRS99seE'].includes(item.id.videoId),
            )
            .map((item: any) => ({
              videoId: item.id.videoId,
              title: item.snippet.title,
              thumbnail: item.snippet.thumbnails.high.url,
              publishedAt: item.snippet.publishedAt,
            }));

          // Videolarni yil bo'yicha guruhlash
          const groupedByYear = this.groupVideosByYear(videos);

          return groupedByYear;
        }),
      );
  }

  private groupVideosByYear(videos: VideoItem[]): Playlist[] {
    const grouped = videos.reduce(
      (acc, video) => {
        const year = new Date(video.publishedAt).getFullYear().toString();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(video);
        return acc;
      },
      {} as Record<string, VideoItem[]>,
    );

    return Object.entries(grouped)
      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      .map(([year, videos]) => ({
        id: year,
        title: `${year} yil videolari`,
        videos: videos,
      }));
  }

  openVideo(videoId: string) {
    this.selectedVideoId.set(videoId);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.selectedVideoId.set('');
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const months = [
      'Yanvar',
      'Fevral',
      'Mart',
      'Aprel',
      'May',
      'Iyun',
      'Iyul',
      'Avgust',
      'Sentabr',
      'Oktabr',
      'Noyabr',
      'Dekabr',
    ];
    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
  }
}
