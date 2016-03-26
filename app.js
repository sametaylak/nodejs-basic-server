var http = require("http");

const port = 3000; 

var server = http.createServer(function (req, res) {
    res.end('Merhaba Dunya');
});

server.listen(port, function () {
    console.log("Sunucu %s portundan dinleniyor...", port);
});