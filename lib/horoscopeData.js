'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var monthDayRange = exports.monthDayRange = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};

var ZodiacArray = exports.ZodiacArray = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat'];

var handleMonths = exports.handleMonths = {
  1: function _(day) {
    if (day <= 19) {
      return 'Capricorn';
    } else {
      return 'Aquarius';
    }
  },
  2: function _(day) {
    if (day <= 18) {
      return 'Aquarius';
    } else {
      return 'Pisces';
    }
  },
  3: function _(day) {
    if (day <= 20) {
      return 'Pisces';
    } else {
      return 'Aries';
    }
  },
  4: function _(day) {
    if (day <= 19) {
      return 'Aries';
    } else {
      return 'Taurus';
    }
  },
  5: function _(day) {
    if (day <= 20) {
      return 'Taurus';
    } else {
      return 'Gemini';
    }
  },
  6: function _(day) {
    if (day <= 20) {
      return 'Gemini';
    } else {
      return 'Cancer';
    }
  },
  7: function _(day) {
    if (day <= 22) {
      return 'Cancer';
    } else {
      return 'Leo';
    }
  },
  8: function _(day) {
    if (day <= 22) {
      return 'Leo';
    } else {
      return 'Virgo';
    }
  },
  9: function _(day) {
    if (day <= 22) {
      return 'Virgo';
    } else {
      return 'Libra';
    }
  },
  10: function _(day) {
    if (day <= 22) {
      return 'Libra';
    } else {
      return 'Scorpio';
    }
  },
  11: function _(day) {
    if (day <= 21) {
      return 'Scorpio';
    } else {
      return 'Sagittarius';
    }
  },
  12: function _(day) {
    if (day <= 21) {
      return 'Sagittarius';
    } else {
      return 'Capricorn';
    }
  }
};