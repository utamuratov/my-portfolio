import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardHoverableComponent } from '../card-hoverable/card-hoverable.component';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [NgFor, CardHoverableComponent],
  template: ` <div [id]="id" class="container">
    <h2 class="linier-title text-center pt-6">{{ title }}</h2>
    <div class="section">
      @for (item of data; track $index) {
      <app-card-hoverable [data]="item"></app-card-hoverable>
      }
    </div>
  </div>`,
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
