import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgOptimizedImage],
  template: ` <div id="experience" class="container">
    <h2 class="linier-title text-center pt-6">Experience</h2>
    <a class="company" href="https://uzinfocom.uz/" target="_blank">
      <div class="d-flex justify-content-space-between align-items-center">
        <div class="d-flex align-items-center gap-1">
          <div class="logo-img">
            <img ngSrc="./assets/images/uzinfocom.png" fill alt="" />
          </div>
          <h3>Full-Stack Engineer</h3>
        </div>
        <p>May 2024 - Present</p>
      </div>
      <p style="margin-top: 1.8rem;"></p>
    </a>
    <a class="company" href="https://agrobank.uz/" target="_blank">
      <div class="d-flex justify-content-space-between align-items-center">
        <div class="d-flex align-items-center gap-1">
          <div class="logo-img">
            <img ngSrc="./assets/images/agrobank.png" fill alt="" />
          </div>
          <h3>Team Lead, Senior Frontend Engineer</h3>
        </div>
        <p>Feb 2022 - Present</p>
      </div>
      <p style="margin-top: 1.8rem;">
        I have been working on the Agrozamin project at Agorbank for over two
        years. During this time, I have actively participated in key
        discussions, contributing my thoughts and solutions to various
        challenges. My role also includes reviewing code from junior and
        mid-level programmers and providing consultations to them. These
        responsibilities have allowed me to play a crucial role in the project's
        development and success.
      </p>
    </a>
    <a class="company" href="https://us.uz/" target="_blank">
      <div class="d-flex justify-content-space-between align-items-center">
        <div class="d-flex align-items-center gap-1">
          <div class="logo-img">
            <img
              style="background-color: #fff; border-radius: 4px"
              ngSrc="./assets/images/unicon-soft.svg"
              fill
              alt=""
            />
          </div>
          <h3>Senior Frontend Engineer</h3>
        </div>
        <p>Dec 2023 - Apr 2024</p>
      </div>
      <p style="margin-top: 1.8rem;"></p>
    </a>
    <a
      class="company"
      href="https://www.youtube.com/@UnlimIT_academy"
      target="_blank"
    >
      <div class="d-flex justify-content-space-between align-items-center">
        <div class="d-flex align-items-center gap-1">
          <div class="logo-img">
            <img ngSrc="./assets/images/unlimit.png" fill alt="" />
          </div>
          <h3>Frontend Mentor</h3>
        </div>
        <p>May 2023 - Sep 2023</p>
      </div>
      <p style="margin-top: 1.8rem;">
        I taught Angular online to students based on my knowledge and
        experience. Teaching has been very rewarding for me as well. It made me
        dig deeper into what I already knew.
      </p>
    </a>
    <a class="company" href="https://www.synel.com/" target="_blank">
      <div class="d-flex justify-content-space-between align-items-center">
        <div class="d-flex align-items-center gap-1">
          <div class="logo-img" style="width: 4rem">
            <img ngSrc="./assets/images/synel.png" fill alt="" />
          </div>
          <h3>Middle Frontend Developer</h3>
        </div>
        <p>Jan 2021 - Jul 2022</p>
      </div>
      <p style="margin-top: 1.8rem;">
        This company is the first and so far the last foreign company of my
        experience. The company had a lot of projects and clients. That's why
        I've been supporting several projects. My main role was to transfer an
        old project developed in the Durandal framework to Angular in a short
        period of time (6 months).
      </p>
    </a>
    <a class="company" href="https://igenius.uz/" target="_blank">
      <div class="d-flex justify-content-space-between align-items-center">
        <div class="d-flex align-items-center gap-1">
          <div class="logo-img">
            <img ngSrc="./assets/images/genesis.png" fill alt="" />
          </div>
          <h3>Strong Junior Frontend Developer</h3>
        </div>
        <p>Sep 2019 - Jan 2021</p>
      </div>
      <p style="margin-top: 1.8rem;">
        We worked very hard in this company. We did 6 projects in one and a half
        years. In almost all projects, I was responsible for the front-end side:
        building the architecture, assigning tasks to teammates, allocating
        time, discussions, etc.
      </p>
    </a>
    <a class="company" href="https://bepro.uz/" target="_blank">
      <div class="d-flex justify-content-space-between align-items-center">
        <div class="d-flex align-items-center gap-1">
          <div class="logo-img">
            <img ngSrc="./assets/images/bepro-logo.png" fill alt="" />
          </div>
          <h3>Junior Full-Stack Developer</h3>
        </div>
        <p>Jan 2018 - Sep 2019</p>
      </div>
      <p style="margin-top: 1.8rem;">
        This is where I took my first step into programming and looked up to the
        Senior programmers here. This is where I started learning Angular.js,
        Angular 2+, ASP.NET, .NET Core, WPF and other technologies and did the
        small tasks assigned to me.
      </p>
    </a>
  </div>`,
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {}
