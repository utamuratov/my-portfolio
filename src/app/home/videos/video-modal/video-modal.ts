import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-video-modal',
    imports: [],
    template: `
    @if (isOpen) {
      <div class="modal-overlay" (click)="closeModal()">
        <button class="close-btn" (click)="closeModal()">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-content" (click)="$event.stopPropagation()">
          <div class="video-wrapper">
            <iframe
              [src]="videoUrl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </div>
    }
  `,
    styleUrl: './video-modal.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoModal {
  @Input() isOpen = false;
  @Input() videoId: string = '';
  @Output() closed = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  get videoUrl(): SafeResourceUrl {
    if (!this.videoId) return '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId}?autoplay=1`,
    );
  }

  closeModal() {
    this.closed.emit();
  }
}
