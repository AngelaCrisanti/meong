var S4 = function () {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
};

var mintaToken = function() {
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};

module.exports = function(app) {
    app.post('/masuk', function(req, res) {
        // FIXME datanya masih bersifat lokal dan sementara
        var data = require('../dummy/users.json');
        var username = req.body.username;
        var password = req.body.password;
        for(var index in data) {
            if (username == index && password == data[index].password) {
                req.session.user = {
                    user: username,
                    token: mintaToken()
                };
                return res.redirect('/rumah');
            }
        }
        return res.send({masuk: "GAGAL"});
    });
};
