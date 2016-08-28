import $ from 'jquery';
import { getZodiac, getSign } from './../../../lib/index.js';
// const getZodiac = require('./../../../lib/index.js').getZodiac;
// const getSign = require('./../../../lib/index.js').getSign;

const performance = window.performance;

const $month = $('#month');
const $day = $('#day');
const $year = $('#year');
const $horoscope = $('#horoscope');
const $zodiac = $('#zodiac');
const $speed = $('#speed');

initialize();

function initialize() {
  $month.val(randomIntFromInterval(1, 12));
  $day.val(randomIntFromInterval(1, 30));
  $year.val(randomIntFromInterval(1950, 2050));
  updateView();
  $('.example input').bind('keyup mouseup', e =>  updateView(e));
}

function updateView() {
  let day = parseInt($day.val());
  let month = parseInt($month.val());
  let year = parseInt($year.val());
  let birthDayObj = { day,month };

  let sign = getSign(birthDayObj, true);
  let zodiac = getZodiac(year, true);

  let timeStart = performance.now();

  $horoscope.text(`${sign} ${getSignEmoji(sign)}`);
  $zodiac.text(`${zodiac} ${getZodiacEmoji(zodiac)}`);

  let timeEnd = performance.now();
  $speed.text((timeEnd - timeStart).toFixed(2));

}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getSignEmoji(sign) {
  switch (sign) {
    case 'Aries': return "♈️"
    case 'Taurus': return "♉️"
    case 'Gemini': return "♊️"
    case 'Cancer': return "♋️"
    case 'Leo': return "♌️"
    case 'Virgo': return "♍️"
    case 'Libra': return "♎️"
    case 'Scorpio': return "♏️"
    case 'Sagittarius': return "♐️"
    case 'Capricorn': return "♑️"
    case 'Aquarius': return "♒️"
    case 'Pisces': return "♓️"
    default: return "❌"
  }
}

function getZodiacEmoji(sign) {
  switch (sign) {
    case 'Dragon': return "🐲"
    case 'Snake': return "🐍"
    case 'Horse': return "🐴"
    case 'Goat': return "🐐"
    case 'Monkey': return "🐒"
    case 'Rooster': return "🐓"
    case 'Dog': return "🐶"
    case 'Pig': return "🐷"
    case 'Rat': return "🐭"
    case 'Ox': return "🐂"
    case 'Tiger': return "🐯"
    case 'Rabbit': return "🐰"
    default: return "❌"
  }
}
