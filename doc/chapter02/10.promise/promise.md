# Promise
- ES2015で登場した非同期処理の完了または失敗を表現するクラス。

### 構文
```js
new Promise(process)
```

### 引数(process)
```js
function(resolve, rejected){}
```

## Promise.then()
インスタンスメソッド。  
resolve, rejectedが実行されると読み込まれる。

### 構文
```js
Promise.prototype.then(onfullfiled,onrejected)
```
onfullfiled フルフィルド。function(value)に渡す。  
onrejected リジェクテド。function(reason)に渡す。
### 引数

## Promise.catch()
なにかしらエラーが有った際に、読み込まれる。

### 構文
### 引数

Practice