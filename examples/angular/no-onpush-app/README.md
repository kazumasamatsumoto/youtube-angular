# ChangeDetectionStrategy.OnPushを全く使わないアプリケーション

## 🔴 これはクソ実装です！

このアプリケーションは、**意図的に**`ChangeDetectionStrategy.OnPush`を使わずに実装されています。

**⚠️ 警告: この実装は教育目的のためのものです。実際のプロダクションでは絶対に使わないでください！**

## 📺 動画内容

このサンプルアプリは、企画案の最初の動画「ChangeDetectionStrategy.OnPushを全く使わないアプリケーション」の実演用です。

- デフォルトのChangeDetectionStrategyで全コンポーネントを実装
- パフォーマンスがどれだけ悪化するか実演
- 「でも動くんだよね」という結論

## 🎯 このアプリで実演すること

1. **不要な変更検知の大量発生**
   - 親コンポーネントが変更検知されるたびに、全ての子コンポーネントも再評価される
   - 50個の子コンポーネント × 10回/秒 = 500回/秒の変更検知

2. **無駄な計算の実行**
   - 変更検知のたびに重い計算が実行される
   - OnPushなら実行されないはずの処理が毎回実行される

3. **パフォーマンスの悪化**
   - 変更検知の回数がリアルタイムで表示される
   - 数秒で数千回の変更検知が発生する

## 🚀 起動方法

```bash
# 依存関係のインストール（初回のみ）
npm install

# 開発サーバーの起動
npm start

# ブラウザで http://localhost:4200 を開く
```

## 📊 コンポーネント構成

### PerformanceMonitor
- 変更検知の回数をカウントして表示
- コンポーネント別の変更検知回数を表示
- リセット機能

### Counter
- 自動でカウントアップするカウンター
- 50msごとに更新（非常に頻繁な変更検知）
- 手動でのインクリメント/デクリメントも可能

### Parent
- 100msごとにタイマーを更新
- 50個の子コンポーネントを生成
- 親の変更検知のたびに全ての子が再評価される

### Child（×50個）
- 親コンポーネントの変更検知のたびに再評価される
- 毎回重い計算を実行（無駄な処理）
- 再描画回数を表示

## 🔍 観察ポイント

1. **パフォーマンスモニター**
   - 数秒で変更検知回数が数千回に達する
   - Childコンポーネントが大量に再評価されている

2. **ブラウザの開発者ツール**
   - PerformanceタブでCPU使用率を確認
   - 変更検知が頻繁に発生していることが分かる

3. **コンソール**
   - エラーは出ない（「でも動くんだよね」）

## ✅ 正しい実装方法

実際のプロダクションでは、以下のようにOnPushを使用します：

```typescript
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-example',
  changeDetection: ChangeDetectionStrategy.OnPush, // ← これを追加
  // ...
})
export class ExampleComponent {
  // ...
}
```

OnPushを使用することで：
- 不要な変更検知が発生しない
- パフォーマンスが大幅に向上
- CPU使用率が低下
- バッテリー消費が減少

## 📚 参考リンク

- [Angular公式ドキュメント - Change Detection](https://angular.dev/guide/change-detection)
- [OnPush Change Detection Strategy](https://angular.dev/guide/change-detection#onpush)

## 🎬 動画での使い方

1. このアプリを起動
2. パフォーマンスモニターで変更検知の回数を確認
3. ブラウザの開発者ツールでパフォーマンスを計測
4. OnPushを使った正しい実装と比較
5. 「でも動くんだよね」で締める

---

**「でも動くんだよね」を合言葉に、Angularのクソ実装を楽しみながら学ぶ！**
