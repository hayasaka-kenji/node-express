// 実行しているパスに変更したい
const path = require('path'); // path: ディレクトリなどのパスを取得するモジュール
const sourceFilePath = process.argv[1]; // 実行中のファイルパスを取得
const sourceFileDir = path.dirname(sourceFilePath); // ディレクトリのパスを取得できる。

console.log('実行したパス: ' + process.cwd());
// process.chdir(path.dirname(process.argv[1])); // chdirというメソッドで変更することができる。
// path.dirname(process.argv[1])はグローバルの変数を利用できる
process.chdir(__dirname);
console.log('移動したパス: ' + process.cwd());