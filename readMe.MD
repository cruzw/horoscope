[npm module](https://www.npmjs.com/package/horoscope)
[github link](https://github.com/gcwelborn/horoscope)

```
$ npm install horoscope --save-dev
# var horoscope = require('horoscope');
```

#### horoscope currently has two functions:

1. parse astrological sign from birth month and birth day

```
# horoscope.getSign(7, 25);
# 'Leo'
# horoscope.getSign(12, 21);
# 'Sagittarius'
# horoscope.getSign(1, 18);
# 'Capricorn'
```

2. parse zodiac sign from birth year

```
# horoscope.getZodiac(1992);
# 'Monkey'
# horoscope.getZodiac(1953);
# 'Snake'
```

Astrological Sign / Date Range:
```
Aquarius - January 21 - February 19
Pisces - February 20- March 20
Aries - March 21 - April 20
Taurus - April 21 - May 21
Gemini - May 22 - June 21
Cancer - June 22 - July 22
Leo - July 23 -August 21
Virgo - August 22 - September 23
Libra - September 24 - October 23
Scorpio - October 24 - November 22
Sagittarius - November 23 - December 22
Capricorn - December 23 - January 20
```

Zodiac Sign / Year Range:
```
Rat: 2008, 1996, 1984, 1972, 1960
Ox: 2009, 1997, 1985, 1973, 1961
Tiger: 2010, 1998, 1986, 1974, 1962
Rabbite: 2011, 1999, 1987, 1975, 1963
Dragon: 2012, 2000, 1988, 1976, 1964
Snake: 2013, 2001, 1989, 1977, 1965
Horse: 2014, 2002, 1990, 1978, 1966
Goat: 2015, 2003, 1991, 1979, 1967
Monkey: 2016, 2004, 1992, 1980, 1968
Rooster: 2017, 2005, 1993, 1981, 1969
Dog: 2018, 2006, 1994, 1982, 1970
Pig: 2019, 2007, 1995, 1983, 1971
```
