## クッキー情報の取得
- express標準機能
```js
req.get('cookie')
```
単なる文字列しかとれない。
- cookie-parser ミドルウェア  
整形されたデータで使いやすい。
    - クッキーが存在する場合、パースされてオブジェクトとして設定
    - 数値やブーリアンにについては中が必要

## クッキー情報の設定
```js
res.cookie(name, value, [, options])
```
- name  
クッキー名
- value  
値
- options  
secureやmaxAgeなど、オプションを指定。