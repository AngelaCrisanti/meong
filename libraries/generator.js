var _ = require('lodash');
var generator = {};

generator.s4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
};

generator.ambilToken = function() {
    return (this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+this.s4());
};

_.map(generator, function(value, index) {
    exports[index] = value;
});
