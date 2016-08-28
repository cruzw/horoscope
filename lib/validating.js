'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.yearIsntValid = yearIsntValid;
exports.birthdayIsntValid = birthdayIsntValid;

var _horoscopeData = require('./horoscopeData');

/**
 * Checks if year being passed to getZodiac is valid.
 * @param {number} year - A year to get validated.
 * @return {boolean} - if the year is valid or not.
 */
// NOTE: assumption being made that years are greater than or equal to 1000 A.D.
function yearIsntValid(year) {
	if (!year || typeof year != 'number' || year.toString().length > 4) {
		return true;
	} else {
		return false;
	}
}

/**
 * Checks if month and date combo being passed to getHoroscope is valid.
 * @param {number} year - A year to get validated.
 * @return {boolean} - if the year is valid or not.
 */
function birthdayIsntValid(m, d) {
	if (typeof m != 'number' || typeof d != 'number' || m < 1 || m > 12 || d < 1 || d > _horoscopeData.monthDayRange[m]) {
		return true;
	} else {
		return false;
	}
}