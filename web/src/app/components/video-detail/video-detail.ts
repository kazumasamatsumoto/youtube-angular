import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VideoService } from '../../services/video';
import { Video, CodeSample } from '../../models/video.model';

@Component({
  selector: 'app-video-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './video-detail.html',
  styleUrl: './video-detail.css',
})
export class VideoDetail implements OnInit {
  video = signal<Video | null>(null);
  notFound = signal(false);

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const video = this.videoService.getVideoById(id);
      if (video) {
        this.video.set(video);
      } else {
        this.notFound.set(true);
      }
    }
  }

  getCategoryLabel(category: Video['category']): string {
    const labels: Record<Video['category'], string> = {
      angular: 'Angular',
      test: 'Test',
      microfrontend: 'Microfrontend',
      nx: 'Nx'
    };
    return labels[category];
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getCodeSampleLanguageClass(language: string): string {
    return `language-${language}`;
  }

  async copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      // 簡単なフィードバック（実際の実装ではトースト通知などを使うと良い）
      alert('コードをクリップボードにコピーしました！');
    } catch (err) {
      console.error('コピーに失敗しました:', err);
      alert('コピーに失敗しました');
    }
  }
}
