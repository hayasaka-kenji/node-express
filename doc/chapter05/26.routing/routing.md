# routing
## 基本構文
```js
app.METHOD(PATH, CALLBACK)
```

- METHOD  
リクエストメソッド(get, post, put, deleteなど)
- PATH  
URLルーティングを指定
- CALLBACK  
PATHにマッチした動作を指定

## パス設定
### （名前付きパラメータ:オプション）
```js
app.get('/user/:id?', (req, res)=>{});
```

URLとマッチング
- o GET: /user =>(undefined)
- o GET: /user/
- o GET: /user/123
- o GET: /user/abc
- x GET: /user/abc/def

### （名前付きパラメータ:0以上
```js
app.get('/user/:id*', (req, res)=>{});
```

URLとマッチング
- x GET: /user
- x GET: /user/
- o GET: /user/123
- o GET: /user/abc
- o GET: /user/abc/def

### （名前付きパラメータ:1以上)
```js
app.get('/user/:id+', (req, res)=>{});
```

URLとマッチング
- x GET: /user
- x GET: /user/
- o GET: /user/123
- o GET: /user/abc
- x GET: /user/abc/def

### （名前付きパラメータ:数値)
```js
app.get('/user/:id(\\d+)', (req, res)=>{});
```

URLとマッチング
- x GET: /user
- x GET: /user/
- o GET: /user/123
- x GET: /user/abc
- x GET: /user/abc/def

### （名前無しパラメータ)
```js
app.get('/user/(\\d+)', (req, res)=>{});
```
上と比べてパラメータの引き渡しがなくなる

URLとマッチング
- x GET: /user
- x GET: /user/
- o GET: /user/123
- x GET: /user/abc
- x GET: /user/abc/def

## express.Router
```js
const router = express.Router();
```
- ルーティングモジュールを作成できる。
- 指定できる内容はルーティングに関わるもの。