import { memoize } from 'lodash';
import { ZodiacArray, handleMonths } from './horoscopeData';
import { yearIsntValid, birthdayIsntValid } from './validating';

export const getSign = memoize(getHoroscopeSign);
export const getZodiac = memoize(getZodiacAnimal);

/**
 * gets Horoscope sign for given month/day
 * @param {number} month - number representing calendar month (1-12)
 * @param {number} day - number representing calendar day (1-31)
 * @param {boolean} overrideErrors - whether or not to throw error message or return null for non-valid
 * @return {string} sign - horoscope sign (i.e. 'Capicorn', 'Libra', 'Leo')
 */
function getHoroscopeSign(birthday, overrideErrors) {
	var { month, day } = birthday;
	if (!overrideErrors) {
		overrideErrors = false;
	}
	if (overrideErrors) {
		if (birthdayIsntValid(month, day)) {
			return null;
		} else {
			return handleMonths[month](day);
		}
	} else {
		if (birthdayIsntValid(month, day)) {
			throw new Error("Horoscope.js/getSign: month should be numbers 1-12 and days should be numbers between 1-31");
		} else {
			return handleMonths[month](day);
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
		return yearIsntValid(year) ? null : ZodiacArray[year % 12];
	} else {
		if (yearIsntValid(year)) {
			throw new Error("Horoscope.js/getZodiac: Year provided isn't valid");
		} else {
			return ZodiacArray[year % 12];
		}
	}
}
