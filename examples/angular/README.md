# Angular クソ実装サンプル

このディレクトリには、Angularのクソ実装を実演するサンプルアプリケーションが含まれています。

## 📁 サンプル一覧

### 1. no-onpush-app
**ChangeDetectionStrategy.OnPushを全く使わないアプリケーション**

- デフォルトのChangeDetectionStrategyで全コンポーネントを実装
- パフォーマンスがどれだけ悪化するか実演
- 「でも動くんだよね」シリーズ

詳細は [no-onpush-app/README.md](./no-onpush-app/README.md) を参照してください。

## 🚀 各サンプルの起動方法

各サンプルアプリのディレクトリに移動して、以下のコマンドを実行：

```bash
cd <サンプル名>
npm install
npm start
```

## 📝 今後の予定

以下のサンプルアプリを順次追加予定：

- [ ] RxJSのsubscribe地獄
- [ ] Angular Materialを一切使わずにUIライブラリを自作
- [ ] 依存性注入を完全に無視したAngularアプリ
- [ ] Angular CLIを使わずに手動でビルド設定を書く

---

**「でも動くんだよね」を合言葉に、Angularのクソ実装を楽しみながら学ぶ！**
