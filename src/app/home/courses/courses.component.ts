import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-courses',
    imports: [RouterLink],
    template: `
    <div id="courses" class="container">
      <h2 class="linier-title text-center pt-6">Courses</h2>
      <div class="cards">
        <!-- <a class="card" href="https://youtu.be/VW7xfDoM3C8" target="_blank"> -->
        <a class="card" [routerLink]="['/angular-in-100-minutes']">
          <div class="card__body">
            <img src="./assets/images/courses/samarali-kirish.jpg" alt="" />
          </div>
          <div class="card__footer">
            <span>CLICK HERE TO VISIT</span>
            <h3>Angular in 100 minutes</h3>
          </div>
        </a>
        <!-- <a class="card" href="https://youtu.be/CntDRS99seE" target="_blank"> -->
        <a class="card" [routerLink]="['/level-up']">
          <div class="card__body">
            <img src="./assets/images/courses/levelUP.jpg" alt="" />
          </div>
          <div class="card__footer">
            <span>CLICK HERE TO VISIT</span>
            <h3>Level UP | Angular</h3>
          </div>
        </a>
        <!-- <a
          class="card"
          href="https://www.youtube.com/playlist?list=PLWAG9SizThbZ41Q2qj8VE3uZjoOwE3r39"
          target="_blank"
        >
          <div class="card__body">
            <img src="./assets/images/angular-bg.jpg" alt="" />
          </div>
          <div class="card__footer">
            <span>CLICK HERE TO VISIT</span>
            <h3>Angular tutorial <span class="beta">Free</span></h3>
          </div>
        </a> -->
        <a class="card" [routerLink]="['/angular-tutorial']">
          <div class="card__body">
            <img src="./assets/images/courses/angular-bg.jpg" alt="" />
          </div>
          <div class="card__footer">
            <span>CLICK HERE TO VISIT</span>
            <h3>Angular tutorial <span class="beta">Free</span></h3>
          </div>
        </a>
      </div>
    </div>
  `,
    styleUrl: './courses.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent {}
