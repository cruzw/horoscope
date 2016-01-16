'use strict'
let test = require('tape');
let horoscope = require('./horoscope');
///////////////////////       getSign      ///////////////////////////
let borderDates = {
	"January": [
		[19, 'Capricorn'],
		[20, 'Aquarius']
	],
	"February": [
		[18, 'Aquarius'],
		[19, 'Pisces']
	],
	"March": [
		[20, 'Pisces'],
		[21, 'Aries']
	],
	"April": [
		[19, 'Aries'],
		[20, 'Taurus']
	],
	"May": [
		[20, 'Taurus'],
		[21, 'Gemini']
	],
	"June": [
		[20, 'Gemini'],
		[21, 'Cancer']
	],
	"July": [
		[22, 'Cancer'],
		[23, 'Leo']
	],
	"August": [
		[22, 'Leo'],
		[23, 'Virgo']
	],
	"September": [
		[22, 'Virgo'],
		[23, 'Libra']
	],
	"October": [
		[22, 'Libra'],
		[23, 'Scorpio']
	],
	"November": [
		[21, 'Scorpio'],
		[22, 'Sagittarius']
	],
	"December": [
		[21, 'Sagittarius'],
		[22, 'Capricorn']
	]
}
let monthNums = {
	"January": 1,
	"February": 2,
	"March": 3,
	"April": 4,
	"May": 5,
	"June": 6,
	"July": 7,
	"August": 8,
	"September": 9,
	"October": 10,
	"November": 11,
	"December": 12,
}
for (let month in borderDates) {
	test('check ' + month, function(t) {
		t.plan(2)
		let monthNum = monthNums[month];
		let firstTestSign = borderDates[month][0][1]
		let firstTestDay = borderDates[month][0][0]
		t.equal(horoscope.getSign(monthNum, firstTestDay), firstTestSign);
		let secondTestSign = borderDates[month][1][1]
		let secondTestDay = borderDates[month][1][0]
		t.equal(horoscope.getSign(monthNum, secondTestDay), secondTestSign);
		t.end();
	})
}
///////////////////////       getZodiac      ///////////////////////////
let animalsToTest = {
	'Rat': [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
	'Ox': [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
	'Tiger': [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
	'Rabbit': [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
	'Dragon': [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
	'Snake': [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
	'Horse': [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
	'Goat': [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
	'Monkey': [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
	'Rooster': [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
	'Dog': [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
	'Pig': [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
}
for (let sign in animalsToTest) {
	test('check ' + sign, function(t) {
		t.plan(9)
		animalsToTest[sign].forEach(function(year) {
			t.equal(horoscope.getZodiac(year), sign);
		})
		t.end();
	})
}
