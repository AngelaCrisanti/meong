module.exports = function(meong) {
    meong.get('/rumah', function(req, res) {
        var ambilPesan = function() {
            if (req.session.user) return "Kamu udah masuk";
            return "Kamu belum masuk";
        };
        res.render('rumah', {
            pesan: ambilPesan()
        });
    });
};
