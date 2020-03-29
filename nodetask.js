var http = require('http')
var fs = require('fs')
fs.writeFile('Message.txt', 'nodetask', function(err) {

    if (err) throw err;
    console.log('File is created successfully');
});
http.createServer(function(req, res, ) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`form action="/message" method="POST">
               Message: <input type="text" name="message">
               <input type="submit">
`);
    res.end();
}).listen(8080)