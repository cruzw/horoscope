[![npm version](https://badge.fury.io/js/horoscope.svg)](https://badge.fury.io/js/horoscope)
![badge](https://travis-ci.org/gcwelborn/horoscope.svg?branch=master)
```
$ npm install horoscope
# var horoscope = require('horoscope');
```
horoscope currently has two functions:

** parse astrological sign from birth month and birth day **
```
$ horoscope.getSign(7, 25);
# 'Leo'

$ horoscope.getSign(12, 21);
# 'Sagittarius'

$ horoscope.getSign(1, 18);
# 'Capricorn'
```

** parse zodiac sign from birth year **
```
$ horoscope.getZodiac(1992);
# 'Monkey'

$ horoscope.getZodiac(1953);
# 'Snake'
```
