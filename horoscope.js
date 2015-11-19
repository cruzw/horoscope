//lazy, non-performant way, still gets the job done
exports.getSign = function(month, day) {
  'use strict';
    var sign;
  if (month == 12 && day >= 22) {
      sign = "Capricorn";
  } else if (month == 1 && day <= 19) {
      sign = "Capricorn";
  } else if (month == 1 && day >= 20) {
      sign = "Aquarius";
  } else if (month == 2 && day <= 18) {
      sign = "Aquarius";
  } else if (month == 2 && day >= 19) {
      sign = "Pisces";
  } else if (month == 3 && day <= 20) {
      sign = "Pisces";
  } else if (month == 3 && day >= 21) {
      sign = "Aries";
  } else if (month == 4 && day <= 19) {
      sign = "Aries";
  } else if (month == 4 && day >= 20) {
      sign = "Taurus";
  } else if (month == 5 && day <= 20) {
      sign = "Taurus";
  } else if (month == 5 && day >= 21) {
      sign = "Gemini";
  } else if (month == 6 && day <= 20) {
      sign = "Gemini";
  } else if (month == 6 && day >= 21) {
      sign = "Cancer";
  } else if (month == 7 && day <= 22) {
      sign = "Cancer";
  } else if (month == 7 && day >= 23) {
      sign = "Leo";
  } else if (month == 8 && day <= 22) {
      sign = "Leo";
  } else if (month == 8 && day >= 23) {
      sign = "Virgo";
  } else if (month == 9 && day <= 22) {
      sign = "Virgo";
  } else if (month == 9 && day >= 23) {
      sign = "Libra";
  } else if (month == 10 && day <= 22) {
      sign = "Libra";
  } else if (month == 10 && day >= 23) {
      sign = "Scorpio";
  } else if (month == 11 && day <= 21) {
      sign = "Scorpio";
  } else if (month == 11 && day >= 22) {
      sign = "Sagittarius";
  } else if (month == 12 && day <= 21) {
      sign = "Sagittarius";
  } else {
      throw new Error('horoscope.js => month not between 1 and 12 or day is negative')
  }
  return sign;
}
