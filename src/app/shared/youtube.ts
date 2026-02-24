import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, startWith } from 'rxjs';
import { Playlist, VideoItem } from './models/youtube.model';
import { Card } from '../home/shared/models/card.model';
import { Constants } from '../../core/constants';

@Injectable({
  providedIn: 'root',
})
export class Youtube {
  private readonly API_KEY = Constants.API_YOUTUBE_KEY;
  constructor(private http: HttpClient) {}

  getVideosByPlaylist(playlisId: string, mockupData: any) {
    return this.http
      .get<any>(`https://www.googleapis.com/youtube/v3/playlistItems`, {
        params: {
          part: 'snippet',
          playlistId: playlisId,
          maxResults: '20',
          key: this.API_KEY,
        },
      })
      .pipe(
        startWith(mockupData),
        catchError(() => of(mockupData)),
        map((response) => {
          const videos = (response.items || [])
            .filter((item: any) => item.snippet.title !== 'Private video')
            .map((item: any) => ({
              videoId: item.snippet.resourceId.videoId,
              title: item.snippet.title,
              thumbnail: item.snippet.thumbnails.high.url,
              publishedAt: item.snippet.publishedAt,
            }));

          return videos;
        }),
      );
  }

  getVideos10(CHANNEL_ID: string, videoMockData: any) {
    return this.http
      .get<any>(
        `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&channelId=${CHANNEL_ID}&order=date&maxResults=10`,
      )
      .pipe(
        startWith(videoMockData),
        catchError(() => of(videoMockData)),
        map((response) =>
          (response?.items || [])
            .filter(
              (w: any) =>
                w.id.videoId &&
                !['VW7xfDoM3C8', 'CntDRS99seE'].includes(w.id.videoId),
            )
            .slice(0, 6)
            .map(
              (item: any) =>
                ({
                  image: item.snippet.thumbnails.high.url,
                  title: item.snippet.title,
                  url: 'https://youtube.com/watch?v=' + item.id.videoId,
                  videoId: item.id.videoId,
                }) as Card & { videoId: string },
            ),
        ),
      );
  }

  getVideosByChannelId(CHANNEL_ID: string, videoMockData: any) {
    return this.http
      .get<any>(
        `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&channelId=${CHANNEL_ID}&order=date&maxResults=50&type=video`,
      )
      .pipe(
        startWith(videoMockData),
        catchError(() => of(videoMockData)),
        map((response) => {
          const videos = (response?.items || [])
            .filter(
              (item: any) =>
                item.id.videoId &&
                !['VW7xfDoM3C8', 'CntDRS99seE'].includes(item.id.videoId),
            )
            .map((item: any) => ({
              videoId: item.id.videoId,
              title: item.snippet.title,
              thumbnail: item.snippet.thumbnails.high.url,
              publishedAt: item.snippet.publishedAt,
            }));

          // Videolarni yil bo'yicha guruhlash
          const groupedByYear = this.groupVideosByYear(videos);

          return groupedByYear;
        }),
      );
  }

  private groupVideosByYear(videos: VideoItem[]): Playlist[] {
    const grouped = videos.reduce(
      (acc, video) => {
        const year = new Date(video.publishedAt).getFullYear().toString();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(video);
        return acc;
      },
      {} as Record<string, VideoItem[]>,
    );

    return Object.entries(grouped)
      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      .map(([year, videos]) => ({
        id: year,
        title: `${year} yil videolari`,
        videos: videos,
      }));
  }
}
