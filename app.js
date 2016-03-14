"use strict";
var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let methodOverride = require('method-override');
let session = require('express-session');
var multer  = require('multer');
var jade = require('jade');
var _ = require('underscore');

var app = express();

// view engine setup
app.set('view engine', 'jade');
app.set('port', 8585);
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(methodOverride());
//app.use(session({ resave: true, saveUninitialized: true,secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(require('node-sass-middleware')({
//  src: path.join(__dirname, 'public'),
//  dest: path.join(__dirname, 'public'),
//  indentedSyntax: true,
//  sourceMap: true
//}));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

app.post('/logins', function (req, res){
  let mesege = _.values(req.body);
        console.log(mesege);
  res.render('login',
      { title: 'Успешная регестрация',
        loginName: mesege[0],
        password: mesege[1]
      });

});
app.post('/data.json', function (req, res){
    res.sendfile(__dirname + '/data/data.json');
});
app.post('/data2.json', function (req, res){
    res.sendfile(__dirname + '/data/data2.json');
});
app.get('/data.json', function (req, res){
    res.sendfile(__dirname + '/data/data.json');
});
//app.use('/users', users);

let server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
module.exports = app;