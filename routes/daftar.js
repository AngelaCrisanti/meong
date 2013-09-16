module.exports = function(app) {
    app.post('/daftar', function(req, res) {
        return res.send(req.body);
    });
};
