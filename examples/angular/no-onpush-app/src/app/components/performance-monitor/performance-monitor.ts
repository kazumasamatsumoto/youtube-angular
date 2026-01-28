import { Component, OnInit, OnDestroy, DoCheck, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionCounter } from '../../services/change-detection-counter';

@Component({
  selector: 'app-performance-monitor',
  imports: [CommonModule],
  templateUrl: './performance-monitor.html',
  styleUrl: './performance-monitor.css',
  // 注意: OnPushを使っていない！これがクソ実装のポイント
})
export class PerformanceMonitor implements OnInit, OnDestroy, DoCheck {
  // 変更検知の回数を表示
  totalDetections = signal(0);
  allCounts = signal<Map<string, number>>(new Map());
  
  private updateInterval: any;

  constructor(private counter: ChangeDetectionCounter) {
    // signalの変更を監視
    effect(() => {
      this.totalDetections.set(this.counter.getTotalDetections()());
      this.allCounts.set(new Map(this.counter.getAllCounts()()));
    });
  }

  ngOnInit(): void {
    // 定期的に表示を更新（これ自体が変更検知を発生させる）
    this.updateInterval = setInterval(() => {
      // 何もしないが、これにより変更検知が発生する
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
  }

  reset(): void {
    this.counter.reset();
  }

  getCountEntries(): Array<[string, number]> {
    return Array.from(this.allCounts().entries()).sort((a, b) => b[1] - a[1]);
  }
  
  // 変更検知のたびに呼ばれる（OnPushなら呼ばれない）
  ngDoCheck(): void {
    this.counter.recordDetection('PerformanceMonitor');
  }
}
