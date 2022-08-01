# QuickMPC-SDK

## Install Package

```
$ cd QuickMPC-SDK
$ npm ci
```


## Test

```
$ npm test
$ npm test -- --coverage // カバレッジ付き
```

### Build

```
$ npm run build // 本体
$ npm run tsc // 型定義ファイルの生成
```

### Publish
参考: https://docs.github.com/ja/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token

個人アクセストークンを`~/.npmrc`に設定する。

```
//npm.pkg.github.com/:_authToken=TOKEN
```

```
$ npm publish
```

## Node.js version
v12.18.4
