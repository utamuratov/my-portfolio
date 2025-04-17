import { ActivatedRoute } from '@angular/router';
import { CoursesComponent } from '../home/courses/courses.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.less',
})
export default class CoursePage {
  data: {
    cover: string;
    topics: string[];
    code: 'levelUP' | 'in100Minutes' | 'unlimit'
    videoLessons?: {
      link: string;
      title: string;
      duration: string;
      cover: string;
    }[];
  } = this.route.snapshot.data as any;
  constructor(private route: ActivatedRoute) {}
}
