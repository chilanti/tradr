var express = require('express');
var app = express();
app.get('/tradr', function (req, res) {
	  res.send('hello world')
	});
module.exports = app;