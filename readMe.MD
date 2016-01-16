[![npm version](https://badge.fury.io/js/horoscope.svg)](https://badge.fury.io/js/horoscope)
![badge](https://travis-ci.org/gcwelborn/horoscope.svg?branch=master)
```javascript
$ npm install horoscope
# var horoscope = require('horoscope');
```
horoscope currently has two functions:

1. parse astrological sign from birth month and birth day.
```javascript
horoscope.getSign(7, 25);
// 'Leo'

horoscope.getSign(12, 21);
// 'Sagittarius'
```

2. Parse zodiac sign from birth year.
```javascript
horoscope.getZodiac(2015);
// 'Goat'

horoscope.getZodiac(2016);
// 'Monkey'
```
