## ファイルの読み込み
```js
fs.readFile(path, encoding, (err, data)=>{})
```

- path  
読み込みファイルパス。
- encoding  
エンコード (shift_jisなどはデフォルトでは不可。モジュールを利用)
- (err, data)=>{}  
コールバック。読み込み完了時に呼び出される。

## ファイルの書き込み
```js
fs.writeFile(path, data, (err)=>{})
```

- path  
読み込みファイルパス。
- data  
エンコード (デフォルトはUTF-8で出力)
- (err)=>{}  
コールバック。読み込み完了時に呼び出される。