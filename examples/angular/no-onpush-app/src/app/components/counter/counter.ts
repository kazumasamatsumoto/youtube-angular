import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionCounter } from '../../services/change-detection-counter';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  // 注意: OnPushを使っていない！これがクソ実装のポイント
})
export class Counter {
  count = signal(0);
  private autoIncrementInterval: any;

  constructor(private counter: ChangeDetectionCounter) {
    // 自動でカウントアップ（変更検知を大量に発生させる）
    this.startAutoIncrement();
  }

  startAutoIncrement(): void {
    // 50msごとにカウントアップ（非常に頻繁な変更検知）
    this.autoIncrementInterval = setInterval(() => {
      this.count.update(v => v + 1);
      this.counter.recordDetection('Counter');
    }, 50);
  }

  stopAutoIncrement(): void {
    if (this.autoIncrementInterval) {
      clearInterval(this.autoIncrementInterval);
    }
  }

  increment(): void {
    this.count.update(v => v + 1);
    this.counter.recordDetection('Counter');
  }

  decrement(): void {
    this.count.update(v => v - 1);
    this.counter.recordDetection('Counter');
  }

  reset(): void {
    this.count.set(0);
    this.counter.recordDetection('Counter');
  }
}
