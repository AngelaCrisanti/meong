module.exports = function(app) {
    app.get('/rumah', function(req, res) {
        var ambilPesan = function() {
            if (req.session.user) return "Kamu udah masuk";
            return "Kamu belum masuk";
        };
        console.log(req.session.user);
        res.render('rumah', {
            pesan: ambilPesan()
        });
    });
};
