[![npm version](https://badge.fury.io/js/horoscope.svg)](https://badge.fury.io/js/horoscope)
[![Build Status](https://travis-ci.org/gcwelborn/horoscope.svg?branch=master)](https://travis-ci.org/gcwelborn/horoscope)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[![NPM](https://nodei.co/npm/horoscope.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/horoscope/)

Horoscope.js is a small javascript library for parsing astrological and zodiac signs from a birthdate.


* first install and require it.
```javascript
$ npm install horoscope

let horoscope = require('horoscope');
```

* parse astrological sign from birth month and birth day.
```javascript
console.log(horoscope.getSign(7, 25))
// 'Leo'

console.log(horoscope.getSign(12, 21))
// 'Sagittarius'
```

* Parse zodiac sign from birth year.
```javascript
console.log(horoscope.getZodiac(2015))
// 'Goat'

console.log(horoscope.getZodiac(2016))
// 'Monkey'
```
