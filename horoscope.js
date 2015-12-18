/**
 * Get Astrological Sign from Birthday MONTH and Birthday DAY
 * @throws {Error} if month is not between 1-12 
 * @throws {Error} if day is not between 1-31 
 * @param   {number} month birth month
 * @param   {number} day   birth day
 * @returns {string} Astrological Sign
 */

exports.getSign = function (month, day) {
   'use strict';
   if (month < 1 || month > 12) {
      throw new Error("month needs to be between 1-12");
   } else if (day < 1 || day > 31) {
      throw new Error("check that day isn't zero, negative, or greater than 31");
   } else if (month <= 6 && month > 0) { //months: Jan, Feb, March, Apr, May, June
      switch (month) {
      case 1: //January
         if (day <= 19) {
            return "Capricorn";
         } else {
            return "Aquarius";
         }
      case 2: //February
         if (day <= 19) {
            return "Aquarius";
         } else {
            return "Pisces";
         }
      case 3: //March
         if (day <= 20) {
            return "Pisces";
         } else {
            return "Aries";
         }
      case 4: //April
         if (day <= 20) {
            return "Aries";
         } else {
            return "Taurus";
         }
      case 5: //May
         if (day <= 20) {
            return "Taurus";
         } else {
            return "Gemini";
         }
      case 6: //June
         if (day <= 20) {
            return "Gemini";
         } else {
            return "Cancer";
         }
      }
   } else if (month > 6) { //months: July, Aug, Sept, Oct, Nov, Dec
      switch (month) {
      case 7: //July
         if (day <= 22) {
            return "Cancer";
         } else {
            return "Leo";
         }
      case 8: //August
         if (day <= 22) {
            return "Leo";
         } else {
            return "Virgo";
         }
      case 9: //September
         if (day <= 22) {
            return "Virgo";
         } else {
            return "Libra";
         }
      case 10: //October
         if (day <= 22) {
            return "Libra";
         } else {
            return "Scorpio";
         }
      case 11: //November
         if (day <= 21) {
            return "Scorpio";
         } else {
            return "Sagittarius";
         }
      case 12: //December
         if (day <= 21) {
            return "Sagittarius";
         } else {
            return "Capricorn";
         }
      }
   }
};

/**
 * Gets Zodiac sign from birth year
 * @param   {number} year birth year
 * @returns {string} Zodiac Animal
 */

 // Should also account for day of chinese new year (since it changes but is in february)

exports.getZodiac = function (year) {
   'use strict';
   remainderAnimals = {
      0: "Monkey",
      1: "Rooster",
      2: "Dog",
      3: "Pig",
      4: "Rat",
      5: "Ox",
      6: "Tiger",
      7: "Rabbit",
      8: "Dragon",
      9: "Snake",
      10: "Horse",
      11: "Goat"
   };
   return remainderAnimals[year % 12];
};