import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaceIdService, NgxFaceLiveness } from '@utamuratov/ngx-face-id';

@Component({
  selector: 'app-face-id',
  standalone: true,
  imports: [NgxFaceLiveness],
  template: `
    <div style="min-height: 500px; padding: 40px 0">
      <ngx-face-liveness />
    </div>
  `,
  styleUrl: './face-id.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceId {
  private faceId = inject(FaceIdService);
  constructor() {
    this.faceId.loadModels();
  }
}
