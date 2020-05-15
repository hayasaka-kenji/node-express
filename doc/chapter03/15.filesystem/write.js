const fs = require('fs'); // fsモジュールの読み込み

const data = 'hello world'
fs.writeFile('./data/hello.txt', data, (error) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log('done');
})