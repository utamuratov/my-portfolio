import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxFaceLiveness } from '@utamuratov/ngx-face-id';

@Component({
  selector: 'app-face-id',
  standalone: true,
  imports: [NgxFaceLiveness],
  template: `
    <div style="min-height: 500px;">
      <ngx-face-liveness />
    </div>
  `,
  styleUrl: './face-id.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceId {}
