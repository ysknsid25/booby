# booby

コントリビュートしやすそうな OSS プロジェクトを見つけるためのツールです。

# Getting Started

GitHub の設定ページから API へのアクセストークンを取得し、.env.example の GITHUB_ACCESS_TOKEN にセットします。

```bash
cd プロジェクトルート
cp .env.example .env
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) プロジェクトが確認できれば OK です。

# REST Client

VSCode の拡張機能に REST Client が入っている場合、`test.http`にて API テストが可能です。

その場合、拡張機能 > REST Client > 拡張機能の設定 > Rest-client: Environment Variables で setting.json を以下のように編集します。

```json
    "rest-client.environmentVariables": {
        "github_booby_api_key" : "your api key",
        "$shared": {}
    }
```

これで`test.http`から API のテストを行うことが可能です。

# icon

[Remix Icon](https://remixicon.com/)を利用しています。

Icon を追加する場合こちらからお願いします。
