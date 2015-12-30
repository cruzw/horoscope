var test = require('tape');
var horoscope = require('./horoscope');

horoscope.getSign(7, 25) //'Leo'

test('check Leo', function (t) {
    t.plan(1);
    t.equal(horoscope.getSign(7, 25), 'Leo');
    t.end();
});
