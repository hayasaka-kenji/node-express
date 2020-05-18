# テンプレートエンジン
- HTML出力を別ファイルから生成するエンジン

## 出力方法
```js
res.render(view [, locals]);
```
- view  
テンプレートファイルへのパス（デフォルトではviewsディレクトリ）
- locals  
テンプレートへ渡したいデータ（オブジェクト）

## 種類
```js
app.set('view engine', engine);
```
engineはテンプレートエンジン名を指定

## テンプレートエンジンの指定
|エンジン名|パッケージ名|特長|
|---|---|---|
|pug|pug|インデントでタグを指定、出力される値は`#{value}`|
|Effective JavaScript template|ejs|jspに似た記法。HTMLとほぼ同じ記載。|
|Hogan.js<br>ホーガンジェイエス|hjs|Twittter社が開発。Mustache互換。パースと分離して実行。<br>出力される値は`{{value}}`|
|handlebars|hbs|Hogan.jsと似ているが違いはヘルパー関数が有るか否か。|