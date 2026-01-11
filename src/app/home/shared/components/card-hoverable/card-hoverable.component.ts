import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-hoverable',
  standalone: true,
  imports: [],
  template: ` @if (clickable) {
      <a class="card" (click)="clicked.emit()">
        <div class="card__body">
          <img [src]="data.image" alt="" />
        </div>
        <div class="card__footer--absolute">
          <span>CLICK HERE TO SEE</span>
          <h3>{{ data.title }}</h3>
        </div>
      </a>
    } @else {
      <a class="card" [href]="data.url" target="_blank">
        <div class="card__body">
          <img [src]="data.image" alt="" />
        </div>
        <div class="card__footer--absolute">
          <span>CLICK HERE TO SEE</span>
          <h3>{{ data.title }}</h3>
        </div>
      </a>
    }`,
  styleUrl: './card-hoverable.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHoverableComponent {
  @Input({ required: true })
  data!: Card;

  @Input()
  clickable = false;

  @Output() clicked = new EventEmitter();
}
