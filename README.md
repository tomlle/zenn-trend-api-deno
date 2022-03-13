# zenn-trend-api-deno
【非公式】Zennトレンド取得API。[Vercel Serverless funtions](https://vercel.com/docs/concepts/functions/serverless-functions) を使用。

# コマンド

## vercelのインストール

```bash
# グローバルにvercelをインストール
npm i -g vercel
# webサイト経由でログイン
vercel login
```
## ローカルサーバー起動

```bash
# パッケージのインストール
npm i
# ローカルサーバー起動
vercel dev --listen 5050
```

## ローカルで挙動確認

localhost:5050でサーバーが起動後、下記より各トレンドをjsonで取得出来ます。

```bash
# Tech
localhost:5050/api/trendTech

# Idea
localhost:5050/api/trendIdea

# Book
localhost:5050/api/trendBook
```
