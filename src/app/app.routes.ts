import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    title: 'Odilbek Utamuratov - Senior Frontend Engineer',
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./blog/blog.component').then((m) => m.BlogComponent),
    title: 'Blog - Odilbek Utamuratov',
  },
  {
    path: 'problems',
    loadComponent: () => import('./problems/problems.component'),
  },
  {
    path: 'feed-telegram',
    loadComponent: () => import('./feed-telegram/feed-telegram'),
  },
  {
    path: 'angular-in-100-minutes',
    loadComponent: () =>
      import(
        './course-page/angularga-samarali-kirish/angularga-samarali-kirish'
      ),
  },
  {
    path: 'level-up',
    loadComponent: () => import('./course-page/level-up/level-up'),
  },
  {
    path: 'angular-tutorial',
    loadComponent: () => import('./course-page/unlimit/unlimit'),
  },
  {
    path: 'bemiddle',
    loadComponent: () => import('./course-page/bemiddle/bemiddle'),
  },
  {
    path: 'videos',
    loadComponent: () => import('./all-videos/all-videos'),
    title: 'Videolar - Odilbek Utamuratov',
  },
  {
    path: 'face-id',
    loadComponent: () => import('./face-id/face-id').then((c) => c.FaceId),
  },
];
