var numeral = require('numeral');

var object = {
    randomNumber: function (min, max)
{
    return Math.floor(Math.random() * (1 + max - min) + min);
},
    convert: function (num) {
    return numeral(num).format('$0,0.00');
},
    balance: function (){
    return 'Account balance: \n'
}
};


module.exports = object;