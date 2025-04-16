import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'problems',
    loadComponent: () => import('./problems/problems.component'),
  },
  {
    path: 'angular-in-100-minutes',
    loadComponent: () => import('./course-page/course-page.component'),
    data: {
      cover: '../../../../assets/images/courses/samarali-kirish.jpg',
      title: 'Angularga samarali kirish | 100 soniyada',
      topics: [
        'Angular nima? Nimaga Angular? Qanday Angular muhitini yaratamiz?',
        'Frontend vs Backend',
        'Angular sxemasi',
        "Biron narsani qanday samarali o'rganish mumkin?",
        'Komponenta nima?',
        'Input/Output',
        '@if va @for',
        'Injectable servicelar',
        'Property binding va Event binding. Interpolation',
        'HttpClient',
        'Routing',
        'Pipes',
        "Xatoliklarni o'qish",
        'VsCode uchun Angular extensionlari',
        'Roadmap',
      ],
      videoLessons: [
        {
          link: 'https://youtu.be/VW7xfDoM3C8',
          title: 'Angularga samarali kirish | Trailer',
          duration: '1:56',
          cover: '../../../../assets/images/courses/samarali-kirish.jpg',
        },
        {
          link: 'https://youtu.be/pI-9RB78yaw',
          title: 'Nima uchun Angular?',
          duration: '4:34',
          cover: '../../../../assets/images/courses/nima-uchun-angular.png',
        },
      ],
    },
  },
  {
    path: 'level-up',
    loadComponent: () => import('./course-page/course-page.component'),
    data: {
      cover: '../../../../assets/images/courses/levelUP.jpg',
      title: 'Level UP | Angular',
      topics: [
        'Debounce Input',
        'Bundle size ni analiz qilish',
        'Masalani qanday yechish kerak',
        "Kirish. DI o'zi nima",
        "Injection token. Amaliyotda o'rni",
        "useValue, useFactory. Amaliyotda o'rni",
        "useClass, useExisting. Amaliyotda o'rni",
        'Refactoring. Dead code',
        'Refactoring. Lazy loading vs Pre loading',
        'Refactoring. Widget module va Yagona UI',
        'Refactoring. Third-party lib, UpToDate, Umumiy xulosalar',
        'Multiple projects',
        "Kutubxona va uni NPM'ga joylash",
      ],
      videoLessons: [
        {
          link: 'https://youtu.be/CntDRS99seE',
          title: 'Level UP | Trailer',
          duration: '2:19',
          cover: '../../../../assets/images/courses/levelUP.jpg',
        },
      ],
    },
  },
  {
    path: 'angular-tutorial',
    loadComponent: () => import('./course-page/course-page.component'),
    data: {
      cover: '../../../../assets/images/courses/angular-bg.jpg',
      title: 'Angular tutotial',
      topics: [
        'TypeScript asoslari',
        'Angular structure',
        'Bindings, One way, two way',
        'TypeScript asoslari',
        'Angular structure',
        'Bindings, One way, two way',
        'TypeScript asoslari',
        'Angular structure',
        'Bindings, One way, two way',
      ],
    },
  },
];
