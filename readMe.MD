[![npm version](https://badge.fury.io/js/horoscope@2x.png)](https://badge.fury.io/js/horoscope)
[![Build Status](https://travis-ci.org/gcwelborn/horoscope.svg?branch=master)](https://travis-ci.org/gcwelborn/horoscope)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[![npm downloads](https://img.shields.io/npm/dm/horoscope.svg)](https://img.shields.io)

[![NPM](https://nodei.co/npm/horoscope.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/horoscope/)

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
