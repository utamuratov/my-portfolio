import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { GetSrcPipe } from './pipes/get-src.pipe';
import { Blog } from './models/blog.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, AsyncPipe, GetSrcPipe],
  template: `
    <div class="container">
      <h2 class="pt-6">Blog posts ✈️</h2>
      <div class="posts pb-3">
        @for (post of posts$ | async; track $index) {
        <a [href]="post.link" target="_blank">
          <div class="post__img">
            <img [src]="post.content | appGetSrc" alt="" />
          </div>
          <p class="mt-1">{{ post.pubDate }}</p>
          <h3>{{ post.title }}</h3>
        </a>
        }
      </div>
    </div>
  `,
  styleUrl: './blog.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit {
  private http = inject(HttpClient);
  posts$!: Observable<Blog[]>;

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.posts$ = this.http
      .get<any>(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@odil.utamuratov'
      )
      .pipe(map((w) => w?.items || []));
  }
}
