var express = require('express');
var http = require('http');
var path = require('path');

var meong = express();

meong.enable('jsonp callback');
meong.set('port', process.env.PORT || 3000);
meong.set('views', __dirname + '/views');
meong.set('view engine', 'ejs');
meong.use(express.favicon(__dirname + '/public/img/icon.png'));
meong.use(express.logger('dev'));
meong.use(express.bodyParser());
meong.use(express.methodOverride());
meong.use(express.cookieParser("password"));
meong.use(express.session({
    cookie: {
        expires : new Date(Date.now() + 1000 * 60)
    },
    secret: "password",
    key: 'express.sid'
}));
meong.use(meong.router);
meong.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index.js')(meong);
var rumah = require('./routes/rumah.js')(meong);
var login = require('./routes/masuk.js')(meong);
var daftar = require('./routes/daftar.js')(meong);

http.createServer(meong).listen(meong.get('port'), function(){
    console.log("");
    console.log('Server Meong jalan di port: ' + meong.get('port'));
    console.log("");
});
