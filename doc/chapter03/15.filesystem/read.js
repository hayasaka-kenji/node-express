// fsモジュールの読み込み
const fs = require('fs');

// ファイルを読み込む
fs.readFile('./data/sample.json', 'utf8', (error, data) => {
  if(error) {
    console.log(error.message);
    return;
  }
  console.log(data); // 読み込んだ文字列を出力
})