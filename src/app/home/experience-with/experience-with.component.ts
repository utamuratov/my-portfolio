import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience-with',
  standalone: true,
  imports: [UpperCasePipe, NgOptimizedImage],
  template: `
    <div id="experienceWith" class="container">
      <p class="text-center font-regular pt-6 pb-3" style="font-size: 20px;">
        {{ 'Experience with' | uppercase }}
      </p>
      <div class="experience">
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          ><img src="./assets/images/js-o.png" alt=""
        /></a>
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          ><img src="./assets/images/html-o.png" alt=""
        /></a>
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          ><img src="./assets/images/css-o.png" alt=""
        /></a>
        <a target="_blank" href="https://www.typescriptlang.org/"
          ><img src="./assets/images/ts.png" alt=""
        /></a>
        <a target="_blank" href="https://angular.dev/"
          ><img ngSrc="./assets/images/angular-original.png" fill alt=""
        /></a>
        <a
          target="_blank"
          href="https://learn.microsoft.com/en-us/dotnet/csharp/"
          ><img src="./assets/images/c.png" alt=""
        /></a>
        <a target="_blank" href="https://learn.microsoft.com/en-us/dotnet/"
          ><img ngSrc="./assets/images/net.png" fill alt=""
        /></a>
      </div>
    </div>
  `,
  styleUrl: './experience-with.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceWithComponent {}
