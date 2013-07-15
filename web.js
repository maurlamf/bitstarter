var express = require('express');
var fs = require('fs')
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    console.log('index')
  fs.readfile('index.html',function(error,data){
      response.write(data)
  });
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
