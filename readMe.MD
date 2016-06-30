[![npm version](https://badge.fury.io/js/horoscope.svg)](https://badge.fury.io/js/horoscope)
[![Build Status](https://travis-ci.org/gcwelborn/horoscope.svg?branch=master)](https://travis-ci.org/gcwelborn/horoscope)

[![NPM](https://nodei.co/npm/horoscope.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/horoscope/)

Horoscope.js is a small yet performant node library for calculating astrological & zodiac signs from a birth-date.

install & require horoscope.
```javascript
$ npm install horoscope
// then
var horoscope = require('horoscope');
// or
import { getSign, getZodiac } from 'horoscope';
```

return astrological sign from (birth month, birth day)
```javascript
console.log(horoscope.getSign(7, 25))
// 'Leo'

console.log(horoscope.getSign(12, 21))
// 'Sagittarius'
```

return zodiac sign from (birth year)
```javascript
console.log(horoscope.getZodiac(2015))
// 'Goat'

console.log(horoscope.getZodiac(2016))
// 'Monkey'
```

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
