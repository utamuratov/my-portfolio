import { ChangeDetectionStrategy, Component } from '@angular/core';
import CoursePage from '../course-page.component';

@Component({
  selector: 'app-unlimit',
  imports: [CoursePage],
  template: ` <app-course-page [data]="data" /> `,
  styleUrl: './unlimit.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Unlimit {
  data = {
    cover: '../../../../assets/images/courses/angular-bg.jpg',
    title: 'Angular tutotial',
    code: 'unlimit',
    youTubeVideoId: 'MPduddgZqQs',
    topics: [
      'Angularga kirish va asosiy tushunchalar',
      'Project tuzilmasi va asosiy fayllar tahlili',
      'Komponentlar: yaratilishi va ishlatilishi',
      'Template va data binding (interpolation, property binding, event binding)',
      'Two-way data binding',
      'Direktivalar: ngIf, ngFor, ngClass, ngStyle',
      "Komponentlar o‘rtasida ma'lumot almashinuvi",
      'Service va Dependency Injection',
      'HTTP so‘rovlar va REST API bilan ishlash',
      'RxJS va Observablesga kirish',
      'Router: sahifalar o‘rtasida navigatsiya',
      'Dinamik routing va parametrlar',
      'Formlar: Template-driven forms',
      'Formlar: Reactive forms',
      'Form validation (sintaktik va dasturlash asosida)',
      "Pipe'lar: Standart va Custom pipe yaratish",
      'Lifecycle Hooks tushunchasi',
      'Modul konsepsiyasi va Lazy Loading',
      'Angular Materialga kirish',
      'Reusable komponentlar yaratish',
      'State Management (ngRx asoslari)',
      'Error handling va not found sahifalar',
      'Auth: Login, JWT va AuthGuard',
      'Testlash: Unit Test va e2e Testlar',
      'Performance optimization (Change Detection, TrackBy)',
      'Deployment: Angular ilovasini build qilish va joylashtirish',
      'Yakuniy loyiha: Amaliy loyiha yaratish va takrorlash',
    ],
  };
}
