# NodeJS Web Server

NodeJS tabanlı basit bir web server.

Http modülünü projemize dahil ediyoruz ve sabit olarak portumuzu 3000 olarak atıyoruz.
```sh
var http = require("http");
const port = 3000; 
```

http.createServer methodu ile sunucumuzu oluşturuyoruz ve gelen isteklere cevap olarak "Merhaba Dunya" yazısını döndürüyoruz.
```sh
var server = http.createServer(function (req, res) {
    res.end('Merhaba Dunya');
});
```

Ve son olarak sunucumuzu belirttiğimiz porttan dinleme moduna alıyoruz ve porta gelecek olan istekleri bekliyoruz.
```sh
server.listen(port, function () {
    console.log("Sunucu %s portundan dinleniyor...", port);
});
```

Terminal ekranından projenin klasörüne gidip
```sh
node app.js
```
komutu ile projeyi çalıştırabilirsiniz.

### Mantık
Uygulamamızın varsayılan modüllerden biri olan http'yi dahil edip createServer methodu ile sunucumuzu oluşturuyoruz. Bunun ardından portumuzu dinlemeye alıyoruz ve gelen isteklere cevap olarak "Merhaba Dunya" yazısını döndürüyoruz. Express yada FS gibi modüller ile bu sunucu daha da geliştirilebilir. 

