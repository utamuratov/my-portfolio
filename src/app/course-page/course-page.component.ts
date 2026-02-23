import { ActivatedRoute } from '@angular/router';
import { CoursesComponent } from '../home/courses/courses.component';
import { Component, input, signal } from '@angular/core';
import { YoutubeEmbedPipe } from '../home/videos/video-modal/youtube-embed-pipe';
import { SanitizerPipe } from '../home/videos/video-modal/sanitizer-pipe';
import { VideoModal } from '../home/videos/video-modal/video-modal';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [YoutubeEmbedPipe, SanitizerPipe, VideoModal, DatePipe],
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.less',
})
export default class CoursePage {
  data = input.required<{
    cover: string;
    topics: string[];
    youTubeVideoId: string;
  }>();
  videoLessons = input<
    {
      videoId: string;
      title: string;
      publishedAt: Date;
      thumbnail: string;
    }[]
  >();

  isModalOpen = signal(false);
  selectedVideoId = signal('');

  openVideo(videoId: string) {
    this.selectedVideoId.set(videoId);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.selectedVideoId.set('');
  }
}
