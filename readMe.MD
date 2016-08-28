[![npm version](https://badge.fury.io/js/horoscope.svg)](https://badge.fury.io/js/horoscope)
[![Build Status](https://travis-ci.org/gcwelborn/horoscope.svg?branch=master)](https://travis-ci.org/gcwelborn/horoscope)

♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️

[![NPM](https://nodei.co/npm/horoscope.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/horoscope/)

Horoscope.js is a compact, performant NPM module for processing horoscope & zodiac signs from dates. Weighing in @ 5kb, it's only dependency is the memoize function in lodash.

#### installation
```javascript
$ npm install horoscope
// then
var getSign = require('horoscope').getSign;
var getZodiac = require('horoscope').getZodiac;
// or
import { getSign, getZodiac } from 'horoscope';
```

#### getSign
return astrological sign from {month, day}
```javascript
console.log(horoscope.getSign({month: 7, day: 25 }))
// 'Leo'

console.log(horoscope.getSign({month: 12, day: 21}))
// 'Sagittarius'
```

#### getZodiac
return zodiac sign from year
```javascript
console.log(horoscope.getZodiac(2015))
// 'Goat'

console.log(horoscope.getZodiac(2016))
// 'Monkey'
```

##### overrideErrors
the last argument of both functions, overrideErrors, is optional (defaulting to false).
if set to true, horoscope methods will not throw error messages, but return null.
```javascript

console.log(horoscope.getSign(-7, 55))
// 'Horoscope.js/getSign(): month should be numbers 1-12 and days should be numbers between 1-31'

console.log(horoscope.getSign(-7, 55, true))
// null

console.log(horoscope.getZodiac('twenty-twenty'))
// 'Horoscope.js/getZodiac(): Year provided isn't valid'

console.log(horoscope.getZodiac('twenty-twenty', true))
// null
```

#### example:
simple demo using webpack, the result of which is located @ [here](http://cruzwelborn.com/horoscope)

#### limitations:
* getZodiac: returns errors/null if negative or more than 4 digits
* getHoroscope: leap year of feb. 29th is available for every year - don't assume a null/error will be thrown.
* because both functions are memoized, you will not be able to alternate between true/false for overrideErrors.
