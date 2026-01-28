import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child } from '../child/child';
import { ChangeDetectionCounter } from '../../services/change-detection-counter';

@Component({
  selector: 'app-parent',
  imports: [CommonModule, Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
  // 注意: OnPushを使っていない！これがクソ実装のポイント
  // 本来は changeDetection: ChangeDetectionStrategy.OnPush を使うべき
})
export class Parent implements OnInit, OnDestroy {
  // タイマーで定期的に更新される値（実際には使わないが、変更検知を発生させる）
  timer = signal(0);
  private intervalId: any;

  // 大量の子コンポーネントを生成
  childCount = 50; // 50個の子コンポーネント（変更検知が50倍になる！）
  children = Array.from({ length: this.childCount }, (_, i) => i);

  constructor(private counter: ChangeDetectionCounter) {}

  ngOnInit(): void {
    // 100msごとに更新（これにより大量の変更検知が発生）
    this.intervalId = setInterval(() => {
      this.timer.update(v => v + 1);
      // 変更検知を記録
      this.counter.recordDetection('Parent');
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
