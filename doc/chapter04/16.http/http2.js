const http = require('http');

const server = http.createServer(); // createServerを保存

// onでリクエストメソッドを発行する
server.on('request', (request, response) => { 
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('hello-world.2', 'utf8');  // レスポンスボディを記載
  response.end();
});
server.listen(3000);