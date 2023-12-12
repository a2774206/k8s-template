const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // 解析请求的 URL
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    // 获取回调函数名
    const callback = parsedUrl.query.callback;

    // 返回 JSONP 格式的响应
    const responseData = { message: 'k8s测试后端服务已启动!' };
    const jsonResponse = `${callback}(${JSON.stringify(responseData)})`;

    // 设置响应头
    res.writeHead(200, {
      'Content-Type': 'application/javascript;text/plain; charset=utf-8',
	  
      'Access-Control-Allow-Origin': '*', // 允许所有域的请求，生产环境中应该根据需求设置允许的域名
    });
    // 发送响应
    res.end(jsonResponse);
  } else {
    // 处理其他请求
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

