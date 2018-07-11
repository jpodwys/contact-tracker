var express = require('express'),
  compress = require('compression'),
  app = express(),
  forceSsl = require('force-ssl-heroku'),
  PORT = process.env.PORT || 3030;

// // Keep the dyno awake
// var http = require('http');
// setInterval(function() {
//   http.get('https://riot-demo.herokuapp.com');
// }, 900000); // Every 15 minutes

app.disable('x-powered-by');
app.use(forceSsl);
app.use(compress({threshold: '1.4kb'}));
app.use(express.static('docs', {maxAge: '0h'}));
app.use(function(req, res, next){
  res.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  next();
});

// app.get('/favicon.ico', function(req, res, next){
//   res.sendFile('favicon.ico', {root: './dist', maxAge: '30d'});
//   next();
// });

// app.get('/icon-192x192.png', function(req, res, next){
//   res.sendFile('icon-192x192.png', {root: './dist', maxAge: '30d'});
//   next();
// });

/* Catch-all view route */
app.get('/*', function(req, res){
  res.sendFile('index.html', {root: './docs', maxAge: '30d'});
});

var server = app.listen(PORT);
