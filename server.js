var express = require('express');
var app = express();
var port = 4848;

app.use(express.static(__dirname + '/'));
app.listen(4848);

console.log('running on '+ port);
