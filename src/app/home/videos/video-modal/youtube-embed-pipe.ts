import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appYoutubeEmbed',
})
export class YoutubeEmbedPipe implements PipeTransform {
  transform(videoId: string, autoplay = 1) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}`;
  }
}
