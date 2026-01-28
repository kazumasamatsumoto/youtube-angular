import { Component, Input, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionCounter } from '../../services/change-detection-counter';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
  // 注意: OnPushを使っていない！これがクソ実装のポイント
  // 本来は changeDetection: ChangeDetectionStrategy.OnPush を使うべき
  // 親コンポーネントが変更検知されるたびに、この子コンポーネントも再評価される
})
export class Child implements DoCheck {
  @Input() index!: number;
  
  // 毎回再計算される（無駄な処理）
  computedValue = this.calculateExpensiveValue();
  renderCount = 0;

  constructor(private counter: ChangeDetectionCounter) {}

  // ngDoCheckは変更検知のたびに呼ばれる（OnPushなら呼ばれない）
  ngDoCheck(): void {
    // 変更検知を記録
    this.counter.recordDetection(`Child-${this.index}`);
    this.renderCount++;
    // 毎回再計算（無駄な処理）
    this.computedValue = this.calculateExpensiveValue();
  }

  // このメソッドは変更検知のたびに呼ばれる（OnPushなら呼ばれない）
  calculateExpensiveValue(): number {
    // わざと重い計算をシミュレート
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += Math.random();
    }
    return sum;
  }

  // ゲッターも変更検知のたびに呼ばれる
  get displayValue(): string {
    return `子コンポーネント #${this.index} - 計算値: ${this.computedValue.toFixed(2)}`;
  }
}
