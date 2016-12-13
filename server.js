var express = require('express');
var mongoose = require('mongoose');


var app = express();
app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.listen(3000);