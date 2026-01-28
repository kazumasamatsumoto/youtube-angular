import { Injectable, signal } from '@angular/core';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private readonly videos = signal<Video[]>([
    // サンプルデータ（今後動画が追加されたら更新）
    {
      id: '1',
      title: 'ChangeDetectionStrategy.OnPushを全く使わないアプリケーション',
      description: 'デフォルトのChangeDetectionStrategyで全コンポーネントを実装し、パフォーマンスがどれだけ悪化するか実演します。',
      category: 'angular',
      publishedDate: new Date('2026-01-28'),
      content: {
        overview: 'AngularのChangeDetectionStrategy.OnPushは、パフォーマンス最適化のための重要な機能です。しかし、この動画では意図的にOnPushを一切使わず、デフォルトのChangeDetectionStrategyで全コンポーネントを実装します。結果として、不要な変更検知が大量に発生し、アプリケーションのパフォーマンスが著しく悪化します。でも動くんだよね。',
        codeSamples: [
          {
            title: 'OnPushを使わないコンポーネント',
            language: 'typescript',
            code: `@Component({
  selector: 'app-example',
  // ChangeDetectionStrategy.OnPushを指定しない
  // デフォルトのChangeDetectionStrategyを使用
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  data$ = this.service.getData();
  
  constructor(private service: DataService) {}
}`,
            description: 'OnPushを指定しないことで、親コンポーネントの変更検知が発生するたびに、このコンポーネントも再評価されます。'
          }
        ],
        correctUsageLinks: [
          {
            title: 'Angular公式ドキュメント - Change Detection',
            url: 'https://angular.dev/guide/change-detection',
            description: 'Angularの変更検知の仕組みについて'
          },
          {
            title: 'OnPush Change Detection Strategy',
            url: 'https://angular.dev/guide/change-detection#onpush',
            description: 'OnPush戦略の正しい使い方'
          }
        ]
      }
    }
  ]);

  getVideos() {
    return this.videos.asReadonly();
  }

  getVideoById(id: string): Video | undefined {
    return this.videos().find(v => v.id === id);
  }

  getVideosByCategory(category: Video['category']): Video[] {
    return this.videos().filter(v => v.category === category);
  }

  addVideo(video: Video): void {
    this.videos.update(videos => [...videos, video]);
  }
}
