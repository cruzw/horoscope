//    main if-else statement test for upper-lower months,
//    then switch statement for discrete months,
//    then if-else for range of days in particular month.

exports.getSign = function (month, day) {
    'use strict';
    if (month < 1 || month > 12) {
        throw new Error("month needs to be between 1-12");
    } else if (day < 1 || day > 31) {
        throw new Error("check that day isn't zero, negative, or greater than 31");
    } else if (month <= 6 && month > 0) { //months: Jan, Feb, March, Apr, May, June
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