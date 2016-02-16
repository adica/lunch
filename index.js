var express = require('express');
var app = express();
var random = require('./services/random-selection.js');
// var request_lib = require('request');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/lunch', function(request, response, next) {
  //response.send("Today we eat at El-Gaucho!!");
  random.randomSelect(request, response, next);
});

app.post('/eat', function(request, response, next) {
  response.send(request.body.user_name + ',' + request.body.text);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


