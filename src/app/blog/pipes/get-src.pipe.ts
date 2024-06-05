import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appGetSrc',
  standalone: true,
})
export class GetSrcPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    const defaultSrc = './assets/images/angular-bg.jpg';
    if (!value) return defaultSrc;

    const from = value.indexOf('src="');
    if (from === -1) return defaultSrc;

    const to = value.indexOf('"', from + 5);
    return value.slice(from + 5, to);
  }
}
