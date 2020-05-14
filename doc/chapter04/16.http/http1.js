const http = require('http');

// 引数はコールバック関数として考えてもいい
http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('hello-world.1'); // 内容はhelloworldと出力
}).listen(3000);