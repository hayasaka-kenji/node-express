# 静的ファイルの配信
```js
express.static(route [, options])
```
- route  
配信したい静的ファイルが配置してあるサーバーサイドのルートパス
- options
    - etag
    - lastModified
    - maxAge

## 実際の記述
```js
// express.staticというミドルウェアを使用する。
// 絶対パス指定することができる(ルートパスを指定できる)
app.use(express.static(__dirname + '/public'));

// /public以下のファイルにpublicをマッピングするという指定になる
// 静的ファイルの読み込みも変更になるので注意。
app.use('/public', express.static(__dirname + '/public'));
```