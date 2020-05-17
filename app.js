const express = require('express');
const app = express();

// express.staticというミドルウェアを使用する。
// 絶対パス指定することができる(ルートパスを指定できる)
app.use(express.static(__dirname + '/public'));

// public
// /public以下のファイルにpublicをマッピングするという指定になる
// 静的ファイルの読み込みも変更になるので注意。
// app.use('/public', express.static(__dirname + '/public'));

app.listen(3000)