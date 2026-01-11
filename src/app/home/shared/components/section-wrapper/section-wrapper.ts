import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-section-wrapper',
    imports: [],
    template: `
    <div [id]="id" class="container">
      <h2 class="linier-title text-center pt-6">{{ title }}</h2>
      <div class="section">
        <ng-content />
      </div>
    </div>
  `,
    styleUrl: './section-wrapper.less',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionWrapper {
  @Input()
  id!: string;

  @Input({ required: true })
  title!: string;
}
