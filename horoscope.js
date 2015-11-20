//should see performance benefits:
//    main if-else statement test for upper-lower months,
//    then switch statement for discrete months,
//    then if-else for range of days in particular month.

exports.getSign = function (month, day) {
    'use strict';

    if (month <= 6) { //months: Jan, Feb, March, Apr, May, June
        switch (month) {
        case 1: //January
            if (day <= 20) {
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
            if (day <= 21) {
                return "Taurus";
            } else {
                return "Gemini";
            }
        case 6: //June
            if (day <= 21) {
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
            if (day <= 21) {
                return "Leo";
            } else {
                return "Virgo";
            }
        case 9: //September
            if (day <= 23) {
                return "Virgo";
            } else {
                return "Libra";
            }
        case 10: //October
            if (day <= 23) {
                return "Libra";
            } else {
                return "Scorpio";
            }
        case 11: //November
            if (day <= 22) {
                return "Scorpio";
            } else {
                return "Sagittarius";
            }
        case 12: //December
            if (day <= 22) {
                return "Sagittarius";
            } else {
                return "Capricorn";
            }
        }
    }
};


//Zodiac Sign && Date Range:

//Aquarius - January 21 - February 19
//Pisces - February 20- March 20
//Aries - March 21 - April 20
//Taurus - April 21 - May 21
//Gemini - May 22 - June 21
//Cancer - June 22 - July 22
//Leo - July 23 -August 21
//Virgo - August 22 - September 23
//Libra - September 24 - October 23
//Scorpio - October 24 - November 22
//Sagittarius - November 23 - December 22
//Capricorn - December 23 - January 20