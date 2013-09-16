module.exports = function(meong) {
    meong.get('/', function(req, res) {
        res.render('index', {});
    });
};
