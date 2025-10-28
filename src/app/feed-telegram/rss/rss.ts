import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-rss',
  standalone: true,
  imports: [],
  template: `
    <div id="rssapp-container">
      <rssapp-wall id="kTIyTb7hiwpqJapK"></rssapp-wall>
    </div>
  `,
  styleUrl: './rss.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Rss implements AfterViewInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.src = 'https://widget.rss.app/v1/wall.js';
      script.async = true;
      this.el.nativeElement.appendChild(script);
    }
  }
}
