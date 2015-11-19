//WORK IN PROGRESS
//should see performance benefits:
//    main if-else statement test for upper-lower months,
//    then switch statement for discrete months,
//    then if-else for range of days in particular month.

exports.getSign = function(month, day) {
  'use strict';
    zodiac = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini',
    'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
    //months: Jan, Feb, March, Apr, May, June
    if (month <= 6) {
      switch (month) {
        case 1:
          if (day <= 20) {
            return zodiac[0];
          } else {
            return zodiac[1];
          }
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
      }


    }
    //months: July, Aug, Sept, Oct, Nov, Dec
    else if (month > 6) {
      switch (month) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
      }
    }
  }
