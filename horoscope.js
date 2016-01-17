/**
 * Get Astrological Sign from Birthday MONTH and Birthday DAY
 * @throws {Error} if month is not between 1-12
 * @throws {Error} if day is not between 1-31
 * @param   {number} month birth month
 * @param   {number} day   birth day
 * @returns {string} Astrological Sign
 */
exports.getSign = (month, day) => {
  'use strict'
  if (typeof month !== 'number' || typeof day !== 'number') throw new Error('HOROSCOPE.JS - getSign: month/day need to be numbers')
  if (month < 1 || month > 12) throw new Error('HOROSCOPE.JS - getSign: month needs to be between greater than 1, less than 12')
  if (day < 1 || day > 31) throw new Error('HOROSCOPE.JS - getSign: day cant be zero, negative, or greater than than 31')
  let monthToSignFunctions = [ null,
    (day) => (day <= 19) ? 'Capricorn' : 'Aquarius',
    (day) => (day <= 18) ? 'Aquarius' : 'Pisces',
    (day) => (day <= 20) ? 'Pisces' : 'Aries',
    (day) => (day <= 19) ? 'Aries' : 'Taurus',
    (day) => (day <= 20) ? 'Taurus' : 'Gemini',
    (day) => (day <= 20) ? 'Gemini' : 'Cancer',
    (day) => (day <= 22) ? 'Cancer' : 'Leo',
    (day) => (day <= 22) ? 'Leo' : 'Virgo',
    (day) => (day <= 22) ? 'Virgo' : 'Libra',
    (day) => (day <= 22) ? 'Libra' : 'Scorpio',
    (day) => (day <= 21) ? 'Scorpio' : 'Sagittarius',
    (day) => (day <= 21) ? 'Sagittarius' : 'Capricorn'
  ]
  return monthToSignFunctions[month](day)
}

/**
 * Gets Zodiac sign from birth year
 * @throws {Error} if year is not defined or it's length isn't four
 * @param {number} year birth year
 * @returns {string} Zodiac Animal
 */
exports.getZodiac = (year) => {
  'use strict'
  if (!year || typeof year !== 'number') throw new Error('HOROSCOPE.JS - getZodiac: year needs to be a number')
  if (year.toString().length !== 4) throw new Error('HOROSCOPE.JS - getZodiac: year needs to be four digits long')
  let ZodiacArray = [ 'Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat' ]
  return ZodiacArray[year % 12]
}
