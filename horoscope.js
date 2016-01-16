/**
 * Get Astrological Sign from Birthday MONTH and Birthday DAY
 * @throws {Error} if month is not between 1-12
 * @throws {Error} if day is not between 1-31
 * @param   {number} month birth month
 * @param   {number} day   birth day
 * @returns {string} Astrological Sign
 */

exports.getSign = function (month, day) {
  'use strict'
  let sign
  if (month < 1 || month > 12) throw new Error('month needs to be between 1-12')
  if (day < 1 || day > 31) throw new Error('check that day is not zero, negative, or greater than 31')
  let months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }
  let monthFunctions = {
    January: (day) => {
      (day <= 19) ? sign = 'Capricorn' : sign = 'Aquarius'
      return sign
    },
    February: (day) => {
      (day <= 18) ? sign = 'Aquarius' : sign = 'Pisces'
      return sign
    },
    March: (day) => {
      (day <= 20) ? sign = 'Pisces' : sign = 'Aries'
      return sign
    },
    April: (day) => {
      (day <= 19) ? sign = 'Aries' : sign = 'Taurus'
      return sign
    },
    May: (day) => {
      (day <= 20) ? sign = 'Taurus' : sign = 'Gemini'
      return sign
    },
    June: (day) => {
      (day <= 20) ? sign = 'Gemini' : sign = 'Cancer'
      return sign
    },
    July: (day) => {
      (day <= 22) ? sign = 'Cancer' : sign = 'Leo'
      return sign
    },
    August: (day) => {
      (day <= 22) ? sign = 'Leo' : sign = 'Virgo'
      return sign
    },
    September: (day) => {
      (day <= 22) ? sign = 'Virgo' : sign = 'Libra'
      return sign
    },
    October: (day) => {
      (day <= 22) ? sign = 'Libra' : sign = 'Scorpio'
      return sign
    },
    November: (day) => {
      (day <= 21) ? sign = 'Scorpio' : sign = 'Sagittarius'
      return sign
    },
    December: (day) => {
      (day <= 21) ? sign = 'Sagittarius' : sign = 'Capricorn'
      return sign
    }
  }
		// End of MonthFunc
  return monthFunctions[months[month]](day)
}

/**
 * Gets Zodiac sign from birth year
 * @param {number} year birth year
 * @returns {string} Zodiac Animal
 */
// Should also account for day of chinese new year (since it changes but is in february)

exports.getZodiac = function (year) {
  'use strict'
  return {
    0: 'Monkey',
    1: 'Rooster',
    2: 'Dog',
    3: 'Pig',
    4: 'Rat',
    5: 'Ox',
    6: 'Tiger',
    7: 'Rabbit',
    8: 'Dragon',
    9: 'Snake',
    10: 'Horse',
    11: 'Goat'
  }[year % 12]
}
