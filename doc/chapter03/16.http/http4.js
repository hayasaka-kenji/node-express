const http = require('http');
const server = http.createServer();
server.on('request', (request, response) => { 

  // リクエストの分析
  const data = '';
  console.log(`METHOD : ${request.method}`);
  console.log(`URL    : ${request.url}`);
  console.log(`HEADER : `);

  // キーバリュー型のなのでforで取り出し
  for (let key in request.headers) {
    console.log(`  ${key} : ${request.headers[key]}`);
  }
  // ストリーム型を組み立てさせる
  request.on("data", (chunk) => {
    data += chunk;
  });
  // エンドを実行させる
  request.on("end", () => {
    console.log(data);
  });

  // レスポンスの作成
  response.end("OK");

});
server.listen(3000);

// 実行すると結果を表示することができる。
// GETのアクセスに関して faviconを呼び出されるので2回実行されるように見える。
// POSTでアクセスしても別の結果が得られる