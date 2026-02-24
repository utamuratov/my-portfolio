import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { VideoModal } from '../home/videos/video-modal/video-modal';
import { Playlist } from '../shared/models/youtube.model';
import { Youtube } from '../shared/youtube';
import { allVideoMockData } from '../shared/data/_all-video-mock-data';
import { Constants } from '../../core/constants';

@Component({
  selector: 'app-all-videos',
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
  private $youtube = inject(Youtube);

  playlists$: Observable<Playlist[]> = EMPTY;
  isModalOpen = signal(false);
  selectedVideoId = signal('');

  ngOnInit(): void {
    this.loadPlaylists();
  }

  private loadPlaylists() {
    this.playlists$ = this.$youtube.getVideosByChannelId(
      Constants.CHANNEL_ID,
      allVideoMockData,
    );
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
