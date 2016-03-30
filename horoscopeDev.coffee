#		Get Astrological Sign from Birthday MONTH and Birthday DAY.
#		@throws {Error} if month is not between 1-12.
#		@throws {Error} if day is not between 1-31.
#		@param   {number} month birth month.
#		@param   {number} day   birth day.
# 	@param {boolean} overrideErrors true returns null if month or day isn't valid, false throws error
#		@returns {string} Astrological Sign.

getSign = (month, day, overrideErrors = false) ->
	if overrideErrors
		if birthdayIsntValid(month, day)
			return null
		else
			return handleMonths[month](day)
	else
		if birthdayIsntValid(month, day)
			errorMessage = 'Horoscope.js/getSign(): month should be numbers 1-12 and days should be numbers between 1-31 depending on month length'
			throw new Error(errorMessage)
		else
			return handleMonths[month](day)

# object lookup determining sign for particular month
handleMonths =
	1: (day) -> if day <= 19 then return 'Capricorn' else return 'Aquarius'
	2: (day) -> if day <= 18 then return 'Aquarius' else return 'Pisces'
	3: (day) -> if day <= 20 then return 'Pisces' else return 'Aries'
	4: (day) -> if day <= 19 then return 'Aries' else return 'Taurus'
	5: (day) -> if day <= 20 then return 'Taurus' else return 'Gemini'
	6: (day) -> if day <= 20 then return 'Gemini' else return 'Cancer'
	7: (day) -> if day <= 22 then return 'Cancer' else return 'Leo'
	8: (day) -> if day <= 22 then return 'Leo' else return 'Virgo'
	9: (day) -> if day <= 22 then return 'Virgo' else return 'Libra'
	10: (day) -> if day <= 22 then return 'Libra' else return 'Scorpio'
	11: (day) -> if day <= 21 then return 'Scorpio' else return 'Sagittarius'
	12: (day) -> if day <= 21 then return 'Sagittarius' else return 'Capricorn'


#object containing valid date ranges for months
monthDayRange =
	1: 31
	2: 29
	3: 31
	4: 30
	5: 31
	6: 30
	7: 31
	8: 31
	9: 30
	10: 31
	11: 30
	12: 31

# validate if month and day passed to getSign are valid
birthdayIsntValid = (m, d) ->
	if typeof m != 'number' || typeof d != 'number' || m < 1 || m > 12 || d < 1 || d > monthDayRange[m]
		throw new Error('Please enter a valid date to reference')
		return true
	else return false

	# Gets Zodiac sign from birth year.
	# @throws {Error} if year is not defined or it's length isn't four.
	# @param {number} year birth year.
	# @param {boolean} overrideErrors true returns null if year isn't valid, false throws error
	# @returns {string} Zodiac Animal.

getZodiac = (year, overrideErrors = false) ->
	if overrideErrors
		if yearIsntValid(year)
			return null
		else
			return ZodiacArray[year % 12]
	else
		if yearIsntValid(year)
			errorMessage = 'Year isnt valid'
			throw new Error(errorMessage)
		else
			return ZodiacArray[year % 12]

# array ofzodiac animals
ZodiacArray = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat']

# validate if month and day passed to getSign are valid
yearIsntValid = (year) ->
	if !year || typeof year != 'number' || year.toString().length != 4
		return true
	else return false

module.exports.getSign = getSign
module.exports.getZodiac = getZodiac
