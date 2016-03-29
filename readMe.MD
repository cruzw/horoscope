[![npm version](https://badge.fury.io/js/horoscope.svg)](https://badge.fury.io/js/horoscope)
[![Build Status](https://travis-ci.org/gcwelborn/horoscope.svg?branch=master)](https://travis-ci.org/gcwelborn/horoscope)

[![NPM](https://nodei.co/npm/horoscope.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/horoscope/)

Horoscope.js is a small javascript library for parsing astrological and zodiac signs from a birth-date.

Install and require horoscope.
```javascript
$ npm install [-g] horoscope
// then
var horoscope = require('horoscope');
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

the last argument of both functions is optional, defaulting to false.
if overrideErrors is set to true, horoscope methods will not throw error
messages, just return null.
```javascript

console.log(horoscope.getSign(-7, 55))
// Error!

console.log(horoscope.getSign(-7, 55, true))
// null

console.log(horoscope.getZodiac('twenty-twenty'))
// Error!

console.log(horoscope.getZodiac('twenty-twenty', true))
// null
```
