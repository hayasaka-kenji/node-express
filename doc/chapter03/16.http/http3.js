const http = require('http');
const server = http.createServer();
server.on('request', (request, response) => { 

  // レスポンスの作成

  // 表示内容の定義
  const data = 'hello-world3';

  response.writeHead(200, {
    'Content-Length': Buffer.byteLength(data), // 戻り値に関して記載
    'Content-Type': 'text/plain'
  });

  response.write(data, 'utf8');  // レスポンスボディを記載
  response.end();
});
server.listen(3000);