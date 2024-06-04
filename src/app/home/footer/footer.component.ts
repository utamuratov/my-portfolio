import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgYoutubeComponent } from './svg-youtube/svg-youtube.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgTemplateOutlet, NgOptimizedImage, SvgYoutubeComponent],
  template: `
    <div id="contact" class="footer">
      <div class="container">
        <h3 class="pt-6 pb-3">Contact</h3>
        <p>
          I am a seasoned frontend engineer with over 6 years of professional
          experience. And I possess a foundational understanding of backend
          development.
        </p>
        <a
          href="mailto: odil.utamuratov@gmail.com"
          class="mt-1 pb-3 d-flex align-items-center"
        >
          <ng-container [ngTemplateOutlet]="mail" ]></ng-container>
          <p class="font-regular" style="margin-left: 0.3rem">
            {{ 'odil.utamuratov@gmail.com' }}
          </p>
        </a>
        <div class="pb-3">
          <ul class="menu align-items-center">
            <!-- TWITTER -->
            <!-- <li>
              <a href=""
                ><svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0442 0.248535H16.6509L10.9559 7.02676L17.656 16.2485H12.4101L8.30176 10.6548L3.59984 16.2485H0.991756L7.08342 8.99827L0.656006 0.249273H6.03509L9.74888 5.36207L14.0442 0.248535ZM13.1298 14.6244H14.574L5.25026 1.78783H3.70042L13.1298 14.6244Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li> -->

            <!-- TELEGRAM -->
            <li>
              <a href="https://t.me/utamuratovs" target="_blank">
                <div class="img-social" style="height: 1.1rem;">
                  <img ngSrc="./assets/images/telegram-just.png" fill alt="" />
                </div>
              </a>
            </li>

            <!-- LINKEDIN -->
            <li>
              <a
                href="https://www.linkedin.com/in/odilbek-utamuratov-7917811a9/"
                target="_blank"
              >
                <div class="img-social">
                  <img ngSrc="./assets/images/linkedin.png" fill alt="" />
                </div>
              </a>
            </li>

            <!-- Instagram -->
            <!-- <li>
              <a href=""
                ><svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.65601 0.248535C7.21363 0.248535 6.90651 0.259785 5.94688 0.302535C4.98726 0.347535 4.33363 0.498285 3.76101 0.721035C3.16036 0.946957 2.61631 1.30134 2.16688 1.75941C1.70909 2.20907 1.35475 2.75306 1.12851 3.35354C0.905756 3.92504 0.753881 4.57978 0.710006 5.53604C0.667256 6.49791 0.656006 6.80391 0.656006 9.24966C0.656006 11.6932 0.667256 11.9992 0.710006 12.9588C0.755006 13.9173 0.905756 14.5709 1.12851 15.1435C1.35913 15.7353 1.66626 16.237 2.16688 16.7377C2.66638 17.2383 3.16813 17.5465 3.75988 17.776C4.33363 17.9988 4.98613 18.1507 5.94463 18.1945C6.90538 18.2373 7.21138 18.2485 9.65601 18.2485C12.1006 18.2485 12.4055 18.2373 13.3663 18.1945C14.3236 18.1495 14.9795 17.9988 15.5521 17.776C16.1524 17.55 16.6961 17.1956 17.1451 16.7377C17.6458 16.237 17.9529 15.7353 18.1835 15.1435C18.4051 14.5709 18.557 13.9173 18.602 12.9588C18.6448 11.9992 18.656 11.6932 18.656 9.24854C18.656 6.80391 18.6448 6.49791 18.602 5.53716C18.557 4.57979 18.4051 3.92504 18.1835 3.35354C17.9573 2.75304 17.6029 2.20905 17.1451 1.75941C16.6958 1.30117 16.1517 0.946761 15.551 0.721035C14.9773 0.498285 14.3225 0.34641 13.3651 0.302535C12.4044 0.259785 12.0995 0.248535 9.65376 0.248535H9.65713H9.65601ZM8.84938 1.87079H9.65713C12.0601 1.87079 12.3448 1.87866 13.2931 1.92254C14.1706 1.96191 14.6476 2.10929 14.9649 2.23191C15.3845 2.39504 15.6849 2.59079 15.9999 2.90579C16.3149 3.22079 16.5095 3.52004 16.6726 3.94079C16.7964 4.25691 16.9426 4.73391 16.982 5.61141C17.0259 6.55979 17.0349 6.84441 17.0349 9.24629C17.0349 11.6482 17.0259 11.9339 16.982 12.8823C16.9426 13.7598 16.7953 14.2357 16.6726 14.5529C16.5283 14.9437 16.298 15.297 15.9988 15.5868C15.6838 15.9018 15.3845 16.0964 14.9638 16.2595C14.6488 16.3833 14.1718 16.5295 13.2931 16.57C12.3448 16.6128 12.0601 16.6229 9.65713 16.6229C7.25413 16.6229 6.96838 16.6128 6.02001 16.57C5.14251 16.5295 4.66663 16.3833 4.34938 16.2595C3.95844 16.1154 3.60477 15.8856 3.31438 15.5868C3.01485 15.2966 2.78419 14.9429 2.63938 14.5518C2.51676 14.2357 2.36938 13.7587 2.33001 12.8812C2.28726 11.9328 2.27826 11.6482 2.27826 9.24403C2.27826 6.84103 2.28726 6.55754 2.33001 5.60916C2.37051 4.73166 2.51676 4.25466 2.64051 3.93741C2.80363 3.51779 2.99938 3.21741 3.31438 2.90241C3.62938 2.58741 3.92863 2.39279 4.34938 2.22966C4.66663 2.10591 5.14251 1.95966 6.02001 1.91916C6.85026 1.88091 7.17201 1.86966 8.84938 1.86854V1.87079ZM14.4609 3.36479C14.3191 3.36479 14.1786 3.39272 14.0476 3.447C13.9166 3.50127 13.7975 3.58082 13.6972 3.68111C13.5969 3.7814 13.5174 3.90046 13.4631 4.03149C13.4088 4.16252 13.3809 4.30296 13.3809 4.44479C13.3809 4.58661 13.4088 4.72705 13.4631 4.85808C13.5174 4.98911 13.5969 5.10817 13.6972 5.20846C13.7975 5.30875 13.9166 5.3883 14.0476 5.44258C14.1786 5.49685 14.3191 5.52479 14.4609 5.52479C14.7473 5.52479 15.022 5.411 15.2246 5.20846C15.4271 5.00592 15.5409 4.73122 15.5409 4.44479C15.5409 4.15835 15.4271 3.88365 15.2246 3.68111C15.022 3.47857 14.7473 3.36479 14.4609 3.36479ZM9.65713 4.62704C9.04409 4.61747 8.43526 4.72996 7.86611 4.95794C7.29695 5.18593 6.77884 5.52487 6.34193 5.95501C5.90502 6.38516 5.55804 6.89792 5.3212 7.46345C5.08436 8.02898 4.96239 8.63598 4.96239 9.2491C4.96239 9.86222 5.08436 10.4692 5.3212 11.0347C5.55804 11.6003 5.90502 12.113 6.34193 12.5432C6.77884 12.9733 7.29695 13.3123 7.86611 13.5403C8.43526 13.7682 9.04409 13.8807 9.65713 13.8712C10.8705 13.8522 12.0277 13.3569 12.8791 12.4922C13.7305 11.6274 14.2076 10.4626 14.2076 9.2491C14.2076 8.03559 13.7305 6.87075 12.8791 6.006C12.0277 5.14126 10.8705 4.64597 9.65713 4.62704ZM9.65713 6.24816C10.4529 6.24816 11.216 6.56427 11.7787 7.12695C12.3414 7.68963 12.6575 8.45279 12.6575 9.24854C12.6575 10.0443 12.3414 10.8074 11.7787 11.3701C11.216 11.9328 10.4529 12.2489 9.65713 12.2489C8.86138 12.2489 8.09822 11.9328 7.53555 11.3701C6.97287 10.8074 6.65676 10.0443 6.65676 9.24854C6.65676 8.45279 6.97287 7.68963 7.53555 7.12695C8.09822 6.56427 8.86138 6.24816 9.65713 6.24816Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li> -->

            <!-- YOUTUBE -->
            <li>
              <a
                href="https://www.youtube.com/playlist?list=PLWAG9SizThbZ41Q2qj8VE3uZjoOwE3r39"
                target="_blank"
              >
                <svg-youtube></svg-youtube>
              </a>
            </li>

            <!-- MEDIUM -->
            <li>
              <a href="https://medium.com/@odil.utamuratov" target="_blank">
                <div class="img-social">
                  <img ngSrc="./assets/images/medium.png" fill alt="" />
                </div>
              </a>
            </li>

            <!-- GITHUB -->
            <li>
              <a href="https://github.com/utamuratov" target="_blank">
                <div class="img-social">
                  <img ngSrc="./assets/images/github.png" fill alt="" />
                </div>
              </a>
            </li>

            <!-- NPM -->
            <li>
              <a href="https://www.npmjs.com/~utamuratov" target="_blank">
                <div class="img-social" style="width: 1.4rem; height: 1.4rem">
                  <img ngSrc="./assets/images/npm.png" fill alt="" />
                </div>
              </a>
            </li>

            <!-- LEETCODE -->
            <li>
              <a href="https://leetcode.com/odilbek/" target="_blank">
                <div class="img-social">
                  <img ngSrc="./assets/images/leetcode.png" fill alt="" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ng-template #mail>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.83719 3.09485H13.6693C14.3815 3.09485 14.9589 3.67219 14.9589 4.38439V12.1216C14.9589 12.8338 14.3815 13.4112 13.6693 13.4112H2.83719C2.125 13.4112 1.54765 12.8338 1.54765 12.1216V4.38439C1.54765 3.67219 2.125 3.09485 2.83719 3.09485Z"
          stroke="white"
          stroke-width="0.884256"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.8954 5.1582L8.25304 8.76891L3.6107 5.1582"
          stroke="white"
          stroke-width="0.884256"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </ng-template>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
