import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, NgTemplateOutlet],
  template: `
    <div class="header">
      <div
        class="container h-100 d-flex align-items-center justify-content-space-between"
      >
        <div class="logo">
          <img ngSrc="./assets/images/angular-original.png" fill alt="" />
        </div>
        <ul class="menu font-regular">
          <ng-container [ngTemplateOutlet]="menuList"></ng-container>
        </ul>
        <div class="burger-img" (click)="openBurger()">
          <img ngSrc="./assets/images/burger.png" fill alt="" />
        </div>
      </div>
    </div>
    <div
      class="burger"
      [style.transform]="showBurger ? 'translateX(0)' : 'translateX(100%)'"
    >
      <div class="close" (click)="closeBurger()">
        <img ngSrc="./assets/images/close.png" fill alt="" />
      </div>
      <ul>
        <ng-container [ngTemplateOutlet]="menuList"></ng-container>
      </ul>
    </div>
    <ng-template #menuList>
      <li><a href="#home">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#contact">Contact</a></li>
    </ng-template>
  `,
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  showBurger = false;
  openBurger() {
    document.body.style.overflow = 'hidden';
    this.showBurger = true;
  }
  closeBurger() {
    document.body.style.overflow = 'auto';
    this.showBurger = false;
  }
}
