var http = require('http');
var index = require('../index');
//var numeral = require('numeral');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write(index.balance());
    res.write(index.convert(index.randomNumber(100,1000000)));
    res.end();
}).listen(process.env.PORT || 3000);