var generator = require('../libraries/generator.js');

module.exports = function(meong) {
    meong.post('/masuk', function(req, res) {
        // FIXME datanya masih bersifat lokal dan sementara
        var data = require('../dummy/users.json');
        var username = req.body.username;
        var password = req.body.password;
        for(var index in data) {
            if (username == index && password == data[index].password) {
                req.session.user = {
                    user: username,
                    token: generator.ambilToken()
                };
                return res.redirect('/rumah');
            }
        }
        return res.send({masuk: "GAGAL"});
    });
};
