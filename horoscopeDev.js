'use strict'
	/**
	 * Get Astrological Sign from Birthday MONTH and Birthday DAY.
	 * @throws {Error} if month is not between 1-12.
	 * @throws {Error} if day is not between 1-31.
	 * @param   {number} month birth month.
	 * @param   {number} day   birth day.
	 * @returns {string} Astrological Sign.
	 */
	let getSign = (month, day) => {
		if (typeof month !== 'number' || typeof day !== 'number') throw new Error('HOROSCOPE.JS - getSign: month/day need to be numbers')
		if (month < 1 || month > 12) throw new Error('HOROSCOPE.JS - getSign: month needs to be between greater than 1, less than 12')
		if (day < 1 || day > 31) throw new Error('HOROSCOPE.JS - getSign: day cant be zero, negative, or greater than than 31')
		let monthToSignFunctions = [null,
	    day => (day <= 19) ? 'Capricorn' : 'Aquarius',
	    day => (day <= 18) ? 'Aquarius' : 'Pisces',
	    day => (day <= 20) ? 'Pisces' : 'Aries',
	    day => (day <= 19) ? 'Aries' : 'Taurus',
	    day => (day <= 20) ? 'Taurus' : 'Gemini',
	    day => (day <= 20) ? 'Gemini' : 'Cancer',
	    day => (day <= 22) ? 'Cancer' : 'Leo',
	    day => (day <= 22) ? 'Leo' : 'Virgo',
	    day => (day <= 22) ? 'Virgo' : 'Libra',
	    day => (day <= 22) ? 'Libra' : 'Scorpio',
	    day => (day <= 21) ? 'Scorpio' : 'Sagittarius',
	    day => (day <= 21) ? 'Sagittarius' : 'Capricorn'
	  ]
		return monthToSignFunctions[month](day)
	};
	/**
	 * Gets Zodiac sign from birth year.
	 * @throws {Error} if year is not defined or it's length isn't four.
	 * @param {number} year birth year.
	 * @returns {string} Zodiac Animal.
	 */
	let getZodiac = (year) => {
		if (!year || typeof year !== 'number') throw new Error('HOROSCOPE.JS - getZodiac: year needs to be a number')
		if (year.toString().length !== 4) throw new Error('HOROSCOPE.JS - getZodiac: year needs to be four digits long')
		let ZodiacArray = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat']
		return ZodiacArray[year % 12]
	};

	/**
	 * Gets Horoscope.com prediction from astrological sign.
	 * @throws {Error} if astrological sign isn't a valid sign.
	 * @param {string} sign Astrological Sign.
	 * @returns {string} Horoscope.com prediction for given sign.
	 */
let getPrediction = (sign, callback) => {
		const
 request = require('request')
		const cheerio = require('cheerio')
		let astrologicalSigns = {
			'aries': 1,
			'taurus': 2,
			'gemini': 3,
			'cancer': 4,
			'leo': 5,
			'virgo': 6,
			'libra': 7,
			'scorpio': 8,
			'sagittarius': 9,
			'capricorn': 10,
			'aquarius': 11,
			'pisces': 12
		}
		let baseURL = 'http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign='
		request.get(baseURL + astrologicalSigns[sign.toLowerCase()], (error, response, html) => {
			let err = error || undefined
			if (!error && response.statusCode == 200) {
				let $ = cheerio.load(html)
				let prediction = $('.block-horoscope-text', 'div')
				callback(err, prediction.text())
			}
		})
	};




module.exports = { getSign, getZodiac, getPrediction }
