var express = require('express');
var app = express();


var data = [
    {
        "id": 1,
        "image": "http://articleimage.nicoblomaga.jp/image/27/2014/0/3/03f166027dece89cc7cef3e0358070b0be928cf51405599914.jpg",
        "title": "contents title1",
         "category": "news",
         "created": "2015-04-27 00:00:00"
    },
    {
        "id": 2,
        "image": "http://articleimage.nicoblomaga.jp/image/94/2013/2/2/223c75e7f8f085c0060f052deeaf4bf2f7b4580f1367560306.jpg",
        "title": "contents title2",
              "category": "news",
              "created": "2015-04-27 00:00:00"
    },
    {
      "id": 3,
      "image": "http://articleimage.nicoblomaga.jp/image/61/2015/a/2/a2ef79604f21c381a3665d48fedd88fb5d720c7e1428694782.jpg",
      "title": "contents title3",
      "category": "news",
      "created": "2015-04-27 00:00:00"
    }
];


app.get('/', function (req, res) {
  res.json(data);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
