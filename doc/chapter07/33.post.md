## body-parser
- リクエストボディをパースしてreq.bodyへ保存  
つかやすくするミドルウェア

### bodyParser.urlencorded
```js
bodyParser.urlencorded([options])
```
- options
  - `extended`  
    false キーバリュー, true 複合型(json)

### bodyParser.json
```js
bodyParser.json([options])
```
- options
  - `type`  
  パースするcontent-typeを指定。