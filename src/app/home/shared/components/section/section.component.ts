import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardHoverableComponent } from '../card-hoverable/card-hoverable.component';
import { Card } from '../../models/card.model';
import { SectionWrapper } from '../section-wrapper/section-wrapper';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CardHoverableComponent, SectionWrapper],
  template: `
    <app-section-wrapper [title]="title" [id]="id">
      @for (item of data; track $index) {
        <app-card-hoverable [data]="item"></app-card-hoverable>
      }
    </app-section-wrapper>
  `,
  styleUrl: './section.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  @Input({ required: true })
  data!: Card[];

  @Input()
  id!: string;

  @Input({ required: true })
  title!: string;
}
