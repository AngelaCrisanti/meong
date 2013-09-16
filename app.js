var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.enable('jsonp callback');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon(__dirname + '/public/img/icon.png'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser("password"));
app.use(express.session({
    cookie: {
        expires : new Date(Date.now() + 1000 * 60)
    },
    secret: "password",
    key: 'express.sid'
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index.js')(app);
var rumah = require('./routes/rumah.js')(app);
var login = require('./routes/masuk.js')(app);
var daftar = require('./routes/daftar.js')(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log("");
    console.log('Server Meong jalan di port: ' + app.get('port'));
    console.log("");
});
