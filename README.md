# QuickMPC-SDK

## Install Package

```
$ cd QuickMPC-SDK
$ npm ci
```


## Test

```
$ npm test
$ npm test -- --coverage // coverage included
```

### Build

```
$ npm run build
$ npm run tsc // generate type definition files
```

### Publish
Refer: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token

Set your personal access token in `~/.npmrc`.

```
//npm.pkg.github.com/:_authToken=TOKEN
```

```
$ npm publish
```

## Node.js version
v12.18.4
