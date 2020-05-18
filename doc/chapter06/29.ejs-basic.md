# EJSの基本構文
### 開始タグ
- スクリプト `<%`
- 出力タグ `<%=`
- 出力タグ(アンエスケープ) `<%-`
- コメント `<%#`
### 終了タグ
- 終端 `%>`
- 終端タグ（改行削除） `-%>`
### その他
- エスケープ `<%%`  
EJSタグなどをエスケープするために使用。

## インクルード
```js
include(path [, locals])
```
- path  
テンプレートへのパス
- locals  
インクルード先へ渡したいデータ


## ejs-snippets
https://github.com/theranbrig/ejs-snippets