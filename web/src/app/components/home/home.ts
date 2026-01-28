import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  categories = [
    {
      name: 'Angular',
      description: 'フレームワークの機能を本来の意図とは異なる方法で使用',
      icon: '⚡',
      path: '/videos?category=angular'
    },
    {
      name: 'Test',
      description: 'テストコードを書かないテスト、メタテスト地獄など',
      icon: '🧪',
      path: '/videos?category=test'
    },
    {
      name: 'Microfrontend',
      description: '過度に細分化されたマイクロフロントエンド構成',
      icon: '🔀',
      path: '/videos?category=microfrontend'
    },
    {
      name: 'Nx',
      description: 'モノレポを複雑にしすぎる構成、依存関係地獄',
      icon: '📦',
      path: '/videos?category=nx'
    }
  ];
}
