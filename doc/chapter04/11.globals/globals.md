## global変数の扱いの違い
### Node.js
- global
- モジュール内では利用可能
- モジュール間では利用不可

### blowser
- window
- モジュール内、モジュール間でも利用可能

## グローバルで使えるオブジェクト
- コンソール  
    console
- モジュール関連  
    exports, module
- プロセス  
    process

## グローバルで使えるメソット
- モジュール関連  
    require()

## processオブジェクト
- 引数 `process.argv` 配列
- 環境変数 `process.env` オブジェクト
- ワークディレクトリ `process.cwd()` メソッド