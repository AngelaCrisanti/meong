module.exports = function(meong) {
    meong.post('/daftar', function(req, res) {
        return res.send(req.body);
    });
};
