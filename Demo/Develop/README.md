# デモ実行方法
webpackでビルドし, ホスティングサーバを起動
```
$ cd Demo/Develop
$ npx webpack --config webpack.config.js
$ node Server.js
```
http://localhost:8080/Client.html にアクセスし, デモを行う。

# 計算実行の例
## 相関係数
### data1-1.csv, data1-2.csvを使用する場合
結合後のデータの1,2,3列目と4列目のデータで相関係数を計算  
methodID: 4, join: 0(横結合), src: 1,2,3, target: 4  
真値: [0.9955373070165678,-0.19285423380900796,0.04418931930719586]