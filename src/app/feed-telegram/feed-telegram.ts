import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Rss } from './rss/rss';

@Component({
  selector: 'app-feed-telegram',
  standalone: true,
  imports: [Rss],
  template: `
    <div class="container">
      <h2 class="pt-6">Telegram channel 💬</h2>
      <div class="d-flex gap-1 mb-2">
        <button
          [class.active]="showingType === 'rss'"
          (click)="showingType = 'rss'"
        >
          By Rss
        </button>
        <button
          [class.active]="showingType === 'tgWidget'"
          (click)="showingType = 'tgWidget'"
        >
          By Telegram widget
        </button>
      </div>

      <div style="min-height: 500px;">
        @if (showingType === 'rss') {
          <app-rss />

          @defer {
          } @placeholder (minimum 1000ms) {
            <div class="posts pb-3">
              @for (post of [].constructor(10); track $index) {
                <a>
                  <div class="post__img"></div>
                  <p class="mt-1 skeleton"></p>
                  <h3 class="skeleton" style="width: 50%"></h3>
                </a>
              }
            </div>
          }
        } @else {
          @defer {
            <div>
              <div style="margin: 2rem 0">
                @for (safeUrl of safeUrls; track $index) {
                  <iframe
                    [src]="safeUrl"
                    width="100%"
                    [height]="POST_HEIGHT[$index]"
                    frameborder="0"
                    scrolling="no"
                    style="border:none;overflow:hidden;border-radius:8px;"
                  >
                  </iframe>
                }
              </div>

              <div
                class="container"
                style="text-align: center; margin-bottom: 2rem"
              >
                <a class="btn" href="https://t.me/utamuratovs" target="_blank"
                  >Go to the Telegram channel</a
                >
              </div>
            </div>
          } @placeholder (minimum 1000ms) {
            <div class="posts pb-3">
              @for (post of [].constructor(10); track $index) {
                <a>
                  <div class="post__img"></div>
                  <p class="mt-1 skeleton"></p>
                  <h3 class="skeleton" style="width: 50%"></h3>
                </a>
              }
            </div>
          }
        }
      </div>
    </div>
  `,
  styleUrl: './feed-telegram.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FeedTelegram {
  POST_IDS = [223, 222, 219]; // example post IDs
  POST_HEIGHT = [850, 420, 450]; // example post IDs
  safeUrls: SafeResourceUrl[] = [];

  showingType: 'rss' | 'tgWidget' = 'rss';

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrls = this.POST_IDS.map((id) =>
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://t.me/utamuratovs/${id}?embed=1`,
      ),
    );
  }
}
