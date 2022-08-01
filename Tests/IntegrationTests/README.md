# テスト実行方法
## ClientTest
Envoyを起動
```
$ cd Tests/IntegrationTests/Envoy
$ docker-compose up
```

webpackでビルドし, サーバを起動
```
$ cd Tests/IntegrationTests/ClientTest
$ npx webpack --config webpack.config.js
$ ../../../node_modules/.bin/ts-node Server.ts
```
http://localhost:8080/Client.html にアクセスし, コンソールを確認する。