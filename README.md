# Angularクソチャンネル 🎬

Angularの機能を本来の使い方から逸脱した「クソみたいな使い方」で紹介するYouTubeチャンネルとWebサイトのリポジトリです。

## 📺 チャンネルコンセプト

原神クソビルドでお馴染みのYoutuber「あろんさん」をイメージとした、Angularの機能を意図的に間違った使い方や非推奨な方法で紹介し、視聴者に「こんな使い方もあるのか！」「これは絶対やっちゃダメだな」と楽しみながら学んでもらうエンターテイメント性の高い技術チャンネル。

**合言葉：「でも動くんだよね」**

## 🎯 対象範囲

- **Angular**: フレームワークの機能を本来の意図とは異なる方法で使用
- **Test**: テストコードを書かないテスト、メタテスト地獄など
- **Microfrontend**: 過度に細分化されたマイクロフロントエンド構成
- **Nx**: モノレポを複雑にしすぎる構成、依存関係地獄

## 📁 プロジェクト構成

```
angular-chanel/
├── 企画案.md              # 詳細な企画案
├── README.md              # このファイル
├── web/                   # Webサイト（Angularアプリケーション）
│   ├── src/
│   │   └── app/
│   │       ├── components/    # コンポーネント
│   │       │   ├── home/      # ホームページ（チャンネル紹介）
│   │       │   ├── video-list/ # 動画一覧
│   │       │   ├── video-detail/ # 動画詳細
│   │       │   └── navigation/  # ナビゲーション
│   │       ├── services/      # サービス
│   │       │   └── video.ts   # 動画データ管理
│   │       └── models/        # データモデル
│   │           └── video.model.ts
│   └── package.json
├── examples/              # クソ実装のコード例
│   └── angular/
│       ├── README.md      # Angularサンプル一覧
│       └── no-onpush-app/ # OnPushを使わないアプリ（完成）
│           ├── README.md  # 詳細な説明
│           └── src/       # ソースコード
├── test/                  # テスト関連のサンプル（今後作成）
├── microfrontend/         # マイクロフロントエンドのサンプル（今後作成）
└── nx/                    # Nx関連のサンプル（今後作成）
```

## 🚀 セットアップ

### 必要な環境
- Node.js (v18以上推奨)
- npm または yarn

### Webサイトの起動方法

```bash
# Webサイトディレクトリに移動
cd web

# 依存関係のインストール（初回のみ）
npm install

# 開発サーバーの起動
npm start

# ブラウザで http://localhost:4200 を開く
```

### ビルド

```bash
# プロダクションビルド
npm run build

# ビルド結果は dist/web/ に出力されます
```

## 🎬 サンプルアプリケーション

### OnPushを使わないアプリ（完成）

企画案の最初の動画用のサンプルアプリが完成しています。

```bash
# サンプルアプリの起動
cd examples/angular/no-onpush-app
npm install
npm start
```

詳細は [examples/angular/no-onpush-app/README.md](./examples/angular/no-onpush-app/README.md) を参照してください。

このアプリでは：
- ChangeDetectionStrategy.OnPushを全く使わない実装
- パフォーマンスの悪化を実演
- 変更検知の回数をリアルタイムで表示
- 「でも動くんだよね」を実証

## 🚀 今後の予定

詳細は[企画案.md](./企画案.md)を参照してください。

### Phase 1: 基盤構築
- リポジトリのセットアップ
- Webサイトの基本構成
- 最初のAngularクソ実装動画

### Phase 2-4: コンテンツ拡充
- 各カテゴリでの動画制作
- Webサイトとの連動
- 継続的なコンテンツ制作

## 📝 ライセンス

このプロジェクトは教育・エンターテイメント目的で作成されています。

## 🤝 コントリビューション

「こんなクソ実装やってほしい」というリクエストや、実際に見つけたクソ実装の共有を歓迎します！

---

**「でも動くんだよね」を合言葉に、Angularのクソ実装を楽しみながら学ぶチャンネル！**
