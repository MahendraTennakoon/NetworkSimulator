var http = require('http');

http.createServer(function (req, res) {
  res.socket.setTimeout(1);
  res.socket.removeAllListeners('timeout');
//   res.socket.once('timeout', function () {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     setTimeout(() => {
//         res.end('Hello World\n');
//     }, 1000);
//   });
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('foo')
  setTimeout(() => {
    res.write('bar')
    // res.end('Hello World\n');
}, 2000);
}).listen(1337, '127.0.0.1');