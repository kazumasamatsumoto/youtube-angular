import { Component } from '@angular/core';
import { PerformanceMonitor } from './components/performance-monitor/performance-monitor';
import { Parent } from './components/parent/parent';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [PerformanceMonitor, Parent, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
  // 注意: OnPushを使っていない！これがクソ実装のポイント
})
export class App {
}
