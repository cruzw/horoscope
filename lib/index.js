'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getZodiac = exports.getSign = undefined;

var _memoize2 = require('lodash/memoize');

var _memoize3 = _interopRequireDefault(_memoize2);

var _horoscopeData = require('./horoscopeData');

var _validating = require('./validating');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSign = exports.getSign = (0, _memoize3.default)(getHoroscopeSign);
var getZodiac = exports.getZodiac = (0, _memoize3.default)(getZodiacAnimal);

/**
 * gets Horoscope sign for given month/day
 * @param {number} month - number representing calendar month (1-12)
 * @param {number} day - number representing calendar day (1-31)
 * @param {boolean} overrideErrors - whether or not to throw error message or return null for non-valid
 * @return {string} sign - horoscope sign (i.e. 'Capicorn', 'Libra', 'Leo')
 */
function getHoroscopeSign(birthday, overrideErrors) {
	var month = birthday.month;
	var day = birthday.day;

	if (!overrideErrors) {
		overrideErrors = false;
	}
	if (overrideErrors) {
		if ((0, _validating.birthdayIsntValid)(month, day)) {
			return null;
		} else {
			return _horoscopeData.handleMonths[month](day);
		}
	} else {
		if ((0, _validating.birthdayIsntValid)(month, day)) {
			throw new Error("Horoscope.js/getSign: month should be numbers 1-12 and days should be numbers between 1-31");
		} else {
			return _horoscopeData.handleMonths[month](day);
		}
	}
}

/**
 * gets Zodiac animal for given year
 * @param {number} year - A year to get validated.
 * @param {boolean} overrideErrors - whether or not to throw error message or return null for non-valid
 * @return {string} sign - Zodiac sign (i.e. 'Monkey', 'Dragon')
 */
function getZodiacAnimal(year, overrideErrors) {
	if (!overrideErrors) {
		overrideErrors = false;
	}
	if (overrideErrors) {
		return (0, _validating.yearIsntValid)(year) ? null : _horoscopeData.ZodiacArray[year % 12];
	} else {
		if ((0, _validating.yearIsntValid)(year)) {
			throw new Error("Horoscope.js/getZodiac: Year provided isn't valid");
		} else {
			return _horoscopeData.ZodiacArray[year % 12];
		}
	}
}