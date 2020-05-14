## http
- サーバー生成
サーバー生成をするスタティックメソッド。
```js
http.CreateServer()
```
- サーバー
スタティックメソッドを実行して得られるインスタンス。
http.Server
- レスポンス
http.ServerResponse
- リクエスト
http.server

## http.Server
- ヘッダー書き込み
res.writeHeader(status, header)
- ボディー書き込み
res.write(data)
- 書き込み完了
res.end()
必ず呼ぶようにする。（呼ばないとリクエストが帰ってこない。）

## http.IncomingMessage
- メソッド
req.method
- URL
req.url
- ヘッダー
req.headers (キーバリュー型のオブジェクト)
- ボディー
data で呼び出し。ストリーム型。