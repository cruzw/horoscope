import { getSign, getZodiac } from 'horoscope';

// const getSign = require('horoscope').getSign;
// const getZodiac = require('horoscope').getZodiac;

let testYear = 1992;

let testDayMonth = {
	day: 25,
	month: 7
}

console.log(getSign(testDayMonth));

console.log(getZodiac(testYear));
