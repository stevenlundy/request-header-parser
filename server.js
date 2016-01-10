var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  var ipaddress = req.headers["x-forwarded-for"];
  var language = req.headers["accept-language"].split(';')[0].split(',')[0];
  var software = req.headers["user-agent"].match(/\((.+?)\)/)[1];
  
  res.send({
    "ipaddress": ipaddress,
    "language": language,
    "software": software
  });
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
})