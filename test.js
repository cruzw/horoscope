var horoscope = require('./fasterVersion_WIP');

var testArray = [
    ['Capricorn', [12, 23]],
    ['Capricorn', [1, 20]],


    ['Aquarius', [1, 21]],
    ['Aquarius', [2, 19]],


    ['Pisces', [2, 20]],
    ['Pisces', [3, 20]],


    ['Aries', [3, 21]],
    ['Aries', [4, 20]],


    ['Taurus', [4, 21]],
    ['Taurus', [5, 21]],


    ['Gemini', [5, 22]],
    ['Gemini', [6, 21]],


    ['Cancer', [6, 22]],
    ['Cancer', [7, 22]],


    ['Leo', [7, 23]],
    ['Leo', [8, 21]],


    ['Virgo', [8, 22]],
    ['Virgo', [9, 23]],


    ['Libra', [9, 24]],
    ['Libra', [10, 23]],


    ['Scorpio', [10, 24]],
    ['Scorpio', [11, 22]],


    ['Sagittarius', [11, 23]],
    ['Sagittarius', [12, 22]]
];

console.time('test');
testArray.forEach(function (test) {
    'use strict';
    if (horoscope.getSign(test[1][0], test[1][1]) !== test[0]) {
        console.log(test + " : NOT PASSING");
    } else {
        console.log(test + " : passing");
    }
});
console.timeEnd('test');