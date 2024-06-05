import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-hoverable',
  standalone: true,
  imports: [],
  template: ` <a class="card" [href]="data.url" target="_blank">
    <div class="card__body">
      <img [src]="data.image" alt="" />
    </div>
    <div class="card__footer--absolute">
      <span>CLICK HERE TO SEE</span>
      <h3>{{ data.title }}</h3>
    </div>
  </a>`,
  styleUrl: './card-hoverable.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHoverableComponent {
  @Input({ required: true })
  data!: Card;
}
