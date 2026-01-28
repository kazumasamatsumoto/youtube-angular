import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-video-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './video-list.html',
  styleUrl: './video-list.css',
})
export class VideoList implements OnInit {
  videos = signal<Video[]>([]);
  selectedCategory = signal<Video['category'] | null>(null);
  categories: { value: Video['category'] | null; label: string }[] = [
    { value: null, label: 'すべて' },
    { value: 'angular', label: 'Angular' },
    { value: 'test', label: 'Test' },
    { value: 'microfrontend', label: 'Microfrontend' },
    { value: 'nx', label: 'Nx' },
  ];

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const category = params['category'] as Video['category'] | undefined;
      this.selectedCategory.set(category || null);
      this.loadVideos();
    });
  }

  loadVideos(): void {
    const category = this.selectedCategory();
    if (category) {
      this.videos.set(this.videoService.getVideosByCategory(category));
    } else {
      const allVideos = this.videoService.getVideos();
      this.videos.set([...allVideos()]);
    }
  }

  onCategoryChange(category: Video['category'] | null): void {
    this.selectedCategory.set(category);
    this.loadVideos();
  }

  getCategoryLabel(category: Video['category']): string {
    const cat = this.categories.find(c => c.value === category);
    return cat?.label || category;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
