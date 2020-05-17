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