import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectionCounter {
  // 各コンポーネントの変更検知回数を記録
  private detectionCounts = signal<Map<string, number>>(new Map());
  private totalDetections = signal(0);

  // コンポーネント名で変更検知を記録
  recordDetection(componentName: string): void {
    const counts = this.detectionCounts();
    const current = counts.get(componentName) || 0;
    counts.set(componentName, current + 1);
    this.detectionCounts.set(new Map(counts));
    this.totalDetections.update(total => total + 1);
  }

  getDetectionCount(componentName: string): number {
    return this.detectionCounts().get(componentName) || 0;
  }

  getTotalDetections() {
    return this.totalDetections.asReadonly();
  }

  getAllCounts() {
    return this.detectionCounts.asReadonly();
  }

  reset(): void {
    this.detectionCounts.set(new Map());
    this.totalDetections.set(0);
  }
}
