import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Card } from '../shared/models/card.model';
import { VideoModal } from './video-modal/video-modal';
import { Router } from '@angular/router';
import { SectionWrapper } from '../shared/components/section-wrapper/section-wrapper';
import { CardHoverableComponent } from '../shared/components/card-hoverable/card-hoverable.component';
import { Youtube } from '../../shared/youtube';
import { mockVideos10 } from '../../shared/data/videos-10';
import { Constants } from '../../../core/constants';

@Component({
  selector: 'app-videos',
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
  private $youtube = inject(Youtube);
  private router = inject(Router);

  videos$: Observable<(Card & { videoId: string })[]> = EMPTY;
  isModalOpen = signal(false);
  selectedVideoId = signal('');

  ngOnInit(): void {
    this.getVideos();
  }

  private getVideos() {
    this.videos$ = this.$youtube.getVideos10(
      Constants.CHANNEL_ID,
      mockVideos10,
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
